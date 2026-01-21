"use client"

import Image from "next/image"
import { useState } from "react"
import { cn } from "@/lib/utils"
import { LayoutGrid, ShoppingCart, List } from "lucide-react"

const screenshots = [
  {
    id: 1,
    title: "Menu par catégories",
    description: "Navigation intuitive entre plats, desserts et boissons",
    icon: LayoutGrid,
  },
  {
    id: 2,
    title: "Détails de commande",
    description: "Vue complète du panier avec nom du client et numéro de table",
    icon: List,
  },
  {
    id: 3,
    title: "Panier & total",
    description: "Calcul automatique avec possibilité de modifier les quantités",
    icon: ShoppingCart,
  },
]

export function Screenshots() {
  const [activeTab, setActiveTab] = useState(1)
  const [isTransitioning, setIsTransitioning] = useState(false)

  const handleTabChange = (id: number) => {
    if (id !== activeTab) {
      setIsTransitioning(true)
      setTimeout(() => {
        setActiveTab(id)
        setIsTransitioning(false)
      }, 200)
    }
  }

  return (
    <section className="bg-secondary py-20 lg:py-28 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in-up">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Découvrez l'<span className="text-primary">interface</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Une expérience utilisateur pensée pour la simplicité et l'efficacité
          </p>
        </div>

        {/* Feature tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {screenshots.map((item, index) => (
            <button
              key={item.id}
              onClick={() => handleTabChange(item.id)}
              className={cn(
                "flex items-center gap-3 px-6 py-3 rounded-full transition-all duration-300 animate-fade-in-up",
                activeTab === item.id
                  ? "bg-primary text-primary-foreground shadow-lg scale-105"
                  : "bg-card text-foreground hover:bg-primary/10 hover:scale-105"
              )}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <item.icon className={cn(
                "w-5 h-5 transition-transform",
                activeTab === item.id && "animate-bounce-slow"
              )} />
              <span className="font-medium">{item.title}</span>
            </button>
          ))}
        </div>
        
        {/* Screenshot display */}
        <div className="relative max-w-5xl mx-auto">
          <div className={cn(
            "relative bg-card rounded-3xl shadow-2xl overflow-hidden border-8 border-foreground/5 transition-all duration-300 hover:shadow-primary/20 hover:scale-[1.02]",
            isTransitioning ? "opacity-50 scale-95" : "opacity-100 scale-100"
          )}>
            {/* Browser-like header */}
            <div className="flex items-center gap-2 px-4 py-3 bg-muted border-b border-border">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-red-400 animate-pulse" style={{ animationDelay: '0ms' }} />
                <div className="w-3 h-3 rounded-full bg-yellow-400 animate-pulse" style={{ animationDelay: '200ms' }} />
                <div className="w-3 h-3 rounded-full bg-green-400 animate-pulse" style={{ animationDelay: '400ms' }} />
              </div>
              <div className="flex-1 flex justify-center">
                <div className="px-4 py-1 bg-background rounded-full text-xs text-muted-foreground">
                  app.clickmenuzen.com
                </div>
              </div>
            </div>

            {/* Screenshot */}
            <div className={cn(
              "relative aspect-[16/10] transition-all duration-300",
              isTransitioning ? "scale-95 opacity-0" : "scale-100 opacity-100"
            )}>
              <Image
                src="/images/screenshoot-20order.png"
                alt="Click Menu ZEN - Interface de commande"
                fill
                className="object-cover object-top"
              />
            </div>
          </div>

          {/* Description card */}
          <div className={cn(
            "mt-8 text-center transition-all duration-300",
            isTransitioning ? "opacity-0 translate-y-2" : "opacity-100 translate-y-0"
          )}>
            <p className="text-muted-foreground">
              {screenshots.find(s => s.id === activeTab)?.description}
            </p>
          </div>

          {/* Decorative blurs */}
          <div className="absolute -top-12 -left-12 w-48 h-48 bg-primary/20 rounded-full blur-3xl -z-10 animate-float-slow" />
          <div className="absolute -bottom-12 -right-12 w-48 h-48 bg-accent/20 rounded-full blur-3xl -z-10 animate-float-slower" />
        </div>
      </div>
    </section>
  )
}
