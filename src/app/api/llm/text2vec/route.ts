import {qualities} from '@/core/questions';
import {NextResponse} from 'next/server';
import OpenAI from "openai";
import {MODEL} from '../config';

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY })

const isResultValid = (vec: number[]) => {
    return !vec.some((n) => Number.isNaN(n)) && vec.length == qualities.length;
};

const parseResponseToArray = (response: string) => {
    const pairs = response.split('\n');
    return pairs.map(pair => {
        const [, value] = pair.split(': ');
        return parseFloat(value);
    });
};

export async function GET(request: Request) {
    const { searchParams } = new URL(request.url);
    try {
        const start = performance.now();
        const message = searchParams.get('text');
        const debug = searchParams.has('debug');
        const debugData: {
            llmResponses: string[];
            parsedResults: number[][];
            processingTimes: number[];
        } = {
            llmResponses: [],
            parsedResults: [],
            processingTimes: []
        };

        if (!message) {
            return NextResponse.json({ error: 'Parameter "text" is required.' }, { status: 400 });
        }

        const systemPrompt = `
Создай описание для каждого качества пользователя на основе их текста, используя шкалу от 0 до 1, где каждое число показывает степень развития этого качества.
Ответ должен быть выведен в формате:
Анализ: 0.87
Адаптивность: 0.43
и так далее для всех качеств.
`;

        const qualitiesPrompt = qualities.map(q => {
            return `${q.name} – ${q.description}`;
        }).join('\n');

        const userPrompt = `
Вот текст пользователя: "${message}"

А вот качества, для которых нужно создать описание с оценкой:

${qualitiesPrompt}

Ответ пришли в формате: "Анализ: 0.87, Адаптивность: 0.43, ...".
`;

        let isValid = false;
        let vec: number[] = [];

        while (!isValid) {
            const iterationStart = performance.now();
            const response = await openai.chat.completions.create({
                model: MODEL,
                messages: [
                    { role: 'system', content: systemPrompt },
                    { role: 'user', content: userPrompt }
                ],
            });

            const content_message = response.choices[0].message.content
            const llmResponse = content_message ? content_message : '';
            // eslint-disable-next-line @typescript-eslint/no-unused-expressions
            debug && debugData.llmResponses.push(llmResponse);

            vec = parseResponseToArray(llmResponse);
            // eslint-disable-next-line @typescript-eslint/no-unused-expressions
            debug && debugData.parsedResults.push(vec);

            isValid = isResultValid(vec);
            const iterationEnd = performance.now();
            // eslint-disable-next-line @typescript-eslint/no-unused-expressions
            debug && debugData.processingTimes.push(iterationEnd - iterationStart);
        }

        const end = performance.now();
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const responseObj: any = { response: vec };

        if (debug) {
            responseObj.debug = {
                llmResponses: debugData.llmResponses,
                parsedResults: debugData.parsedResults,
                processingTimes: debugData.processingTimes,
                totalTime: end - start
            };
        }

        return NextResponse.json(responseObj);
    } catch (error) {
        console.error('Error:', error);
        return NextResponse.json({ error: 'Failed to generate response' }, { status: 500 });
    }
}

export const dynamic = 'force-dynamic';
