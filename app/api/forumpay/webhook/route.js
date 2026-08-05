import { NextResponse } from 'next/server';

export async function POST(request) {
  try {
    const body = await request.json();

    console.log('ForumPay webhook received:', JSON.stringify(body));

    // TODO: look up the order via body.reference_no and update its
    // status in your DB based on body.status (e.g. "confirmed", "cancelled")

    return NextResponse.json({ received: true }, { status: 200 });
  } catch (error) {
    console.error('ForumPay webhook error:', error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
