"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Leaf, Phone, Mail, MapPin } from "lucide-react"
import Link from "next/link"

export function CTA() {
  return (
    <section className="bg-primary py-20 lg:py-24 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-48 h-48 bg-white/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Header Section */}
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-3 mb-6">
              <Leaf className="w-10 h-10 text-white/80" />
            </div>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-6">
              Prêt à digitaliser votre restaurant ?
            </h2>

            <p className="text-primary-foreground/80 text-lg mb-10 max-w-xl mx-auto leading-relaxed">
              Rejoignez des centaines de restaurants qui ont déjà transformé leur expérience client avec Click Menu ZEN
            </p>

            <div className="flex flex-wrap justify-center gap-4 mb-16">
              <Link href="https://youtu.be/uhuZkguK5gg" target="_blank" rel="noopener noreferrer">
                <Button
                  size="lg"
                  variant="secondary"
                  className="bg-white text-primary hover:bg-white/90 gap-2 rounded-full px-8 font-semibold shadow-lg"
                >
                  Rejoindre Click Menu ZEN
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>

              <Link href="https://youtu.be/uhuZkguK5gg" target="_blank" rel="noopener noreferrer">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white/50 text-white hover:bg-white/10 gap-2 rounded-full px-8 bg-transparent"
                >
                  Demander une démo
                </Button>
              </Link>
            </div>
          </div>

          {/* Contact Information Cards */}
          <div className="grid md:grid-cols-3 gap-6">
            {/* Phone */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/15 hover:scale-105 hover:shadow-2xl transition-all duration-300 animate-fade-in-up" style={{ animationDelay: '200ms' }}>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                  <Phone className="w-6 h-6 text-white animate-pulse" />
                </div>
                <div className="flex-1">
                  <h3 className="text-white font-semibold mb-3">Téléphone</h3>
                  <div className="space-y-2">
                    <Link href="tel:+261383560205" className="block text-white/80 hover:text-white text-sm transition-colors">
                      +261 38 35 602 05
                    </Link>
                    <Link href="tel:+261349972278" className="block text-white/80 hover:text-white text-sm transition-colors">
                      +261 34 99 722 78
                    </Link>
                    <Link href="tel:+261348982486" className="block text-white/80 hover:text-white text-sm transition-colors">
                      +261 34 89 824 86
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* Email */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/15 hover:scale-105 hover:shadow-2xl transition-all duration-300 animate-fade-in-up" style={{ animationDelay: '400ms' }}>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                  <Mail className="w-6 h-6 text-white animate-pulse" style={{ animationDelay: '1s' }} />
                </div>
                <div className="flex-1">
                  <h3 className="text-white font-semibold mb-3">Email</h3>
                  <Link
                    href="mailto:clickmenuzen@gmail.com"
                    className="text-white/80 hover:text-white text-sm transition-colors break-all"
                  >
                    clickmenuzen@gmail.com
                  </Link>
                </div>
              </div>
            </div>

            {/* Address */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/15 hover:scale-105 hover:shadow-2xl transition-all duration-300 animate-fade-in-up" style={{ animationDelay: '600ms' }}>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                  <MapPin className="w-6 h-6 text-white animate-pulse" style={{ animationDelay: '2s' }} />
                </div>
                <div className="flex-1">
                  <h3 className="text-white font-semibold mb-3">Adresse</h3>
                  <Link
                    href="https://maps.google.com/?q=-23.347213,43.671659"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white/80 hover:text-white text-sm transition-colors"
                  >
                    Betela Tuléar, Rue de la Voirie, près Immeuble Cotisse
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
