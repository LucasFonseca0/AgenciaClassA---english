import { NextRequest, NextResponse } from 'next/server';
import { verifyPassword, generateToken } from '../../../lib/auth';

const USERNAME = process.env.ADMIN_USERNAME as string;
const PASSWORD_HASH = process.env.ADMIN_PASSWORD_HASH as string;

console.log('USERNAME:', USERNAME);
console.log('PASSWORD_HASH:', PASSWORD_HASH);

export async function POST(request: NextRequest): Promise<NextResponse> {
  try {
    const { username, password }: { username: string; password: string } = await request.json();

    console.log('Received username:', username);
    console.log('Received password:', password);

    if (username !== USERNAME) {
      console.log('Invalid username');
      return NextResponse.json({ success: false, error: 'Invalid credentials' }, { status: 401 });
    }

    const isValid = await verifyPassword(password, PASSWORD_HASH);
    if (!isValid) {
      console.log('Invalid password');
      return NextResponse.json({ success: false, error: 'Invalid credentials' }, { status: 401 });
    }

    const token = generateToken({ username: USERNAME });
    return NextResponse.json({ success: true, token });
  } catch (error) {
    console.error('Error processing request:', error);
    return NextResponse.json({ success: false, error: 'Internal Server Error' }, { status: 500 });
  }
}
