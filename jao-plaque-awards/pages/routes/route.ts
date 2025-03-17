import OpenAI from "openai";
import { NextResponse } from "next/server";

const openai = new OpenAI({ 
    baseURL: process.env.NEXT_PUBLIC_AZURE_OPENAI_ENDPOINT,
apiKey: process.env.NEXT_PUBLIC_GITHUB_TOKEN,
  defaultQuery: { "api-version": "2024-02-15-preview" },
  defaultHeaders: { "api-key": process.env.GITHUB_TOKEN }
});

export async function POST(req: Request) {
if (!process.env.NEXT_PUBLIC_GITHUB_TOKEN || !process.env.NEXT_PUBLIC_AZURE_OPENAI_ENDPOINT) {
    return NextResponse.json(
      { error: "API configuration missing" }, 
      { status: 500 }
    );
  }

  try {
    const { message } = await req.json();
    
    const stream = await openai.chat.completions.create({
      messages: [
        { role: "system", content: "You are joash a 7yr old grade 2 student that is smart in math, science, drawing, arts, music" },
        { role: "user", content: message }
      ],
      model: "gpt-4o-mini",
      stream: true,
      max_tokens: 1000
    });

    // Create a streaming response
    const encoder = new TextEncoder();
    const readable = new ReadableStream({
      async start(controller) {
        try {
          for await (const chunk of stream) {
            const text = chunk.choices[0]?.delta?.content || '';
            if (text) {
                            controller.enqueue(encoder.encode(text));
            }
          }
          controller.close();
        } catch (error) {
          controller.error(error);
        }
      }
    });

    return new Response(readable, {
      headers: {
        'Content-Type': 'text/plain', // Changed to text/plain
        'Cache-Control': 'no-cache',
        'Connection': 'keep-alive',
      },
    });

  } catch (error) {
    console.error("API Error:", error);
    return NextResponse.json(
      { error: error instanceof Error ? error.message : "Failed to get AI response" }, 
      { status: 500 }
    );
  }
}