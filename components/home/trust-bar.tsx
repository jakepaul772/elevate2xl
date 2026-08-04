import { FlaskConical, ShieldCheck, Snowflake, Truck } from 'lucide-react'
import { StaggerGroup, StaggerItem } from '@/components/motion/reveal'

const ITEMS = [
  { icon: ShieldCheck, stat: '99%+', label: 'Verified purity' },
  { icon: FlaskConical, stat: '3rd-party', label: 'Independent testing' },
  { icon: Snowflake, stat: 'Cold-chain', label: 'Temperature controlled' },
  { icon: Truck, stat: '24–48h', label: 'Fast dispatch' },
]

export function TrustBar() {
  return (
    <section className="border-y border-border bg-ink/60">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <StaggerGroup className="grid grid-cols-2 divide-x divide-y divide-border sm:grid-cols-4 sm:divide-y-0">
          {ITEMS.map((item) => (
            <StaggerItem key={item.label}>
              <div className="flex items-center gap-3 px-4 py-6 sm:px-6">
                <item.icon className="h-6 w-6 shrink-0 text-pink" aria-hidden="true" />
                <div>
                  <p className="font-display text-lg font-bold leading-none text-mist">{item.stat}</p>
                  <p className="mt-1 text-xs text-muted-foreground">{item.label}</p>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </div>
    </section>
  )
}
