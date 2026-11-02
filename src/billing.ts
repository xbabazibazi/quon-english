// Kapalı ücretli altyapı. BILLING_ENABLED false iken hiçbir ücretli özellik devreye girmez.
export const BILLING_ENABLED = false
// Gerçek reklam kodu bağlanınca açılır; kapalıyken ders sonundaki reklam alanı hiç görünmez.
export const ADS_ENABLED = false

export type Plan = 'free' | 'plus'
export type PaidFeature = 'no_ads'
export type BillingSource = 'none' | 'play' | 'apple' | 'web'

export interface Entitlement {
  plan: Plan
  source: BillingSource
  /** ISO tarih. null = süresiz. */
  expiresAt: string | null
}

export interface Product {
  id: string
  title_tr: string
  price: string
  period: 'month' | 'year'
}

/** Play, Apple veya web ödemesi bu arayüzle bağlanır. */
export interface BillingProvider {
  listProducts(): Promise<Product[]>
  purchase(productId: string): Promise<Entitlement>
  restore(): Promise<Entitlement>
}

export const FREE_ENTITLEMENT: Entitlement = { plan: 'free', source: 'none', expiresAt: null }

const PLAN_FEATURES: Record<Plan, PaidFeature[]> = {
  free: [],
  plus: ['no_ads'],
}

export function hasFeature(e: Entitlement, feature: PaidFeature, now = new Date()): boolean {
  if (!BILLING_ENABLED) return false
  if (e.expiresAt && new Date(e.expiresAt) <= now) return false
  return PLAN_FEATURES[e.plan].includes(feature)
}
