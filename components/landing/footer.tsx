import { Leaf, Facebook, Twitter, Instagram, Linkedin, Phone, Mail, MapPin } from "lucide-react"
import Link from "next/link"

const navigation = {
  produit: [
    { name: "Fonctionnalités", href: "#features" },
    { name: "Comment ça marche", href: "#how-it-works" },
    { name: "Captures d'écran", href: "#screenshots" },
  ],
  contact: [
    { name: "Téléphone 1", href: "tel:+261383560205", icon: Phone, text: "+261 38 35 602 05" },
    { name: "Téléphone 2", href: "tel:+261349972278", icon: Phone, text: "+261 34 99 722 78" },
    { name: "Téléphone 3", href: "tel:+261348982486", icon: Phone, text: "+261 34 89 824 86" },
    { name: "Email", href: "mailto:clickmenuzen@gmail.com", icon: Mail, text: "clickmenuzen@gmail.com" },
    { name: "Adresse", href: "https://maps.google.com/?q=-23.347213,43.671659", icon: MapPin, text: "Betela Tuléar" },
  ],
  support: [
    { name: "Centre d'aide", href: "#help" },
    { name: "Contact", href: "#contact" },
    { name: "FAQ", href: "#faq" },
  ],
  legal: [
    { name: "Confidentialité", href: "#privacy" },
    { name: "CGU", href: "#terms" },
    { name: "Cookies", href: "#cookies" },
  ],
}

const socialLinks = [
  { name: "Facebook", icon: Facebook, href: "#" },
  { name: "Twitter", icon: Twitter, href: "#" },
  { name: "Instagram", icon: Instagram, href: "#" },
  { name: "LinkedIn", icon: Linkedin, href: "#" },
]

export function Footer() {
  return (
    <footer className="bg-foreground text-background relative overflow-hidden">
      {/* Subtle animated background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-30">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-float-slow" />
      </div>

      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 lg:gap-12">
          {/* Brand column */}
          <div className="col-span-2 animate-fade-in-up">
            <div className="flex items-center gap-2 mb-4">
              <span className="text-2xl font-bold">Click Menu</span>
              <span className="text-xl font-bold text-primary">ZEN</span>
              <Leaf className="w-5 h-5 text-primary" />
            </div>
            
            <p className="text-background/70 text-sm mb-6 max-w-xs leading-relaxed">
              La solution digitale pour moderniser l'expérience de commande dans votre restaurant ou hôtel.
            </p>
            
            {/* Social links */}
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <Link
                  key={social.name}
                  href={social.href}
                  className="w-10 h-10 bg-background/10 rounded-full flex items-center justify-center hover:bg-primary hover:scale-110 hover:rotate-6 transition-all duration-300"
                  aria-label={social.name}
                >
                  <social.icon className="w-5 h-5" />
                </Link>
              ))}
            </div>
          </div>
          
          {/* Navigation columns */}
          <div>
            <h3 className="font-semibold mb-4">Produit</h3>
            <ul className="space-y-3">
              {navigation.produit.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-background/70 hover:text-primary hover:translate-x-1 text-sm transition-all duration-200 inline-block"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Contact</h3>
            <ul className="space-y-3">
              {navigation.contact.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    target={item.name === "Adresse" ? "_blank" : undefined}
                    rel={item.name === "Adresse" ? "noopener noreferrer" : undefined}
                    className="text-background/70 hover:text-primary text-sm transition-colors flex items-center gap-2"
                  >
                    <item.icon className="w-4 h-4" />
                    <span>{item.text}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Support</h3>
            <ul className="space-y-3">
              {navigation.support.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-background/70 hover:text-primary hover:translate-x-1 text-sm transition-all duration-200 inline-block"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Légal</h3>
            <ul className="space-y-3">
              {navigation.legal.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-background/70 hover:text-primary hover:translate-x-1 text-sm transition-all duration-200 inline-block"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        {/* Bottom bar */}
        <div className="border-t border-background/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-background/50 text-sm">
            © {new Date().getFullYear()} Click Menu ZEN. Tous droits réservés.
          </p>
          
          <p className="text-background/50 text-sm">
            Fait avec ❤️ pour les restaurateurs
          </p>
        </div>
      </div>
    </footer>
  )
}
