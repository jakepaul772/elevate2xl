import { NextResponse } from 'next/server';

export async function POST(request) {
  try {
    const body = await request.json();
    const { amount, currency = 'USD', orderId } = body;

    const apiUser = process.env.FORUMPAY_API_USER;
    const apiSecret = process.env.FORUMPAY_API_SECRET;

    // ForumPay's Payment API base is https://api.forumpay.com/pay/v2/
    // CreatePaymentLink returns a hosted checkout URL to redirect the customer to.
    const params = new URLSearchParams({
      invoice_amount: String(amount),
      invoice_currency: currency,
      widget_type: '0', // 0 = Payment only (you already collect shipping details yourself)
      reference_no: orderId || String(Date.now()),
    });

    const response = await fetch('https://api.forumpay.com/pay/v2/CreatePaymentLink/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded', // ForumPay requires this, not JSON
        Authorization: `Basic ${Buffer.from(`${apiUser}:${apiSecret}`).toString('base64')}`,
      },
      body: params.toString(),
    });

    const text = await response.text();
    let resJson;
    try {
      resJson = JSON.parse(text);
    } catch {
      resJson = { raw: text };
    }

    if (!response.ok || resJson.err) {
      // ForumPay's own error responses use an "err" field, not "message"/"error"
      return NextResponse.json(
        { error: resJson.err || `ForumPay error (status ${response.status})`, raw: resJson },
        { status: response.status }
      );
    }

    if (!resJson.url) {
      return NextResponse.json(
        { error: `Could not find payment URL in ForumPay response. Full response: ${JSON.stringify(resJson)}` },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true, paymentUrl: resJson.url });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
