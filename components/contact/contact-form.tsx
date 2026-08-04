"use client"

import type React from "react"

import { useState } from "react"
import { motion, AnimatePresence } from "motion/react"
import { Button } from "@/components/ui/button"

const topics = ["Order support", "Product question", "Wholesale", "Press", "Other"]

export function ContactForm() {
  const [sent, setSent] = useState(false)
  const [topic, setTopic] = useState(topics[0])

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setSent(true)
  }

  return (
    <div className="relative">
      <AnimatePresence mode="wait">
        {sent ? (
          <motion.div
            key="sent"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            className="rounded-2xl border border-border bg-card p-8 text-center"
          >
            <div className="mx-auto mb-4 flex size-12 items-center justify-center rounded-full bg-primary/15 text-primary">
              <svg viewBox="0 0 24 24" className="size-6" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M20 6 9 17l-5-5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <h3 className="font-serif text-2xl">Message received</h3>
            <p className="mt-2 text-pretty text-muted-foreground">
              Our team replies within one business day. Check your inbox for a confirmation.
            </p>
            <Button variant="outline" className="mt-6 bg-transparent" onClick={() => setSent(false)}>
              Send another
            </Button>
          </motion.div>
        ) : (
          <motion.form
            key="form"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            onSubmit={handleSubmit}
            className="space-y-5"
          >
            <div className="grid gap-5 sm:grid-cols-2">
              <Field label="Name" htmlFor="name">
                <input id="name" name="name" required className={inputCls} placeholder="Jordan Rivera" />
              </Field>
              <Field label="Email" htmlFor="email">
                <input id="email" name="email" type="email" required className={inputCls} placeholder="you@email.com" />
              </Field>
            </div>

            <Field label="Topic" htmlFor="topic">
              <div className="flex flex-wrap gap-2">
                {topics.map((t) => (
                  <button
                    key={t}
                    type="button"
                    onClick={() => setTopic(t)}
                    className={`rounded-full border px-4 py-2 text-sm transition-colors ${
                      topic === t
                        ? "border-primary bg-primary/15 text-primary"
                        : "border-border text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    {t}
                  </button>
                ))}
              </div>
            </Field>

            <Field label="Message" htmlFor="message">
              <textarea
                id="message"
                name="message"
                required
                rows={5}
                className={`${inputCls} resize-none`}
                placeholder="How can we help?"
              />
            </Field>

            <Button type="submit" size="lg" className="w-full font-semibold">
              Send message
            </Button>
          </motion.form>
        )}
      </AnimatePresence>
    </div>
  )
}

const inputCls =
  "w-full rounded-xl border border-border bg-background px-4 py-3 text-sm outline-none transition-colors placeholder:text-muted-foreground/60 focus:border-primary"

function Field({
  label,
  htmlFor,
  children,
}: {
  label: string
  htmlFor: string
  children: React.ReactNode
}) {
  return (
    <div className="space-y-2">
      <label htmlFor={htmlFor} className="text-sm font-medium text-foreground">
        {label}
      </label>
      {children}
    </div>
  )
}
