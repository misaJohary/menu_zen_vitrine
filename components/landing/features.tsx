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
    description: "Présentez vos plats avec des photos appétissantes et des descriptions détaillées"
  },
  {
    icon: TableProperties,
    title: "Commande par table",
    description: "Associez chaque commande à une table pour une organisation optimale"
  },
  {
    icon: LayoutGrid,
    title: "Gestion des plats & catégories",
    description: "Organisez votre menu par catégories : plats, desserts, boissons et plus"
  },
  {
    icon: Calculator,
    title: "Calcul automatique du total",
    description: "Le total est calculé automatiquement avec gestion des quantités"
  },
  {
    icon: Users,
    title: "Interface simple pour le personnel",
    description: "Une interface intuitive que votre équipe maîtrisera en quelques minutes"
  }
]

export function Features() {
  return (
    <section className="bg-background py-20 lg:py-28">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Fonctionnalités <span className="text-primary">puissantes</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Tout ce dont vous avez besoin pour gérer efficacement votre restaurant
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="group bg-card border border-border rounded-2xl p-6 hover:border-primary/50 hover:shadow-lg transition-all"
            >
              <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-5 group-hover:bg-primary group-hover:scale-110 transition-all">
                <feature.icon className="w-7 h-7 text-primary group-hover:text-primary-foreground transition-colors" />
              </div>
              
              <h3 className="text-lg font-semibold text-foreground mb-2">
                {feature.title}
              </h3>
              
              <p className="text-muted-foreground text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
