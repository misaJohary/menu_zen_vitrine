"use client"

import {
  Utensils,
  TableProperties,
  LayoutGrid,
  Calculator,
  Users
} from "lucide-react"

const features = [
  {
    icon: Utensils,
    title: "Menu digital interactif",
    description: "Présentez vos plats avec des photos appétissantes et des descriptions détaillées",
    gradient: "from-orange-500/10 to-red-500/10",
    iconBg: "bg-gradient-to-br from-orange-500 to-red-500"
  },
  {
    icon: TableProperties,
    title: "Commande par table",
    description: "Associez chaque commande à une table pour une organisation optimale",
    gradient: "from-blue-500/10 to-cyan-500/10",
    iconBg: "bg-gradient-to-br from-blue-500 to-cyan-500"
  },
  {
    icon: LayoutGrid,
    title: "Gestion des plats & catégories",
    description: "Organisez votre menu par catégories : plats, desserts, boissons et plus",
    gradient: "from-purple-500/10 to-violet-500/10",
    iconBg: "bg-gradient-to-br from-purple-500 to-violet-500"
  },
  {
    icon: Calculator,
    title: "Calcul automatique du total",
    description: "Le total est calculé automatiquement avec gestion des quantités",
    gradient: "from-green-500/10 to-emerald-500/10",
    iconBg: "bg-gradient-to-br from-green-500 to-emerald-500"
  },
  {
    icon: Users,
    title: "Interface simple pour le personnel",
    description: "Une interface intuitive que votre équipe maîtrisera en quelques minutes",
    gradient: "from-amber-500/10 to-yellow-500/10",
    iconBg: "bg-gradient-to-br from-amber-500 to-yellow-500"
  }
]

export function Features() {
  return (
    <section className="relative bg-background py-20 lg:py-28 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Fonctionnalités <span className="text-primary">puissantes</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Tout ce dont vous avez besoin pour gérer efficacement votre restaurant
          </p>
        </div>

        {/* Infinite Sliding Carousel */}
        <div className="relative">
          {/* Gradient overlays for fade effect */}
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent z-10" />

          <div className="overflow-hidden">
            <div className="flex gap-6 animate-slide">
              {/* Duplicate the features array twice for seamless infinite loop */}
              {[...features, ...features].map((feature, index) => (
                <div
                  key={index}
                  className={`group relative flex-shrink-0 w-[350px] overflow-hidden rounded-2xl p-8
                    border border-border bg-gradient-to-br ${feature.gradient} bg-card
                    hover:border-primary/50 hover:shadow-xl hover:shadow-primary/10
                    transition-all duration-300`}
                >
                  {/* Icon */}
                  <div className={`w-14 h-14 ${feature.iconBg} rounded-xl flex items-center justify-center mb-5
                    group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                    <feature.icon className="w-7 h-7 text-white" />
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                    {feature.title}
                  </h3>

                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes slide {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-50%);
          }
        }

        .animate-slide {
          animation: slide 30s linear infinite;
        }

        .animate-slide:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  )
}
