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
  
  return (
    <section className="bg-secondary py-20 lg:py-28 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Découvrez l'<span className="text-primary">interface</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Une expérience utilisateur pensée pour la simplicité et l'efficacité
          </p>
        </div>
        
        {/* Feature tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {screenshots.map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={cn(
                "flex items-center gap-3 px-6 py-3 rounded-full transition-all",
                activeTab === item.id 
                  ? "bg-primary text-primary-foreground shadow-lg" 
                  : "bg-card text-foreground hover:bg-primary/10"
              )}
            >
              <item.icon className="w-5 h-5" />
              <span className="font-medium">{item.title}</span>
            </button>
          ))}
        </div>
        
        {/* Screenshot display */}
        <div className="relative max-w-5xl mx-auto">
          <div className="relative bg-card rounded-3xl shadow-2xl overflow-hidden border-8 border-foreground/5">
            {/* Browser-like header */}
            <div className="flex items-center gap-2 px-4 py-3 bg-muted border-b border-border">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-red-400" />
                <div className="w-3 h-3 rounded-full bg-yellow-400" />
                <div className="w-3 h-3 rounded-full bg-green-400" />
              </div>
              <div className="flex-1 flex justify-center">
                <div className="px-4 py-1 bg-background rounded-full text-xs text-muted-foreground">
                  app.clickmenuzen.com
                </div>
              </div>
            </div>
            
            {/* Screenshot */}
            <div className="relative aspect-[16/10]">
              <Image
                src="/images/screenshoot-20order.png"
                alt="Click Menu ZEN - Interface de commande"
                fill
                className="object-cover object-top"
              />
            </div>
          </div>
          
          {/* Description card */}
          <div className="mt-8 text-center">
            <p className="text-muted-foreground">
              {screenshots.find(s => s.id === activeTab)?.description}
            </p>
          </div>
          
          {/* Decorative blurs */}
          <div className="absolute -top-12 -left-12 w-48 h-48 bg-primary/20 rounded-full blur-3xl -z-10" />
          <div className="absolute -bottom-12 -right-12 w-48 h-48 bg-accent/20 rounded-full blur-3xl -z-10" />
        </div>
      </div>
    </section>
  )
}
