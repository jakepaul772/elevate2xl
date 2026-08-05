import { NextResponse } from 'next/server';

export async function POST(request) {
  try {
    const body = await request.json();
    const { amount, currency = 'USD', orderId } = body;

    const apiUser = process.env.FORUMPAY_API_USER;
    const apiSecret = process.env.FORUMPAY_API_SECRET;

    const response = await fetch('https://dashboard.forumpay.com/api/v1/payment/create', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Basic ${Buffer.from(`${apiUser}:${apiSecret}`).toString('base64')}`,
      },
      body: JSON.stringify({
        merchant_amount: amount,
        merchant_currency: currency,
        merchant_order_id: orderId,
      }),
    });

    const text = await response.text();
    let data;
    try {
      data = JSON.parse(text);
    } catch {
      data = { message: text };
    }

    if (!response.ok) {
      return NextResponse.json({ error: data.message || data.error || 'ForumPay error' }, { status: response.status });
    }

    return NextResponse.json({ success: true, paymentUrl: data.payment_url || data.url });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
