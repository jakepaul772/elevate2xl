import { FlaskConical } from 'lucide-react'
import { cn } from '@/lib/utils'

export function ComplianceNote({ className, compact = false }: { className?: string; compact?: boolean }) {
  return (
    <div
      className={cn(
        'flex items-start gap-3 rounded-xl border border-pink/25 bg-pink/5 px-4 py-3',
        className,
      )}
      role="note"
    >
      <FlaskConical className="mt-0.5 h-4 w-4 shrink-0 text-pink" aria-hidden="true" />
      <p className={cn('leading-relaxed text-mist/90', compact ? 'text-xs' : 'text-sm')}>
        <span className="font-semibold text-pink">For research use only.</span> Not for human consumption. These
        products are intended strictly for laboratory and research purposes and are not drugs, foods, cosmetics, or
        supplements.
      </p>
    </div>
  )
}
