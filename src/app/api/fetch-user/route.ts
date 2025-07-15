import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  const { input } = await req.json();

  // Validate and extract username
  const username = input.includes('/user/')
    ? input.split('/user/')[1].split(/[/?]/)[0]
    : input.replace(/^u\//, '');

  // Simulate backend processing
  await new Promise((res) => setTimeout(res, 2000)); // Simulate delay

  // Replace with your actual data fetching logic
  const fakePersona = {
    username,
    age: 24,
    personality: 'INTP',
    motivations: ['Convenience', 'Speed'],
    status: 'Student',
  };

  return NextResponse.json({ success: true, persona: fakePersona });
}
