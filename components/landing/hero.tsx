"use client"

import { Button } from "@/components/ui/button"
import { Leaf, Play, Mail } from "lucide-react"
import Image from "next/image"

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-background">
      {/* Decorative wave top */}
      <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-primary/5 to-transparent" />
      
      <div className="container mx-auto px-4 py-16 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div className="relative z-10">
            <div className="flex items-center gap-3 mb-6">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
                <span className="text-primary">Click Menu</span>
                <br />
                <span className="text-foreground">ZEN</span>
              </h1>
              <Leaf className="w-12 h-12 text-primary animate-pulse" />
            </div>
            
            <p className="text-xl md:text-2xl text-muted-foreground mb-4 flex items-center gap-2">
              Commandez vos repas en un clic
              <span className="text-2xl">🍴</span>
            </p>
            
            <p className="text-muted-foreground mb-8 max-w-md leading-relaxed">
              Menus digitaux, commandes rapides et gestion simplifiée pour restaurants et hôtels.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground gap-2 rounded-full px-8">
                <Play className="w-4 h-4" />
                Voir la démo
              </Button>
              <Button size="lg" variant="outline" className="gap-2 rounded-full px-8 border-primary text-primary hover:bg-primary/10 bg-transparent">
                <Mail className="w-4 h-4" />
                Contacter l'équipe
              </Button>
            </div>
          </div>
          
          {/* Right content - Device mockups */}
          <div className="relative flex justify-center lg:justify-end">
            {/* Tablet mockup */}
            <div className="relative w-[400px] h-[300px] md:w-[500px] md:h-[375px] rounded-2xl overflow-hidden shadow-2xl border-8 border-foreground/10 bg-card">
              <Image
                src="/images/screenshoot-20order.png"
                alt="Click Menu ZEN - Interface de commande sur tablette"
                fill
                className="object-cover object-left-top"
                priority
              />
            </div>
            
            {/* Mobile mockup */}
            <div className="absolute -right-4 -bottom-4 md:right-4 md:bottom-0 w-[140px] h-[280px] md:w-[160px] md:h-[320px] rounded-3xl overflow-hidden shadow-2xl border-4 border-foreground/10 bg-card">
              <div className="absolute top-2 left-1/2 -translate-x-1/2 w-16 h-1 bg-foreground/20 rounded-full z-10" />
              <Image
                src="/images/screenshoot-20order.png"
                alt="Click Menu ZEN - Interface mobile"
                fill
                className="object-cover object-left-top scale-150"
              />
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -top-8 -left-8 w-24 h-24 bg-primary/20 rounded-full blur-2xl" />
            <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-accent/30 rounded-full blur-2xl" />
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
