import { 
  MapPin, 
  Truck, 
  CreditCard, 
  Zap,
  Rocket
} from "lucide-react"

const features = [
  {
    icon: MapPin,
    title: "Suivi en temps réel",
    description: "Suivez votre commande de la cuisine à votre porte"
  },
  {
    icon: Truck,
    title: "Livraison type Uber",
    description: "Réseau de livreurs optimisé pour des livraisons rapides"
  },
  {
    icon: CreditCard,
    title: "Paiement simple",
    description: "Payez facilement via l'application"
  },
  {
    icon: Zap,
    title: "Expérience fluide",
    description: "Interface rapide et intuitive"
  }
]

export function ComingSoon() {
  return (
    <section className="bg-gradient-to-br from-primary/10 via-background to-accent/10 py-20 lg:py-28 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-accent/10 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-primary/20 text-primary px-4 py-2 rounded-full mb-8 animate-bounce">
            <Rocket className="w-4 h-4" />
            <span className="font-semibold text-sm">Coming Soon</span>
          </div>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Bientôt disponible :<br />
            <span className="text-primary">Notre app de livraison intelligente</span>
          </h2>
          
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-12 leading-relaxed">
            Une application de livraison nouvelle génération, inspirée des meilleures plateformes, 
            connectant restaurants, livreurs et clients en temps réel.
          </p>
          
          {/* Features grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="bg-card/80 backdrop-blur-sm rounded-2xl p-6 border border-border hover:border-primary/50 transition-all group"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4 mx-auto group-hover:bg-primary group-hover:scale-110 transition-all">
                  <feature.icon className="w-6 h-6 text-primary group-hover:text-primary-foreground transition-colors" />
                </div>
                
                <h3 className="font-semibold text-foreground mb-2">
                  {feature.title}
                </h3>
                
                <p className="text-muted-foreground text-sm">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
          
          {/* Notification signup hint */}
          <p className="mt-12 text-muted-foreground text-sm">
            Inscrivez-vous ci-dessous pour être notifié du lancement
          </p>
        </div>
      </div>
    </section>
  )
}
