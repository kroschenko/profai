import { qualities } from '@/core/questions';
import { NextResponse } from 'next/server';
import ollama from 'ollama';
import { MODEL } from '../config';

const isResultValid = (vec: number[]) => {
    return !vec.some((n) => Number.isNaN(n))
}

const parseResponseToArray = (response: string) => {
    const pairs = response.split(", ");
    const resultArray = pairs.map(pair => {
        const [, value] = pair.split(": ");
        return parseFloat(value);
    });

    return resultArray;
}


export async function GET(request: Request) {
    const { searchParams } = new URL(request.url);
    try {
        const message = searchParams.get('text');

        if (!message) {
            return NextResponse.json({ error: 'Parameter "text" is required.' }, { status: 400 });
        }

        const systemPrompt = `
Создай описание для каждого качества пользователя на основе их текста, используя шкалу от 0 до 1, где каждое число показывает степень развития этого качества.
Ответ должен быть выведен в формате:
Аналитическое мышление: 0.87
Креативность: 0.43
и так далее для всех качеств.
`;

        const qualitiesPrompt = qualities.map(q => {
            return `${q.name} – ${q.description}`;
        }).join("\n");

        const userPrompt = `
Вот текст пользователя: "${message}"

А вот качества, для которых нужно создать описание с оценкой:

${qualitiesPrompt}

Ответ пришли в формате: "Аналитическое мышление: 0.87, Креативность: 0.43, ...".
`;

        let isValid = false
        let vec: number[] = []

        while (!isValid) {
            const response = await ollama.chat({
                model: MODEL,
                messages: [
                    { role: 'system', content: systemPrompt },
                    { role: 'user', content: userPrompt }
                ],
            });

            vec = parseResponseToArray(response.message.content)
            isValid = isResultValid(vec)
        }

        return NextResponse.json({ response: vec });
    } catch (error) {
        console.error('Error:', error);
        return NextResponse.json({ error: 'Failed to generate response' }, { status: 500 });
    }
}

