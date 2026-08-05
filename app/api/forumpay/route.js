import { NextResponse } from 'next/server';
export async function POST(request) {
  try {
    const body = await request.json();
    const { amount, currency = 'USD', orderId } = body;
    // .trim() strips accidental leading/trailing spaces or newlines that can
    // sneak in when copy-pasting into Vercel's env var fields.
    const apiUser = process.env.FORUMPAY_API_USER?.trim();
    const apiSecret = process.env.FORUMPAY_API_SECRET?.trim();
    // DEBUG: Check what Vercel is actually reading (safe to leave on temporarily —
    // only lengths and a few edge characters are logged, never the full secret)
    console.log("API User:", apiUser, "| length:", apiUser?.length);
    console.log("API Secret length:", apiSecret?.length, "(should be 60)");
    console.log("API Secret first 8 chars:", apiSecret?.substring(0, 8));
    console.log("API Secret last 8 chars:", apiSecret?.slice(-8));
    const params = new URLSearchParams({
      invoice_amount: String(amount),
      invoice_currency: currency,
      widget_type: '0',
      reference_no: orderId || String(Date.now()),
      secure_link: 'true',
    });
    const response = await fetch('https://api.forumpay.com/pay/v2/CreatePaymentLink/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
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
