"use client"

import Image from "next/image"
import { useState, useEffect, useCallback } from "react"
import { cn } from "@/lib/utils"
import {
  Play,
  Pause,
  ChevronLeft,
  ChevronRight,
  Info,
  Sparkles,
  CheckCircle2,
  Wifi,
  Battery,
} from "lucide-react"

export interface Hotspot {
  id: number
  x: number // percentage
  y: number // percentage
  title: string
  description: string
}

export interface ScreenData {
  id: string
  title: string
  subtitle: string
  badge: string
  image: string
  isPopup?: boolean
  bgBackdrop?: string
  description: string
  highlights: string[]
  hotspots: Hotspot[]
}

const screens: ScreenData[] = [
  {
    id: "order",
    title: "Prise de Commande Client & Serveur",
    subtitle: "Une carte digitale interactive avec photos et panier en temps réel",
    badge: "Interface Tactile",
    image: "/images/make_order.png",
    description:
      "Offrez à vos clients ou serveurs un menu visuel fluide, organisé par catégories avec ajout au panier instantané et calcul automatique.",
    highlights: [
      "Catalogue avec photos appétissantes et tarifs clairs",
      "Filtres rapides par catégories (Plats, Desserts, Boissons)",
      "Gestion dynamique du panier et choix de table",
      "Commande transmise sans erreur en cuisine",
    ],
    hotspots: [
      {
        id: 1,
        x: 20,
        y: 18,
        title: "Navigation par catégories",
        description: "Basculez facilement entre les sections de votre carte.",
      },
      {
        id: 2,
        x: 35,
        y: 45,
        title: "Cartes plats illustrées",
        description: "Présentation élégante des plats avec prix bien visibles.",
      },
      {
        id: 3,
        x: 82,
        y: 35,
        title: "Panier & Récapitulatif",
        description: "Affichage en direct du nombre d'articles et du total.",
      },
      {
        id: 4,
        x: 82,
        y: 82,
        title: "Validation immédiate",
        description: "Transmettez la commande directement en cuisine.",
      },
    ],
  },
  {
    id: "dashboard",
    title: "Tableau de Bord & Analytics",
    subtitle: "Pilotez la rentabilité et l'activité de votre établissement en un coup d'œil",
    badge: "Module Directeur",
    image: "/images/dashboard.png",
    description:
      "Consultez en direct votre chiffre d'affaires, le nombre de commandes traitées, ainsi que vos plats les plus populaires.",
    highlights: [
      "Indicateurs clés de performance (CA du jour, panier moyen)",
      "Courbes et graphiques d'évolution des ventes",
      "Classement des plats les plus vendus",
      "Reporting automatique et statistiques fiables",
    ],
    hotspots: [
      {
        id: 1,
        x: 25,
        y: 22,
        title: "Chiffre d'Affaires Global",
        description: "Suivi en direct des revenus cumulés.",
      },
      {
        id: 2,
        x: 52,
        y: 22,
        title: "Volume des Commandes",
        description: "Nombre total de commandes validées.",
      },
      {
        id: 3,
        x: 38,
        y: 60,
        title: "Graphique des Ventes",
        description: "Visualisation synthétique de l'activité.",
      },
      {
        id: 4,
        x: 80,
        y: 55,
        title: "Top 5 Plats Stars",
        description: "Identification instantanée des meilleures ventes.",
      },
    ],
  },
  {
    id: "kitchen",
    title: "Gestion des Commandes en Cuisine",
    subtitle: "Organisation optimale entre la salle et la cuisine avec statuts en temps réel",
    badge: "Écran Cuisine / Salle",
    image: "/images/gestion_commande.png",
    description:
      "Visualisez l'ensemble des commandes entrantes sous forme de cartes d'état. Passez de 'En cours' à 'Prête' en un clic.",
    highlights: [
      "Cartes de commande claires avec numéro de table",
      "Code couleur par statut (En cours, Prête, Livrée)",
      "Minuteur d'attente pour respecter les délais",
      "Filtrage rapide selon l'état de préparation",
    ],
    hotspots: [
      {
        id: 1,
        x: 22,
        y: 24,
        title: "Liste chronologique",
        description: "Les commandes apparaissent par ordre d'arrivée.",
      },
      {
        id: 2,
        x: 48,
        y: 35,
        title: "Détails de la table",
        description: "Visualisation immédiate de la table et des demandes.",
      },
      {
        id: 3,
        x: 75,
        y: 36,
        title: "Mise à jour du statut",
        description: "Un clic suffit pour indiquer que l'assiette est prête.",
      },
      {
        id: 4,
        x: 88,
        y: 20,
        title: "Filtres d'affichage",
        description: "Affichez uniquement les commandes en cours.",
      },
    ],
  },
  {
    id: "detail",
    title: "Fiche Détail & Validation de Commande",
    subtitle: "Inspectez la composition exacte d'une commande dans une modale dédiée",
    badge: "Fenêtre Pop-up",
    image: "/images/detail_commande.png",
    isPopup: true,
    bgBackdrop: "/images/gestion_commande.png",
    description:
      "Une fenêtre pop-up s'ouvre par-dessus la gestion de commande pour afficher les détails précis du panier client, les montants et les options de validation.",
    highlights: [
      "Ouverture en pop-up au-dessus de l'application",
      "Affichage clair des articles et quantités commandées",
      "Coordonnées client et attribution de la table",
      "Calcul du montant total net à régler",
    ],
    hotspots: [
      {
        id: 1,
        x: 50,
        y: 35,
        title: "Fiche Pop-up de détail",
        description: "Fenêtre modale qui surgit au-dessus de l'écran principal.",
      },
      {
        id: 2,
        x: 50,
        y: 55,
        title: "Composition de la commande",
        description: "Détail complet des plats et quantités.",
      },
      {
        id: 3,
        x: 70,
        y: 78,
        title: "Bouton de validation",
        description: "Action immédiate sur le statut de la commande.",
      },
    ],
  },
  {
    id: "multilingual",
    title: "Menu Multilingue Instantané",
    subtitle: "Pop-up de sélection de langue pour clients locaux et internationaux",
    badge: "Fenêtre Pop-up",
    image: "/images/multilingue.png",
    isPopup: true,
    bgBackdrop: "/images/make_order.png",
    description:
      "Sélecteur de langue sous forme de menu pop-up (Français, Malagasy, Anglais) avec traduction instantanée de l'application.",
    highlights: [
      "Menu pop-up rapide de changement de langue",
      "Prise en charge du Français, Malagasy et Anglais",
      "Mise à jour immédiate des catégories du menu",
      "Élimination des erreurs de compréhension",
    ],
    hotspots: [
      {
        id: 1,
        x: 50,
        y: 35,
        title: "Pop-up Sélecteur de Langue",
        description: "Basculez entre le Français, Malagasy et l'Anglais.",
      },
      {
        id: 2,
        x: 50,
        y: 60,
        title: "Application multilingue",
        description: "Traduction dynamique en un tap sur la tablette.",
      },
    ],
  },
  {
    id: "login",
    title: "Espace Authentification & Sécurité",
    subtitle: "Accès protégé pour les administrateurs et le personnel du restaurant",
    badge: "Sécurité & Rôles",
    image: "/images/login.png",
    description:
      "Une porte d'entrée sobre et sécurisée garantissant l'accès protégé à votre établissement.",
    highlights: [
      "Connexion sécurisée par identifiant et mot de passe",
      "Design moderne assorti à votre image",
      "Gestion fine des rôles (Gérant, Serveur, Cuisinier)",
      "Connexion rapide sur tablette",
    ],
    hotspots: [
      {
        id: 1,
        x: 50,
        y: 30,
        title: "Identity Click Menu ZEN",
        description: "Branding professionnel et épuré.",
      },
      {
        id: 2,
        x: 50,
        y: 55,
        title: "Formulaire d'accès",
        description: "Champs sécurisés pour la saisie des identifiants.",
      },
    ],
  },
]

export function Screenshots() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [isPlaying, setIsPlaying] = useState(false)
  const [showHotspots, setShowHotspots] = useState(true)
  const [activeHotspot, setActiveHotspot] = useState<Hotspot | null>(null)
  const [isTransitioning, setIsTransitioning] = useState(false)

  const currentScreen = screens[activeIndex]

  const handleSelectScreen = useCallback(
    (index: number) => {
      if (index !== activeIndex) {
        setIsTransitioning(true)
        setActiveHotspot(null)
        setTimeout(() => {
          setActiveIndex(index)
          setIsTransitioning(false)
        }, 150)
      }
    },
    [activeIndex]
  )

  const handleNext = useCallback(() => {
    const nextIdx = (activeIndex + 1) % screens.length
    handleSelectScreen(nextIdx)
  }, [activeIndex, handleSelectScreen])

  const handlePrev = useCallback(() => {
    const prevIdx = (activeIndex - 1 + screens.length) % screens.length
    handleSelectScreen(prevIdx)
  }, [activeIndex, handleSelectScreen])

  // Slideshow auto-play effect
  useEffect(() => {
    let interval: NodeJS.Timeout
    if (isPlaying) {
      interval = setInterval(() => {
        handleNext()
      }, 5000)
    }
    return () => clearInterval(interval)
  }, [isPlaying, handleNext])

  return (
    <section className="relative bg-gradient-to-b from-secondary/50 via-background to-secondary/30 py-16 lg:py-24 overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[140px] pointer-events-none -z-10" />

      <div className="container mx-auto px-4 max-w-6xl">
        {/* Section Header */}
        <div className="text-center mb-8 animate-fade-in-up">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-3 border border-primary/20">
            <Sparkles className="w-4 h-4" />
            <span>Présentation du Produit</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold text-foreground tracking-tight">
            Découvrez l'<span className="text-primary bg-clip-text">interface Click Menu ZEN</span> en action
          </h2>
        </div>

        {/* Navigation & Controls Toolbar */}
        <div className="bg-card/90 backdrop-blur-md rounded-2xl p-3 border border-border mb-8 shadow-md flex flex-wrap items-center justify-between gap-4 max-w-4xl mx-auto">
          {/* Play/Pause & Arrow Navigation */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => setIsPlaying(!isPlaying)}
              className={cn(
                "flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold transition-all border",
                isPlaying
                  ? "bg-primary text-primary-foreground border-primary"
                  : "bg-muted text-foreground border-border hover:bg-muted/80"
              )}
            >
              {isPlaying ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
              <span>{isPlaying ? "Pause Démo" : "Lecture Auto"}</span>
            </button>

            <div className="flex items-center gap-1">
              <button
                onClick={handlePrev}
                className="p-1.5 rounded-full text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
                title="Précédent"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <span className="text-xs font-semibold text-muted-foreground px-2">
                {activeIndex + 1} / {screens.length}
              </span>
              <button
                onClick={handleNext}
                className="p-1.5 rounded-full text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
                title="Suivant"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Current Screen Title */}
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-primary animate-pulse" />
            <span className="text-sm font-semibold text-foreground">{currentScreen.title}</span>
          </div>

          {/* Hotspots Toggle Button */}
          <button
            onClick={() => setShowHotspots(!showHotspots)}
            className={cn(
              "flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium transition-all border",
              showHotspots
                ? "bg-primary/10 text-primary border-primary/30"
                : "bg-muted text-muted-foreground border-border hover:text-foreground"
            )}
          >
            <Info className="w-3.5 h-3.5" />
            <span>Points clés ({currentScreen.hotspots.length})</span>
          </button>
        </div>

        {/* Tablet Hardware Frame Viewport */}
        <div className="relative max-w-4xl mx-auto mb-10">
          {/* Physical Tablet Outer Chassis */}
          <div className="relative rounded-[2.5rem] p-3.5 sm:p-5 bg-gradient-to-b from-neutral-800 via-neutral-900 to-neutral-950 shadow-2xl border-4 border-neutral-700/70 ring-1 ring-white/10">
            {/* Top Bezel Camera & Native Tablet Status Bar */}
            <div className="flex items-center justify-between px-4 pb-2 text-[11px] text-neutral-400 select-none">
              <span className="font-semibold text-neutral-300">09:41</span>
              
              {/* Camera Notch Pinhole */}
              <div className="w-3 h-3 rounded-full bg-neutral-950 border border-neutral-800 shadow-inner flex items-center justify-center">
                <div className="w-1 h-1 rounded-full bg-blue-900/60" />
              </div>

              <div className="flex items-center gap-2">
                <Wifi className="w-3.5 h-3.5 text-neutral-300" />
                <Battery className="w-4 h-4 text-neutral-300" />
              </div>
            </div>

            {/* Native App Screen Display Container */}
            <div className={cn(
              "relative aspect-[16/10] rounded-[1.5rem] overflow-hidden bg-muted transition-all duration-300 shadow-inner border border-neutral-800",
              isTransitioning ? "opacity-30 scale-[0.99]" : "opacity-100 scale-100"
            )}>
              {/* Popup Modal View vs Full Screen View */}
              {currentScreen.isPopup ? (
                <div className="relative w-full h-full flex items-center justify-center">
                  {/* Underlay app background */}
                  {currentScreen.bgBackdrop && (
                    <Image
                      src={currentScreen.bgBackdrop}
                      alt="Base screen"
                      fill
                      priority
                      className="object-cover object-top blur-[3px] brightness-[0.55]"
                    />
                  )}

                  {/* Darkened overlay for modal effect */}
                  <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px]" />

                  {/* Pop-up Window Card */}
                  <div className="relative z-10 w-[90%] max-w-xl aspect-[16/10] rounded-2xl overflow-hidden shadow-2xl border-2 border-white/20 ring-1 ring-black/50">
                    <Image
                      src={currentScreen.image}
                      alt={currentScreen.title}
                      fill
                      priority
                      className="object-contain"
                    />
                  </div>
                </div>
              ) : (
                <Image
                  src={currentScreen.image}
                  alt={currentScreen.title}
                  fill
                  priority
                  className="object-cover object-top"
                />
              )}

              {/* Hotspots Overlay */}
              {showHotspots &&
                currentScreen.hotspots.map((hotspot) => {
                  const isActive = activeHotspot?.id === hotspot.id
                  return (
                    <div
                      key={hotspot.id}
                      className="absolute z-20"
                      style={{ top: `${hotspot.y}%`, left: `${hotspot.x}%` }}
                      onClick={(e) => {
                        e.stopPropagation()
                        setActiveHotspot(isActive ? null : hotspot)
                      }}
                      onMouseEnter={() => setActiveHotspot(hotspot)}
                    >
                      <div className="relative cursor-pointer">
                        <span className="absolute -inset-2 rounded-full bg-primary/40 animate-ping" />
                        <div
                          className={cn(
                            "relative w-7 h-7 rounded-full flex items-center justify-center text-xs font-extrabold text-white shadow-lg transition-transform duration-300",
                            isActive
                              ? "bg-primary scale-125 ring-4 ring-primary/40"
                              : "bg-primary/90 hover:scale-110 hover:bg-primary"
                          )}
                        >
                          {hotspot.id}
                        </div>

                        {/* Hotspot Tooltip */}
                        {isActive && (
                          <div className="absolute left-1/2 bottom-full mb-3 -translate-x-1/2 w-60 p-3 bg-card/95 backdrop-blur-xl border border-primary/40 rounded-xl shadow-2xl z-30 animate-fade-in-up text-left pointer-events-auto">
                            <div className="text-xs font-bold text-primary mb-1 flex items-center gap-1">
                              <Sparkles className="w-3 h-3" />
                              <span>{hotspot.title}</span>
                            </div>
                            <p className="text-xs text-foreground/90 leading-snug">{hotspot.description}</p>
                            <div className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-card" />
                          </div>
                        )}
                      </div>
                    </div>
                  )
                })}
            </div>
          </div>
        </div>

        {/* Feature Highlights Grid */}
        <div className="max-w-4xl mx-auto bg-card border border-border rounded-3xl p-6 lg:p-8 shadow-xl">
          <div className="grid md:grid-cols-2 gap-6 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold mb-3">
                {currentScreen.badge}
              </div>
              <h3 className="text-xl font-bold text-foreground mb-2">{currentScreen.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{currentScreen.description}</p>
            </div>

            <div className="bg-muted/40 rounded-2xl p-5 border border-border/60">
              <h4 className="text-xs font-bold text-foreground mb-3 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-primary" />
                <span>Points forts du module</span>
              </h4>
              <ul className="space-y-2">
                {currentScreen.highlights.map((point, i) => (
                  <li key={i} className="flex items-start gap-2 text-xs text-foreground/90">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary mt-1 flex-shrink-0" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
