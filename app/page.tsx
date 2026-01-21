import { Header } from "@/components/landing/header"
import { Hero } from "@/components/landing/hero"
import { HowItWorks } from "@/components/landing/how-it-works"
import { Features } from "@/components/landing/features"
import { Screenshots } from "@/components/landing/screenshots"
import { ComingSoon } from "@/components/landing/coming-soon"
import { CTA } from "@/components/landing/cta"
import { Footer } from "@/components/landing/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <section id="how-it-works">
        <HowItWorks />
      </section>
      <section id="features">
        <Features />
      </section>
      <section id="screenshots">
        <Screenshots />
      </section>
      <ComingSoon />
      <section id="contact">
        <CTA />
      </section>
      <Footer />
    </main>
  )
}
