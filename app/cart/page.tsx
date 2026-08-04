import type { Metadata } from "next"
import { CheckoutClient } from "@/components/cart/checkout-client"

export const metadata: Metadata = {
  title: "Cart & Checkout",
  description: "Review your research order and check out securely.",
}

export default function CartPage() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-20">
      <h1 className="mb-8 font-display text-3xl font-bold tracking-tight text-mist sm:text-4xl">Cart & Checkout</h1>
      <CheckoutClient />
    </section>
  )
}
