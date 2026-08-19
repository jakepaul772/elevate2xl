'use client'

import { AnimatePresence, motion } from 'motion/react'
import { useEffect, useState } from 'react'
import { LogoMark } from '@/components/brand/logo'

const STORAGE_KEY = 'e2xl-age-verified'

function calculateAge(dob: string): number | null {
  if (!dob) return null
  const birthDate = new Date(dob)
  if (Number.isNaN(birthDate.getTime())) return null
  const today = new Date()
  let age = today.getFullYear() - birthDate.getFullYear()
  const m = today.getMonth() - birthDate.getMonth()
  if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
    age--
  }
  return age
}

function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
}

export function AgeGate() {
  const [status, setStatus] = useState<'checking' | 'open' | 'closed'>('checking')
  const [denied, setDenied] = useState(false)
  const [dob, setDob] = useState('')
  const [email, setEmail] = useState('')
  const [agreed, setAgreed] = useState(false)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    try {
      const ok = localStorage.getItem(STORAGE_KEY) === 'true'
      setStatus(ok ? 'closed' : 'open')
    } catch {
      setStatus('open')
    }
  }, [])

  useEffect(() => {
    if (status === 'open') {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [status])

  function confirm() {
    setError(null)

    if (!dob) {
      setError('Please enter your date of birth.')
      return
    }
    if (!email || !isValidEmail(email)) {
      setError('Please enter a valid email address.')
      return
    }
    if (!agreed) {
      setError('Please confirm the acknowledgement checkbox.')
      return
    }

    const age = calculateAge(dob)
    if (age === null) {
      setError('Please enter a valid date of birth.')
      return
    }
    if (age < 18) {
      setDenied(true)
      return
    }

    try {
      localStorage.setItem(STORAGE_KEY, 'true')
      localStorage.setItem(
        `${STORAGE_KEY}-record`,
        JSON.stringify({ email, dob, verifiedAt: new Date().toISOString() })
      )
    } catch {
      // ignore
    }
    setStatus('closed')
  }

  return (
    <AnimatePresence>
      {status === 'open' && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center px-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          role="dialog"
          aria-modal="true"
          aria-labelledby="age-gate-title"
        >
          <div className="absolute inset-0 mesh-hero" aria-hidden="true" />
          <motion.div
            className="glass-strong relative w-full max-w-md rounded-2xl p-8 text-center"
            initial={{ scale: 0.94, y: 16, opacity: 0 }}
            animate={{ scale: 1, y: 0, opacity: 1 }}
            exit={{ scale: 0.96, opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          >
            <LogoMark className="mx-auto h-12 w-12 text-mist" />
            <h2 id="age-gate-title" className="mt-5 font-display text-2xl font-bold text-mist">
              Age Verification
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              This website sells research materials intended for laboratory use only. You must be at least 18 years old
              to enter. By continuing, you confirm you are 18 or older and agree these products are not for human
              consumption.
            </p>

            {denied ? (
              <p className="mt-6 rounded-lg border border-border bg-secondary/40 px-4 py-3 text-sm text-mist/80">
                You must be 18 or older to access this site.
              </p>
            ) : (
              <div className="mt-7 flex flex-col gap-4 text-left">
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="age-gate-dob" className="text-xs font-medium text-muted-foreground">
                    Date of birth
                  </label>
                  <input
                    id="age-gate-dob"
                    type="date"
                    value={dob}
                    onChange={(e) => setDob(e.target.value)}
                    max={new Date().toISOString().split('T')[0]}
                    className="h-11 rounded-lg border border-border bg-secondary/40 px-3 text-sm text-mist outline-none focus:border-primary"
                  />
                </div>

                <div className="flex flex-col gap-1.5">
                  <label htmlFor="age-gate-email" className="text-xs font-medium text-muted-foreground">
                    Email address
                  </label>
                  <input
                    id="age-gate-email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="you@example.com"
                    className="h-11 rounded-lg border border-border bg-secondary/40 px-3 text-sm text-mist outline-none placeholder:text-muted-foreground/60 focus:border-primary"
                  />
                </div>

                <label className="flex items-start gap-2.5 text-xs leading-relaxed text-muted-foreground">
                  <input
                    type="checkbox"
                    checked={agreed}
                    onChange={(e) => setAgreed(e.target.checked)}
                    className="mt-0.5 h-4 w-4 shrink-0 rounded border-border bg-secondary/40 accent-primary"
                  />
                  I confirm the information above is accurate, that I am 18 years of age or older, and that these
                  products are not for human consumption.
                </label>

                {error && (
                  <p role="alert" className="text-xs font-medium text-primary">
                    {error}
                  </p>
                )}

                <div className="mt-1 flex flex-col gap-3">
                  <button
                    type="button"
                    onClick={confirm}
                    className="glow-pink glow-pink-hover h-12 rounded-full bg-primary text-sm font-semibold text-primary-foreground"
                  >
                    Verify and Enter
                  </button>
                  <button
                    type="button"
                    onClick={() => setDenied(true)}
                    className="h-11 rounded-full border border-border text-sm font-medium text-muted-foreground transition-colors hover:text-mist"
                  >
                    I am under 18
                  </button>
                </div>
              </div>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
