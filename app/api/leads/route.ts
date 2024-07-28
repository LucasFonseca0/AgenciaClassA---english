import dbConnect from '../../../lib/mongoose';
import Lead from '../../../models/Lead';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    console.log('Attempting to connect to MongoDB...');
    await dbConnect();
    console.log('MongoDB connection established');
  } catch (error: any) {
    console.error('MongoDB connection error:', error.message, error.stack);
    return NextResponse.json({ success: false, error: 'Error connecting to the database.' }, { status: 500 });
  }

  try {
    const data = await request.json();
    console.log('Received data:', data);
    const lead = await Lead.create(data);
    console.log('Lead created:', lead);
    return NextResponse.json({ success: true, data: lead }, { status: 201 });
  } catch (error: any) {
    console.error('Error creating lead:', error.message, error.stack);
    return NextResponse.json({ success: false, error: (error as Error).message }, { status: 400 });
  }
}

export async function GET() {
  try {
    console.log('Attempting to connect to MongoDB...');
    await dbConnect();
    console.log('MongoDB connection established');
  } catch (error: any) {
    console.error('MongoDB connection error:', error.message, error.stack);
    return NextResponse.json({ success: false, error: 'Error connecting to the database.' }, { status: 500 });
  }

  try {
    const leads = await Lead.find({});
    console.log('Leads found:', leads);
    return NextResponse.json({ success: true, data: leads }, { status: 200 });
  } catch (error: any) {
    console.error('Error fetching leads:', error.message, error.stack);
    return NextResponse.json({ success: false }, { status: 400 });
  }
}
