"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { AnimatePresence, motion } from "motion/react"
import { Minus, Plus, ShoppingBag, Trash2, Lock, CheckCircle2, Bitcoin } from "lucide-react"
import { useCart } from "@/components/cart/cart-provider"
import { formatPrice } from "@/lib/products"
import { Button } from "@/components/ui/button"

const SHIPPING_THRESHOLD = 100
const SHIPPING_FLAT = 12

export function CheckoutClient() {
  const { detailed, subtotal, setQty, remove, clear, count } = useCart()
  const [step, setStep] = useState<"cart" | "details" | "done">("cart")
  const [paymentMethod, setPaymentMethod] = useState<"card" | "crypto">("card")
  const [loadingCrypto, setLoadingCrypto] = useState(false)

  const shipping = subtotal >= SHIPPING_THRESHOLD || subtotal === 0 ? 0 : SHIPPING_FLAT
  const tax = Math.round(subtotal * 0.07 * 100) / 100
  const total = subtotal + shipping + tax

  async function placeOrder(e: React.FormEvent) {
    e.preventDefault()

    if (paymentMethod === "crypto") {
      try {
        setLoadingCrypto(true)
        const response = await fetch('/api/forumpay', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            amount: total,
            currency: 'USD',
            orderId: `ORD-${Date.now()}`
          })
        })

        const data = await response.json()

        if (!response.ok) {
          throw new Error(data.error || 'Failed to initialize crypto payment')
        }

        if (data.paymentUrl) {
          clear()
          window.location.href = data.paymentUrl
          return
        }
      } catch (err: any) {
        alert(err.message || 'Error connecting to ForumPay')
        setLoadingCrypto(false)
        return
      }
    }

    setStep("done")
    clear()
  }

  if (step === "done") {
    return (
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        className="mx-auto max-w-xl rounded-3xl border border-border bg-card p-10 text-center"
      >
        <div className="mx-auto mb-5 flex size-14 items-center justify-center rounded-full bg-pink/15 text-pink">
          <CheckCircle2 className="size-8" />
        </div>
        <h2 className="font-display text-3xl font-bold text-mist">Order confirmed</h2>
        <p className="mt-3 text-pretty leading-relaxed text-muted-foreground">
          Thanks for your research order. A confirmation and tracking details are on the way to your inbox. This is a
          demo checkout, so no payment was processed.
        </p>
        <Link href="/shop">
          <Button size="lg" className="mt-7 font-semibold">
            Continue browsing
          </Button>
        </Link>
      </motion.div>
    )
  }

  if (count === 0) {
    return (
      <div className="mx-auto flex max-w-md flex-col items-center gap-5 rounded-3xl border border-border bg-card p-10 text-center">
        <div className="flex size-16 items-center justify-center rounded-full border border-border">
          <ShoppingBag className="size-7 text-muted-foreground" />
        </div>
        <h2 className="font-display text-2xl font-bold text-mist">Your cart is empty</h2>
        <p className="text-muted-foreground">Add some research compounds to get started.</p>
        <Link href="/shop">
          <Button size="lg" className="font-semibold">
            Browse products
          </Button>
        </Link>
      </div>
    )
  }

  return (
    <div className="grid gap-10 lg:grid-cols-[1.5fr_1fr]">
      <div>
        <AnimatePresence mode="wait">
          {step === "cart" ? (
            <motion.ul
              key="items"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="divide-y divide-border rounded-2xl border border-border bg-card"
            >
              {detailed.map(({ product, qty }) => (
                <li key={product.slug} className="flex gap-4 p-5">
                  <div className="flex size-20 shrink-0 items-center justify-center rounded-xl border border-border bg-secondary/40">
                    <span className="font-display text-sm font-bold text-pink">
                      {product.baseName.slice(0, 2).toUpperCase()}
                    </span>
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <Link
                          href={`/product/${product.slug}`}
                          className="font-semibold text-mist transition-colors hover:text-pink"
                        >
                          {product.name}
                        </Link>
                        <p className="text-sm text-muted-foreground">{product.size}</p>
                      </div>
                      <button
                        type="button"
                        onClick={() => remove(product.slug)}
                        className="text-muted-foreground transition-colors hover:text-destructive"
                        aria-label={`Remove ${product.name}`}
                      >
                        <Trash2 className="size-4" />
                      </button>
                    </div>
                    <div className="mt-3 flex items-center justify-between">
                      <div className="flex items-center gap-1 rounded-full border border-border">
                        <button
                          type="button"
                          onClick={() => setQty(product.slug, qty - 1)}
                          className="inline-flex size-8 items-center justify-center rounded-full text-mist hover:bg-secondary/60"
                          aria-label={`Decrease ${product.name}`}
                        >
                          <Minus className="size-3.5" />
                        </button>
                        <span className="tabular w-7 text-center text-sm text-mist">{qty}</span>
                        <button
                          type="button"
                          onClick={() => setQty(product.slug, qty + 1)}
                          className="inline-flex size-8 items-center justify-center rounded-full text-mist hover:bg-secondary/60"
                          aria-label={`Increase ${product.name}`}
                        >
                          <Plus className="size-3.5" />
                        </button>
                      </div>
                      <span className="tabular font-display font-semibold text-mist">
                        {formatPrice(product.price * qty)}
                      </span>
                    </div>
                  </div>
                </li>
              ))}
            </motion.ul>
          ) : (
            <motion.form
              key="details"
              initial={{ opacity: 0, x: 12 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -12 }}
              onSubmit={placeOrder}
              className="space-y-6 rounded-2xl border border-border bg-card p-6"
            >
              <fieldset className="space-y-4">
                <legend className="font-display text-lg font-semibold text-mist">Shipping details</legend>
                <div className="grid gap-4 sm:grid-cols-2">
                  <Input name="fname" label="First name" required />
                  <Input name="lname" label="Last name" required />
                </div>
                <Input name="email" type="email" label="Email" required />
                <Input name="address" label="Address" required />
                <div className="grid gap-4 sm:grid-cols-3">
                  <Input name="city" label="City" required />
                  <Input name="state" label="State" required />
                  <Input name="zip" label="ZIP" required />
                </div>
              </fieldset>

              <fieldset className="space-y-4">
                <legend className="font-display text-lg font-semibold text-mist">Payment Method</legend>
                
                <div className="grid grid-cols-2 gap-4">
                  <div 
                    onClick={() => setPaymentMethod("card")}
                    className={`cursor-pointer rounded-xl border p-4 transition-all ${paymentMethod === "card" ? "border-pink bg-pink/5" : "border-border"}`}
                  >
                    <p className="font-semibold text-mist text-sm">Credit Card</p>
                    <p className="text-xs text-muted-foreground mt-1">Standard demo card</p>
                  </div>

                  <div 
                    onClick={() => setPaymentMethod("crypto")}
                    className={`cursor-pointer rounded-xl border p-4 transition-all flex flex-col justify-between ${paymentMethod === "crypto" ? "border-pink bg-pink/5" : "border-border"}`}
                  >
                    <div className="flex items-center gap-1.5">
                      <Bitcoin className="size-4 text-pink" />
                      <p className="font-semibold text-mist text-sm">Crypto (ForumPay)</p>
                    </div>
                    <p className="text-xs text-muted-foreground mt-1">Pay with Bitcoin, USDT, etc.</p>
                  </div>
                </div>

                {paymentMethod === "card" ? (
                  <div className="space-y-4 pt-2">
                    <Input name="card" label="Card number" placeholder="4242 4242 4242 4242" required />
                    <div className="grid gap-4 sm:grid-cols-2">
                      <Input name="exp" label="Expiry" placeholder="MM/YY" required />
                      <Input name="cvc" label="CVC" placeholder="123" required />
                    </div>
                    <p className="flex items-center gap-2 text-xs text-muted-foreground">
                      <Lock className="size-3.5" />
                      Demo checkout — no real payment is processed.
                    </p>
                  </div>
                ) : (
                  <div className="pt-2">
                    <p className="text-xs text-muted-foreground">
                      You will be securely redirected to ForumPay to complete your cryptocurrency checkout.
                    </p>
                  </div>
                )}
              </fieldset>
            </motion.form>
          )}
        </AnimatePresence>

        <div className="mt-5">
          {step === "cart" ? (
            <Link href="/shop" className="text-sm text-muted-foreground transition-colors hover:text-mist">
              ← Continue shopping
            </Link>
          ) : (
            <button
              type="button"
              onClick={() => setStep("cart")}
              className="text-sm text-muted-foreground transition-colors hover:text-mist"
            >
              ← Back to cart
            </button>
          )}
        </div>
      </div>

      <aside className="h-fit rounded-2xl border border-border bg-card p-6 lg:sticky lg:top-28">
        <h2 className="font-display text-lg font-semibold text-mist">Order summary</h2>
        <dl className="mt-4 space-y-3 text-sm">
          <Row label="Subtotal" value={formatPrice(subtotal)} />
          <Row label="Shipping" value={shipping === 0 ? "Free" : formatPrice(shipping)} />
          <Row label="Est. tax" value={formatPrice(tax)} />
          {shipping !== 0 && (
            <p className="rounded-lg bg-secondary/40 px-3 py-2 text-xs text-muted-foreground">
              Add {formatPrice(SHIPPING_THRESHOLD - subtotal)} more for free shipping.
            </p>
          )}
          <div className="flex items-center justify-between border-t border-border pt-3">
            <dt className="font-medium text-mist">Total</dt>
            <dd className="tabular font-display text-2xl font-bold text-mist">{formatPrice(total)}</dd>
          </div>
        </dl>

        {step === "cart" ? (
          <Button size="lg" className="mt-6 w-full font-semibold" onClick={() => setStep("details")}>
            Proceed to checkout
          </Button>
        ) : (
          <Button
            size="lg"
            className="mt-6 w-full font-semibold"
            disabled={loadingCrypto}
            onClick={(e) => {
              const form = document.querySelector("form")
              if (form) form.requestSubmit()
              else e.preventDefault()
            }}
          >
            {loadingCrypto ? "Connecting to ForumPay..." : paymentMethod === "crypto" ? `Pay with Crypto · ${formatPrice(total)}` : `Place order · ${formatPrice(total)}`}
          </Button>
        )}
        <p className="mt-3 text-center text-xs text-muted-foreground">For laboratory research use only.</p>
      </aside>
    </div>
  )
}

function Row({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-center justify-between">
      <dt className="text-muted-foreground">{label}</dt>
      <dd className="tabular text-mist">{value}</dd>
    </div>
  )
}

function Input({
  name,
  label,
  type = "text",
  placeholder,
  required,
}: {
  name: string
  label: string
  type?: string
  placeholder?: string
  required?: boolean
}) {
  return (
    <div className="space-y-2">
      <label htmlFor={name} className="text-sm font-medium text-mist">
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        placeholder={placeholder}
        required={required}
        className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm outline-none transition-colors placeholder:text-muted-foreground/60 focus:border-pink"
      />
    </div>
  )
}
