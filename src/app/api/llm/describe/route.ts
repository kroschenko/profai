import { NextResponse } from 'next/server';
import OpenAI from "openai";
import { MODEL } from '../config';

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY })

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  try {
    const top = searchParams.get('top');
    const text = searchParams.get('text');

    if (!top) {
      return NextResponse.json({ error: 'Parameter "top" is required.' }, { status: 400 });
    }

    if (!text) {
      return NextResponse.json({ error: 'Parameter "text" is required.' }, { status: 400 });
    }

    const systemPrompt = `
Объясни почему именно этот факультет подходит пользователю используя описание.
`;

    const userPrompt = `
Вот самый подходящий факультет для пользователя "${top}"

А вот описание пользователя:

${text}

Ответ в формате одного абзаца, начинающегося с "Результаты обусловлены тем, что" и далее идет твой ответ. Ответ должен быть адресован пользователю, обращайся на Вы. 
`;

    const response = await openai.chat.completions.create({
      model: MODEL,
      messages: [
        { role: 'system', content: systemPrompt },
        { role: 'user', content: userPrompt }
      ],
    });

    return  NextResponse.json({ response: response.choices[0].message.content });
  } catch (error) {
    console.error('Error:', error);
    return NextResponse.json({ error: 'Failed to generate response' }, { status: 500 });
  }
}