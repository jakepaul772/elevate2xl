import { NextResponse } from 'next/server';

export async function POST(request) {
  try {
    const body = await request.json();
    const { amount, currency = 'USD', orderId } = body;

    const apiUser = process.env.FORUMPAY_API_USER;
    const apiSecret = process.env.FORUMPAY_API_SECRET;

    // Updated endpoint path to ensure it hits the API gateway directly
    const response = await fetch('https://forumpay.com/api/v1/payment/create', {
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
    let resJson;
    try {
      resJson = JSON.parse(text);
    } catch {
      return NextResponse.json({ error: `ForumPay returned HTML instead of JSON. Check API endpoint URL. Response preview: ${text.slice(0, 150)}` }, { status: 500 });
    }

    if (!response.ok) {
      return NextResponse.json({ error: resJson.message || resJson.error || 'ForumPay error' }, { status: response.status });
    }

    const paymentUrl = 
      resJson.payment_url || 
      resJson.url || 
      resJson.redirect_url || 
      resJson.paymentUrl ||
      resJson?.data?.url ||
      resJson?.data?.payment_url;

    if (!paymentUrl) {
      return NextResponse.json({ 
        error: `Could not find payment URL. Keys found: ${Object.keys(resJson).join(', ')}` 
      }, { status: 500 });
    }

    return NextResponse.json({ success: true, paymentUrl });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
