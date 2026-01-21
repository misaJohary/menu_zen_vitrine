"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Leaf } from "lucide-react"

export function CTA() {
  return (
    <section className="bg-primary py-20 lg:py-24 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-48 h-48 bg-white/10 rounded-full blur-3xl" />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <div className="flex items-center justify-center gap-3 mb-6">
            <Leaf className="w-10 h-10 text-white/80" />
          </div>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-6">
            Prêt à digitaliser votre restaurant ?
          </h2>
          
          <p className="text-primary-foreground/80 text-lg mb-10 max-w-xl mx-auto leading-relaxed">
            Rejoignez des centaines de restaurants qui ont déjà transformé leur expérience client avec Click Menu ZEN
          </p>
          
          <div className="flex flex-wrap justify-center gap-4">
            <Button 
              size="lg" 
              variant="secondary"
              className="bg-white text-primary hover:bg-white/90 gap-2 rounded-full px-8 font-semibold shadow-lg"
            >
              Rejoindre Click Menu ZEN
              <ArrowRight className="w-4 h-4" />
            </Button>
            
            <Button 
              size="lg" 
              variant="outline"
              className="border-white/50 text-white hover:bg-white/10 gap-2 rounded-full px-8 bg-transparent"
            >
              Demander une démo
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
