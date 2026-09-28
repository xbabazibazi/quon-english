import type { ReactNode, ButtonHTMLAttributes } from 'react'

export function Screen({ children, className = '' }: { children: ReactNode; className?: string }) {
  return (
    <div className={`mx-auto flex min-h-full w-full max-w-md flex-col px-4 pb-8 pt-[max(1rem,env(safe-area-inset-top))] ${className}`}>
      {children}
    </div>
  )
}

export function TopBar({ title, left, right, progress }: { title?: ReactNode; left?: ReactNode; right?: ReactNode; progress?: number }) {
  return (
    <div className="mb-4">
      <div className="flex h-11 items-center justify-between">
        <div className="min-w-10">{left}</div>
        <div className="text-sm font-semibold text-muted">{title}</div>
        <div className="min-w-10 text-right">{right}</div>
      </div>
      {progress !== undefined && <Progress value={progress} />}
    </div>
  )
}

export function Progress({ value, color = 'bg-brand' }: { value: number; color?: string }) {
  return (
    <div className="h-2.5 w-full overflow-hidden rounded-full bg-slate-200">
      <div className={`h-full rounded-full ${color} transition-all duration-300`} style={{ width: `${Math.max(0, Math.min(100, value * 100))}%` }} />
    </div>
  )
}

type BtnProps = ButtonHTMLAttributes<HTMLButtonElement> & { variant?: 'primary' | 'secondary' | 'ghost' | 'ok' | 'bad'; full?: boolean }

export function Button({ variant = 'primary', full = true, className = '', children, ...rest }: BtnProps) {
  const base = 'inline-flex items-center justify-center rounded-2xl px-5 py-3.5 text-base font-semibold transition active:scale-[0.98] disabled:opacity-40 disabled:active:scale-100'
  const v = {
    primary: 'bg-brand text-white shadow-[0_4px_0_0_var(--color-brand-dark)] active:shadow-none active:translate-y-[2px]',
    secondary: 'bg-white text-ink border-2 border-slate-200 shadow-[0_3px_0_0_#e2e8f0] active:shadow-none active:translate-y-[2px]',
    ghost: 'bg-transparent text-brand',
    ok: 'bg-ok text-white shadow-[0_4px_0_0_#15803d]',
    bad: 'bg-bad text-white shadow-[0_4px_0_0_#b91c1c]',
  }[variant]
  return (
    <button className={`${base} ${v} ${full ? 'w-full' : ''} ${className}`} {...rest}>
      {children}
    </button>
  )
}

export function Card({ children, className = '' }: { children: ReactNode; className?: string }) {
  return <div className={`rounded-2xl border border-slate-200 bg-white p-4 shadow-sm ${className}`}>{children}</div>
}

export function Chip({ children, selected, onClick, disabled, tone }: { children: ReactNode; selected?: boolean; onClick?: () => void; disabled?: boolean; tone?: 'ok' | 'bad' }) {
  const t = tone === 'ok' ? 'border-ok bg-green-50 text-ok' : tone === 'bad' ? 'border-bad bg-red-50 text-bad' : selected ? 'border-brand bg-blue-50 text-brand' : 'border-slate-200 bg-white text-ink'
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      className={`rounded-xl border-2 px-3.5 py-2 text-base font-medium transition active:scale-95 disabled:opacity-60 ${t}`}
    >
      {children}
    </button>
  )
}

export function Option({ children, state, onClick, disabled }: { children: ReactNode; state?: 'idle' | 'selected' | 'ok' | 'bad'; onClick?: () => void; disabled?: boolean }) {
  const s = {
    idle: 'border-slate-200 bg-white',
    selected: 'border-brand bg-blue-50',
    ok: 'border-ok bg-green-50',
    bad: 'border-bad bg-red-50',
  }[state ?? 'idle']
  return (
    <button type="button" onClick={onClick} disabled={disabled} className={`w-full rounded-2xl border-2 px-4 py-3.5 text-left text-base font-medium transition active:scale-[0.99] ${s}`}>
      {children}
    </button>
  )
}

export function Callout({ tone, title, children }: { tone: 'ok' | 'bad' | 'info'; title?: ReactNode; children?: ReactNode }) {
  const t = { ok: 'border-ok bg-green-50 text-green-900', bad: 'border-bad bg-red-50 text-red-900', info: 'border-brand bg-blue-50 text-blue-900' }[tone]
  return (
    <div className={`pop rounded-2xl border-l-4 px-4 py-3 ${t}`}>
      {title && <div className="font-semibold">{title}</div>}
      {children && <div className="mt-0.5 text-sm leading-relaxed">{children}</div>}
    </div>
  )
}

export function Stat({ label, value, icon }: { label: string; value: ReactNode; icon?: ReactNode }) {
  return (
    <div className="flex flex-col items-center rounded-2xl bg-white px-2 py-3 text-center shadow-sm border border-slate-200">
      <div className="text-xl leading-none">{icon}</div>
      <div className="mt-1 text-lg font-bold">{value}</div>
      <div className="text-[11px] font-medium uppercase tracking-wide text-muted">{label}</div>
    </div>
  )
}
