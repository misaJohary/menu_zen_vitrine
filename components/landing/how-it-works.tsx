import { QrCode, MousePointer, Bell } from "lucide-react"

const steps = [
  {
    icon: QrCode,
    title: "Scannez le menu",
    description: "Le client scanne ou accède au menu digital via QR code ou tablette",
    step: "01"
  },
  {
    icon: MousePointer,
    title: "Commandez en quelques clics",
    description: "Il choisit ses plats et valide sa commande facilement",
    step: "02"
  },
  {
    icon: Bell,
    title: "Réception instantanée",
    description: "Le restaurant reçoit la commande instantanément sur son interface",
    step: "03"
  }
]

export function HowItWorks() {
  return (
    <section className="bg-secondary py-20 lg:py-28">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Comment ça <span className="text-primary">marche ?</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Un processus simple en 3 étapes pour digitaliser votre restaurant
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {steps.map((step, index) => (
            <div 
              key={index}
              className="relative bg-card rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow group"
            >
              {/* Step number */}
              <span className="absolute -top-4 -left-4 w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold text-lg shadow-lg">
                {step.step}
              </span>
              
              {/* Icon */}
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                <step.icon className="w-8 h-8 text-primary" />
              </div>
              
              <h3 className="text-xl font-semibold text-foreground mb-3">
                {step.title}
              </h3>
              
              <p className="text-muted-foreground leading-relaxed">
                {step.description}
              </p>
              
              {/* Connector line for desktop */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-1/2 -right-6 lg:-right-8 w-12 lg:w-16 h-0.5 bg-primary/30">
                  <div className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 bg-primary rounded-full" />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
