import { HeroSection } from '@/components/home/hero-section'
import { TrustBar } from '@/components/home/trust-bar'
import { FeaturedCategories } from '@/components/home/featured-categories'
import { BestSellers } from '@/components/home/best-sellers'
import { LabSection } from '@/components/home/lab-section'
import { ComplianceNote } from '@/components/layout/compliance-note'

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <TrustBar />
      <FeaturedCategories />
      <BestSellers />
      <LabSection />
      <div className="mx-auto max-w-7xl px-4 pb-16 sm:px-6">
        <ComplianceNote />
      </div>
    </>
  )
}
