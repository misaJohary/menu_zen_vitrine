"use client"

import { Button } from "@/components/ui/button"
import { Leaf, Play, Monitor, Sparkles } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-background">
      {/* Decorative wave top */}
      <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-primary/5 to-transparent" />

      {/* Floating background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl animate-float-slow" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-float-slower" />
      </div>

      <div className="container mx-auto px-4 py-16 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center justify-items-center">
          {/* Left content */}
          <div className="relative z-10 animate-fade-in-up w-full">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-semibold mb-6 border border-primary/20">
              <Sparkles className="w-3.5 h-3.5" />
              <span>La solution de menu digital #1 à Madagascar</span>
            </div>

            <div className="flex items-center gap-3 mb-6">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight animate-fade-in">
                <span className="text-primary">Click Menu</span>
                <br />
                <span className="text-foreground">ZEN</span>
              </h1>
              <Leaf className="w-12 h-12 text-primary animate-bounce-slow" />
            </div>
            
            <p className="text-xl md:text-2xl text-muted-foreground mb-4 flex items-center gap-2 animate-fade-in-up" style={{ animationDelay: '200ms' }}>
              Commandez vos repas en un clic
              <span className="text-2xl animate-bounce-slow">🍴</span>
            </p>

            <p className="text-muted-foreground mb-8 max-w-md leading-relaxed animate-fade-in-up" style={{ animationDelay: '300ms' }}>
              Menus digitaux interactifs, commandes en temps réel et gestion simplifiée pour restaurants, hôtels et salons de thé.
            </p>
            
            <div className="flex flex-wrap gap-4 animate-fade-in-up" style={{ animationDelay: '400ms' }}>
              <Link href="#screenshots">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground gap-2 rounded-full px-8 hover:scale-105 hover:shadow-xl transition-all duration-300 group">
                  <Monitor className="w-4 h-4 group-hover:scale-110 transition-transform" />
                  Explorer le Produit
                </Button>
              </Link>
              <Link href="https://youtu.be/uhuZkguK5gg" target="_blank" rel="noopener noreferrer">
                <Button size="lg" variant="outline" className="gap-2 rounded-full px-6 border-primary/40 text-foreground hover:bg-primary/10 bg-card hover:scale-105 hover:shadow-lg transition-all duration-300 group">
                  <Play className="w-4 h-4 text-primary group-hover:scale-110 transition-transform" />
                  Voir la démo
                </Button>
              </Link>
            </div>
          </div>
          
          {/* Right content - Clean dual tablet presentation (make_order & dashboard) */}
          <div className="relative flex items-center justify-center animate-fade-in-right w-full pt-8 pb-4">
            {/* Background Tablet: Dashboard */}
            <div className="absolute -top-4 right-0 sm:right-2 md:right-4 z-10 w-[280px] h-[180px] sm:w-[380px] sm:h-[240px] md:w-[460px] md:h-[290px] rounded-3xl overflow-hidden shadow-xl border-6 border-foreground/10 bg-card opacity-95 hover:opacity-100 hover:scale-105 transition-all duration-500 animate-float-delayed">
              <Image
                src="/images/dashboard.png"
                alt="Click Menu ZEN - Tableau de Bord"
                fill
                className="object-cover object-top"
                priority
              />
            </div>

            {/* Foreground Tablet: Make Order */}
            <div className="relative z-20 top-6 left-0 sm:-left-4 md:-left-6 w-[300px] h-[195px] sm:w-[410px] sm:h-[260px] md:w-[490px] md:h-[310px] rounded-3xl overflow-hidden shadow-2xl border-8 border-foreground/10 bg-card hover:scale-105 transition-transform duration-500 animate-float">
              <Image
                src="/images/make_order.png"
                alt="Click Menu ZEN - Prise de Commande"
                fill
                className="object-cover object-top"
                priority
              />
            </div>

            {/* Decorative glows */}
            <div className="absolute -top-8 -left-8 w-24 h-24 bg-primary/20 rounded-full blur-2xl animate-pulse" />
            <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-accent/30 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '1s' }} />
          </div>
        </div>
      </div>
      
      {/* Bottom wave decoration */}
      <svg className="absolute bottom-0 left-0 right-0 text-secondary" viewBox="0 0 1440 120" fill="currentColor" preserveAspectRatio="none">
        <path d="M0,64 C288,120 576,0 864,64 C1152,128 1296,32 1440,64 L1440,120 L0,120 Z" />
      </svg>
    </section>
  )
}
