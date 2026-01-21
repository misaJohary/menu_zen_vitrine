import { Leaf, Facebook, Twitter, Instagram, Linkedin } from "lucide-react"
import Link from "next/link"

const navigation = {
  produit: [
    { name: "Fonctionnalités", href: "#features" },
    { name: "Tarifs", href: "#pricing" },
    { name: "Démo", href: "#demo" },
    { name: "API", href: "#api" },
  ],
  entreprise: [
    { name: "À propos", href: "#about" },
    { name: "Blog", href: "#blog" },
    { name: "Carrières", href: "#careers" },
    { name: "Partenaires", href: "#partners" },
  ],
  support: [
    { name: "Centre d'aide", href: "#help" },
    { name: "Contact", href: "#contact" },
    { name: "FAQ", href: "#faq" },
    { name: "Statut", href: "#status" },
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
    <footer className="bg-foreground text-background">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 lg:gap-12">
          {/* Brand column */}
          <div className="col-span-2">
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
                  className="w-10 h-10 bg-background/10 rounded-full flex items-center justify-center hover:bg-primary transition-colors"
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
                    className="text-background/70 hover:text-primary text-sm transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Entreprise</h3>
            <ul className="space-y-3">
              {navigation.entreprise.map((item) => (
                <li key={item.name}>
                  <Link 
                    href={item.href} 
                    className="text-background/70 hover:text-primary text-sm transition-colors"
                  >
                    {item.name}
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
                    className="text-background/70 hover:text-primary text-sm transition-colors"
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
                    className="text-background/70 hover:text-primary text-sm transition-colors"
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
