import { cn } from '@/lib/utils'

export function LogoMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 64 64"
      className={cn('h-8 w-8', className)}
      role="img"
      aria-label="ELEVATE2XL molecule mark"
      fill="none"
    >
      {/* Venus ring built from three linked spheres */}
      <g stroke="currentColor" strokeWidth="2.4" strokeLinecap="round">
        <line x1="26" y1="18" x2="34" y2="12" />
        <line x1="34" y1="12" x2="34" y2="24" />
        <line x1="26" y1="18" x2="34" y2="24" />
      </g>
      <circle cx="26" cy="18" r="4.4" fill="var(--color-pink)" />
      <circle cx="34" cy="12" r="4.4" fill="var(--color-pink)" />
      <circle cx="34" cy="24" r="4.4" fill="currentColor" />
      {/* Venus cross / stem */}
      <g stroke="currentColor" strokeWidth="2.8" strokeLinecap="round">
        <line x1="30" y1="30" x2="30" y2="48" />
        <line x1="22" y1="42" x2="38" y2="42" />
      </g>
      {/* Ring outline */}
      <circle cx="30" cy="19" r="12.5" stroke="currentColor" strokeWidth="2.4" opacity="0.55" />
      {/* Arrow breaking out top-right */}
      <g stroke="var(--color-pink)" strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round">
        <line x1="42" y1="22" x2="54" y2="10" />
        <polyline points="46,9 55,9 55,18" fill="none" />
      </g>
    </svg>
  )
}

export function Logo({
  className,
  markClassName,
  showWord = true,
}: {
  className?: string
  markClassName?: string
  showWord?: boolean
}) {
  return (
    <span className={cn('inline-flex items-center gap-2.5', className)}>
      <LogoMark className={cn('text-mist', markClassName)} />
      {showWord && (
        <span className="font-display text-lg font-bold leading-none tracking-tight">
          <span className="text-mist">ELEVATE</span>
          <span className="text-pink">2XL</span>
        </span>
      )}
    </span>
  )
}
