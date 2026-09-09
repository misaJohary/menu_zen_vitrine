import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import {
  ArrowLeft,
  ShieldCheck,
  Camera,
  Wifi,
  Trash2,
  Lock,
  Mail,
  Phone,
  MapPin,
  HelpCircle,
  FileText,
  AlertCircle
} from "lucide-react"

export const metadata: Metadata = {
  title: "Politique de Confidentialité | Click Menu ZEN",
  description: "Politique de confidentialité et protection des données personnelles de l'application mobile Click Menu ZEN pour le Google Play Store.",
}

export default function PrivacyPolicyPage() {
  const lastUpdated = "9 septembre 2026"

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      {/* Top Navigation Bar */}
      <header className="sticky top-0 z-40 bg-background/90 backdrop-blur-md border-b border-border">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 group">
            <Image
              src="/transparent-logo.png"
              alt="Click Menu ZEN Logo"
              width={36}
              height={36}
              className="w-9 h-9 object-contain group-hover:scale-105 transition-transform"
            />
            <span className="font-bold text-lg text-foreground group-hover:text-primary transition-colors">
              Click Menu
            </span>
            <span className="font-bold text-lg text-primary">ZEN</span>
          </Link>

          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Retour à l'accueil
          </Link>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 py-12 px-4 md:px-6 lg:px-8 max-w-4xl mx-auto w-full">
        {/* Header section */}
        <div className="mb-10 text-center md:text-left border-b border-border pb-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold mb-4">
            <ShieldCheck className="w-4 h-4" />
            Google Play Policy Compliance
          </div>
          <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-3">
            Politique de Confidentialité
          </h1>
          <p className="text-muted-foreground text-sm">
            Application mobile : <strong className="text-foreground">Click Menu ZEN</strong> • Dernière mise à jour : {lastUpdated}
          </p>
        </div>

        {/* English summary for Google Play Reviewers */}
        <div className="mb-10 p-5 rounded-xl border border-primary/20 bg-primary/5">
          <div className="flex items-start gap-3">
            <AlertCircle className="w-5 h-5 text-primary shrink-0 mt-0.5" />
            <div className="text-sm">
              <h2 className="font-semibold text-foreground mb-1">
                Google Play Store Reviewer Notice (Summary in English)
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                <strong>Click Menu ZEN</strong> is a digital restaurant ordering mobile application.
                The app uses the <strong>Camera</strong> permission strictly for scanning on-table QR codes to open digital menus (no photos/videos stored or uploaded).
                Network permissions are used solely to fetch menu items and send dining orders to the restaurant staff.
                We do not sell personal data, do not track precise background location, and provide complete data deletion upon request at{" "}
                <a href="mailto:clickmenuzen@gmail.com" className="text-primary underline">
                  clickmenuzen@gmail.com
                </a>.
              </p>
            </div>
          </div>
        </div>

        {/* Detailed Sections (French) */}
        <div className="space-y-8 text-foreground/90 leading-relaxed text-sm md:text-base">
          {/* Section 1: Introduction */}
          <section className="space-y-3">
            <h2 className="text-xl font-bold text-foreground flex items-center gap-2">
              <FileText className="w-5 h-5 text-primary" />
              1. Introduction & Présentation de l'Application
            </h2>
            <p>
              La présente Politique de Confidentialité s'applique à l'application mobile <strong>Click Menu ZEN</strong> ainsi qu'aux services associés. Click Menu ZEN est une solution conçue pour faciliter et moderniser la consultation des menus et la prise de commande au sein des restaurants, hôtels et établissements de restauration partenaires.
            </p>
            <p>
              Nous accordons une importance primordiale à la protection de la vie privée et à la sécurité des données de nos utilisateurs (clients et personnel d'établissement).
            </p>
          </section>

          {/* Section 2: Responsable */}
          <section className="space-y-3">
            <h2 className="text-xl font-bold text-foreground flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-primary" />
              2. Responsable du Traitement des Données
            </h2>
            <p>Le responsable du traitement des données pour l'application Click Menu ZEN est :</p>
            <div className="bg-card border border-border rounded-lg p-4 space-y-1 text-sm">
              <p><strong>Entité :</strong> Click Menu ZEN</p>
              <p><strong>Email :</strong> clickmenuzen@gmail.com</p>
              <p><strong>Téléphones :</strong> +261 38 35 602 05 / +261 34 99 722 78 / +261 34 89 824 86</p>
              <p><strong>Localisation :</strong> Betela Tuléar, Madagascar</p>
            </div>
          </section>

          {/* Section 3: Données collectées */}
          <section className="space-y-3">
            <h2 className="text-xl font-bold text-foreground flex items-center gap-2">
              <FileText className="w-5 h-5 text-primary" />
              3. Données Collectées
            </h2>
            <p>Nous limitons la collecte de données au strict nécessaire au bon fonctionnement du service de commande :</p>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li>
                <strong className="text-foreground">Informations de commande :</strong> Plats choisis, quantités sélectionnées, commentaires/options de préparation, numéro de table, montant total de la commande et horodatage.
              </li>
              <li>
                <strong className="text-foreground">Informations de contact (optionnelles) :</strong> Nom ou numéro de téléphone renseigné lors de la validation d'une commande si nécessaire pour le service.
              </li>
              <li>
                <strong className="text-foreground">Données techniques et de diagnostic :</strong> Version du système d'exploitation, modèle de l'appareil, rapports d'erreurs anonymisés en cas de plantage pour assurer la maintenance et la stabilité de l'application.
              </li>
              <li>
                <strong className="text-foreground">Données NON collectées :</strong> Nous ne collectons <em>aucun</em> identifiant publicitaire intrusif, aucune donnée biométrique, aucun historique de navigation externe, et aucune donnée financière sensible (les paiements éventuels sont gérés au comptoir ou par des prestataires bancaires agréés).
              </li>
            </ul>
          </section>

          {/* Section 4: Permissions de l'appareil (Google Play Store) */}
          <section className="space-y-4">
            <h2 className="text-xl font-bold text-foreground flex items-center gap-2">
              <Camera className="w-5 h-5 text-primary" />
              4. Autorisations Spécifiques Android (Google Play)
            </h2>
            <p>
              Afin de fonctionner correctement, l'application mobile Click Menu ZEN peut demander l'accès à certaines fonctionnalités matérielles de votre téléphone :
            </p>

            <div className="grid gap-4 md:grid-cols-2">
              <div className="border border-border bg-card rounded-lg p-4">
                <div className="flex items-center gap-2 font-semibold text-foreground mb-2">
                  <Camera className="w-5 h-5 text-primary" />
                  <span>Appareil photo (CAMERA)</span>
                </div>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  <strong>Utilisation exclusive :</strong> Sert uniquement à scanner les QR codes apposés sur les tables du restaurant pour ouvrir instantanément la carte correspondante. Aucune photo ni vidéo n'est enregistrée sur l'appareil ni transmise sur Internet.
                </p>
              </div>

              <div className="border border-border bg-card rounded-lg p-4">
                <div className="flex items-center gap-2 font-semibold text-foreground mb-2">
                  <Wifi className="w-5 h-5 text-primary" />
                  <span>Accès Réseau (INTERNET)</span>
                </div>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  <strong>Utilisation exclusive :</strong> Permet de télécharger le menu actualisé (plats, prix, disponibilités en temps réel) et d'envoyer votre commande directement en cuisine ou au serveur de l'établissement.
                </p>
              </div>
            </div>

            <div className="p-3 bg-muted/50 rounded-lg text-xs text-muted-foreground">
              <strong>Note :</strong> L'application n'accède pas à votre localisation GPS en arrière-plan, à vos contacts, à votre microphone ni à vos fichiers multimédias personnels.
            </div>
          </section>

          {/* Section 5: Utilisation des données */}
          <section className="space-y-3">
            <h2 className="text-xl font-bold text-foreground flex items-center gap-2">
              <Lock className="w-5 h-5 text-primary" />
              5. Finalité de l'Utilisation des Données
            </h2>
            <p>Les données traitées servent exclusivement à :</p>
            <ul className="list-disc pl-6 space-y-1.5 text-muted-foreground">
              <li>Permettre l'affichage du menu digital et la transmission des commandes au restaurant ;</li>
              <li>Calculer automatiquement le total et gérer les statuts des commandes par table ;</li>
              <li>Assurer l'assistance client, corriger d'éventuels bugs et maintenir la sécurité de l'application ;</li>
              <li>Respecter les obligations légales et réglementaires applicables.</li>
            </ul>
          </section>

          {/* Section 6: Partage des données */}
          <section className="space-y-3">
            <h2 className="text-xl font-bold text-foreground flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-primary" />
              6. Partage et Divulgation des Données
            </h2>
            <p>
              <strong>Nous ne vendons, ne louons et ne commercialisons aucune donnée personnelle à des tiers.</strong>
            </p>
            <p>Les données sont uniquement partagées avec :</p>
            <ul className="list-disc pl-6 space-y-1.5 text-muted-foreground">
              <li><strong>Le restaurant ou hôtel partenaire :</strong> uniquement les éléments de votre commande et votre numéro de table afin de pouvoir vous servir.</li>
              <li><strong>Nos prestataires techniques d'infrastructure :</strong> serveurs d'hébergement sécurisés soumis à des engagements stricts de confidentialité.</li>
            </ul>
          </section>

          {/* Section 7: Sécurité */}
          <section className="space-y-3">
            <h2 className="text-xl font-bold text-foreground flex items-center gap-2">
              <Lock className="w-5 h-5 text-primary" />
              7. Sécurité des Données
            </h2>
            <p>
              Toutes les communications entre l'application mobile et nos serveurs s'effectuent via des protocoles sécurisés et chiffrés (HTTPS / TLS). Nous mettons en œuvre des mesures de protection organisationnelles et techniques pour empêcher tout accès non autorisé, altération ou perte de données.
            </p>
          </section>

          {/* Section 8: Conservation & Suppression (Google Play Requirement) */}
          <section className="space-y-3 border-l-4 border-primary pl-4 py-1 bg-primary/5 rounded-r-lg">
            <h2 className="text-xl font-bold text-foreground flex items-center gap-2">
              <Trash2 className="w-5 h-5 text-primary" />
              8. Conservation & Demande de Suppression des Données
            </h2>
            <p>
              Les données de commande sont conservées pour une durée strictement nécessaire à la prestation et aux clôtures de caisse du restaurant, puis archivées ou purgées selon les règles légales.
            </p>
            <p>
              Conformément aux exigences de transparence de Google Play, tout utilisateur a le droit de demander l'accès, la rectification ou la <strong>suppression intégrale</strong> de ses données personnelles.
            </p>
            <div className="bg-card border border-border p-3 rounded-lg text-sm">
              <p className="font-semibold text-foreground mb-1">Procédure de demande de suppression :</p>
              <p className="text-muted-foreground">
                Envoyez un email à{" "}
                <a href="mailto:clickmenuzen@gmail.com?subject=Suppression%20de%20donnees%20Click%20Menu%20ZEN" className="text-primary font-medium underline">
                  clickmenuzen@gmail.com
                </a>{" "}
                avec pour objet <em>« Demande de suppression de données »</em>. Votre demande sera traitée sans délai et confirmée par écrit dans un délai maximal de 30 jours.
              </p>
            </div>
          </section>

          {/* Section 9: Mineurs */}
          <section className="space-y-3">
            <h2 className="text-xl font-bold text-foreground flex items-center gap-2">
              <HelpCircle className="w-5 h-5 text-primary" />
              9. Protection de la Vie Privée des Enfants
            </h2>
            <p>
              L'application Click Menu ZEN n'est pas destinée spécifiquement aux enfants de moins de 13 ans (ou l'âge minimal applicable dans votre juridiction). Nous ne collectons pas sciemment de données identifiables auprès d'enfants. Si vous estimez qu'un enfant nous a fourni des données personnelles, contactez-nous afin que nous puissions les supprimer immédiatement.
            </p>
          </section>

          {/* Section 10: Modifications */}
          <section className="space-y-3">
            <h2 className="text-xl font-bold text-foreground flex items-center gap-2">
              <FileText className="w-5 h-5 text-primary" />
              10. Mises à Jour de la Politique
            </h2>
            <p>
              Nous pouvons mettre à jour cette politique de confidentialité pour refléter l'évolution de nos services ou les exigences réglementaires. Toute modification sera publiée sur cette page avec la date de révision correspondante.
            </p>
          </section>

          {/* Section 11: Contact */}
          <section className="space-y-3 pt-4 border-t border-border">
            <h2 className="text-xl font-bold text-foreground flex items-center gap-2">
              <Mail className="w-5 h-5 text-primary" />
              11. Nous Contacter
            </h2>
            <p>Pour toute question ou préoccupation relative à cette politique de confidentialité, vous pouvez nous joindre :</p>
            <div className="grid gap-3 sm:grid-cols-3 pt-2">
              <div className="flex items-center gap-3 p-3 rounded-lg border border-border bg-card">
                <Mail className="w-5 h-5 text-primary shrink-0" />
                <div className="text-xs">
                  <p className="font-semibold text-foreground">Email</p>
                  <a href="mailto:clickmenuzen@gmail.com" className="text-muted-foreground hover:text-primary">
                    clickmenuzen@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-3 p-3 rounded-lg border border-border bg-card">
                <Phone className="w-5 h-5 text-primary shrink-0" />
                <div className="text-xs">
                  <p className="font-semibold text-foreground">Téléphone</p>
                  <a href="tel:+261383560205" className="text-muted-foreground hover:text-primary">
                    +261 38 35 602 05
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-3 p-3 rounded-lg border border-border bg-card">
                <MapPin className="w-5 h-5 text-primary shrink-0" />
                <div className="text-xs">
                  <p className="font-semibold text-foreground">Adresse</p>
                  <span className="text-muted-foreground">Betela Tuléar, Madagascar</span>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-border py-6 bg-card">
        <div className="container mx-auto px-4 text-center text-xs text-muted-foreground">
          <p>© {new Date().getFullYear()} Click Menu ZEN. Tous droits réservés.</p>
        </div>
      </footer>
    </div>
  )
}
