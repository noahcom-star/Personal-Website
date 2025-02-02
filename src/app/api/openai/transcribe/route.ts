import { NextResponse } from "next/server";
import fs from "fs";
import OpenAI from "openai";

const openai = new OpenAI();

export async function POST(req: Request) {
  try {
    return NextResponse.json({ message: "Transcription endpoint" });
  } catch (error) {
    console.error('Transcription error:', error);
    return NextResponse.json(
      { error: 'Failed to process transcription' },
      { status: 500 }
    );
  }
}
