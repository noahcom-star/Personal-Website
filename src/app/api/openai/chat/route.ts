import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  try {
    return NextResponse.json({ message: "Chat endpoint" });
  } catch (error) {
    console.error('Chat error:', error);
    return NextResponse.json(
      { error: 'Failed to process chat request' },
      { status: 500 }
    );
  }
}
