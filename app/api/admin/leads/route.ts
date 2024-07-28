import { NextRequest, NextResponse } from 'next/server';
import dbConnect from '../../../../lib/mongoose';
import Lead from '../../../../models/Lead';
import { verifyToken } from '../../../../lib/auth';

export async function GET(request: NextRequest): Promise<NextResponse> {
  const token = request.headers.get('Authorization')?.replace('Bearer ', '');

  if (!token || !verifyToken(token)) {
    return NextResponse.json({ success: false, error: 'Unauthorized' }, { status: 401 });
  }

  await dbConnect();
  try {
    const leads = await Lead.find({});
    return NextResponse.json({ success: true, data: leads }, { status: 200 });
  } catch (error) {
    console.error('Erro ao buscar leads:', error);
    return NextResponse.json({ success: false }, { status: 400 });
  }
}
