import type { Metadata } from "next"
import { PageHeader } from "@/components/layout/page-header"
import { ContactForm } from "@/components/contact/contact-form"
import { Reveal } from "@/components/motion/reveal"

export const metadata: Metadata = {
  title: "Contact",
  description: "Reach the ELEVATE2XL research support team for order help, product questions, and wholesale inquiries.",
}

const channels = [
  { label: "Support email", value: "support@elevate2xl.com", note: "Replies within 1 business day" },
  { label: "Wholesale", value: "wholesale@elevate2xl.com", note: "Bulk & lab partnerships" },
  { label: "Hours", value: "Mon–Fri, 9am–6pm ET", note: "Excluding US holidays" },
]

export default function ContactPage() {
  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title="Talk to the lab"
        subtitle="Questions about a compound, an order, or a wholesale partnership? Our research support team is here to help."
      />
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.2fr]">
          <Reveal>
            <div className="space-y-8">
              <div className="space-y-6">
                {channels.map((c) => (
                  <div key={c.label} className="label-gradient glow-pink-hover rounded-2xl p-5">
                    <p className="text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground">{c.label}</p>
                    <p className="mt-2 font-display text-lg text-mist">{c.value}</p>
                    <p className="mt-1 text-sm text-muted-foreground">{c.note}</p>
                  </div>
                ))}
              </div>
              <div className="rounded-2xl border border-pink/20 bg-pink/5 p-5">
                <p className="text-sm leading-relaxed text-muted-foreground">
                  All products are sold strictly for laboratory research use only and are not for human or veterinary
                  consumption. We cannot provide dosing, medical, or usage guidance.
                </p>
              </div>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <ContactForm />
          </Reveal>
        </div>
      </section>
    </>
  )
}
