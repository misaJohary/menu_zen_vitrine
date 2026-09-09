import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import {
  ArrowLeft,
  ShieldCheck,
  MapPin,
  CalendarCheck,
  Utensils,
  Wifi,
  Trash2,
  Lock,
  Mail,
  Phone,
  HelpCircle,
  FileText,
  AlertCircle,
  Bell,
  Camera
} from "lucide-react"

export const metadata: Metadata = {
  title: "Politique de Confidentialité | Click Menu ZEN",
  description: "Politique de confidentialité et protection des données personnelles de l'application mobile Click Menu ZEN (Recherche de restaurants, consultation des menus et réservation de tables).",
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
            Application mobile : <strong className="text-foreground">Click Menu ZEN</strong> (Recherche, Menus & Réservations) • Dernière mise à jour : {lastUpdated}
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
                <strong>Click Menu ZEN</strong> is a public consumer mobile application enabling users to discover nearby registered restaurants, browse their digital menus, and make table reservations.
              </p>
              <ul className="list-disc pl-5 mt-2 space-y-1 text-xs text-muted-foreground">
                <li>
                  <strong>Location Permission (<code className="text-foreground">ACCESS_COARSE_LOCATION / ACCESS_FINE_LOCATION</code>):</strong> Used strictly in the foreground while the app is active to locate partner restaurants nearby and display distances. Location data is never tracked in the background and is never sold or shared for advertising.
                </li>
                <li>
                  <strong>Reservation Data:</strong> User-submitted details (name, phone number, reservation date/time, party size) are shared solely with the requested restaurant to confirm and fulfill the reservation.
                </li>
                <li>
                  <strong>Camera Permission (<code className="text-foreground">CAMERA</code> - optional):</strong> Used only if the user scans a table QR code on-site to view a menu. No photos or videos are stored or transmitted.
                </li>
                <li>
                  <strong>Data Deletion:</strong> Users can request complete deletion of their account and personal reservation history at any time by emailing{" "}
                  <a href="mailto:clickmenuzen@gmail.com" className="text-primary underline font-medium">
                    clickmenuzen@gmail.com
                  </a>.
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Detailed Sections (French) */}
        <div className="space-y-8 text-foreground/90 leading-relaxed text-sm md:text-base">
          {/* Section 1: Introduction */}
          <section className="space-y-3">
            <h2 className="text-xl font-bold text-foreground flex items-center gap-2">
              <FileText className="w-5 h-5 text-primary" />
              1. Introduction & Objet de l'Application
            </h2>
            <p>
              La présente Politique de Confidentialité régit l'utilisation de l'application mobile grand public <strong>Click Menu ZEN</strong>.
            </p>
            <p>
              Click Menu ZEN a pour vocation de permettre aux utilisateurs de :
            </p>
            <ul className="list-disc pl-6 space-y-1 text-muted-foreground">
              <li>Découvrir et rechercher facilement les restaurants, cafés et hôtels partenaires enregistrés sur notre plateforme à proximité de leur localisation ;</li>
              <li>Consulter la carte et les menus digitaux détaillés des établissements (plats, boissons, tarifs, photos et disponibilités) ;</li>
              <li>Effectuer des demandes de réservation de table en quelques clics auprès de l'établissement choisi.</li>
            </ul>
            <p>
              Nous nous engageons fermement à respecter et protéger la vie privée de nos utilisateurs conformément aux règles du <strong>Google Play Developer Program</strong> et aux législations applicables en matière de protection des données.
            </p>
          </section>

          {/* Section 2: Responsable */}
          <section className="space-y-3">
            <h2 className="text-xl font-bold text-foreground flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-primary" />
              2. Responsable du Traitement
            </h2>
            <p>Le responsable du traitement des données personnelles collectées via l'application est :</p>
            <div className="bg-card border border-border rounded-lg p-4 space-y-1 text-sm">
              <p><strong>Raison sociale / Entité :</strong> Click Menu ZEN</p>
              <p><strong>Email de contact :</strong> clickmenuzen@gmail.com</p>
              <p><strong>Téléphones :</strong> +261 38 35 602 05 / +261 34 99 722 78 / +261 34 89 824 86</p>
              <p><strong>Adresse :</strong> Betela Tuléar, Madagascar</p>
            </div>
          </section>

          {/* Section 3: Données collectées */}
          <section className="space-y-3">
            <h2 className="text-xl font-bold text-foreground flex items-center gap-2">
              <FileText className="w-5 h-5 text-primary" />
              3. Données Collectées & Méthodes de Collecte
            </h2>
            <p>Nous collectons uniquement les informations indispensables au service :</p>
            
            <div className="space-y-3">
              <div className="border border-border bg-card p-4 rounded-lg">
                <h3 className="font-semibold text-foreground flex items-center gap-2 mb-1">
                  <CalendarCheck className="w-4 h-4 text-primary" />
                  Données relatives aux réservations
                </h3>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Lorsque vous effectuez une réservation dans un restaurant partenaire, nous collectons : votre nom ou prénom, votre numéro de téléphone (pour que le restaurant puisse vous contacter ou confirmer la disponibilité), votre adresse email (pour vous envoyer le récapitulatif), la date et l'heure souhaitées, le nombre de personnes (couverts) et vos éventuelles demandes particulières (ex. table en terrasse, allergies).
                </p>
              </div>

              <div className="border border-border bg-card p-4 rounded-lg">
                <h3 className="font-semibold text-foreground flex items-center gap-2 mb-1">
                  <MapPin className="w-4 h-4 text-primary" />
                  Données de géolocalisation (Recherche à proximité)
                </h3>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Avec votre consentement exprès, l'application accède à votre position géographique approximative ou précise <em>uniquement lorsque l'application est active au premier plan</em>. Cette position sert exclusivement à trier et afficher les restaurants partenaires autour de vous et à calculer la distance qui vous en sépare. Cette donnée n'est ni historisée, ni transmise à des régies publicitaires, ni suivie en arrière-plan.
                </p>
              </div>

              <div className="border border-border bg-card p-4 rounded-lg">
                <h3 className="font-semibold text-foreground flex items-center gap-2 mb-1">
                  <Wifi className="w-4 h-4 text-primary" />
                  Données techniques et de diagnostic
                </h3>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Modèle de l'appareil, version du système Android, journal anonyme d'erreurs (crash logs) pour assurer la stabilité, corriger les bugs et prévenir les dysfonctionnements de l'application.
                </p>
              </div>
            </div>

            <p className="text-xs text-muted-foreground pt-1">
              <strong>Données NON collectées :</strong> Nous ne collectons aucune coordonnée bancaire (les règlements se font directement auprès du restaurant), aucun accès à vos contacts, messages, photos privées ou microphone.
            </p>
          </section>

          {/* Section 4: Autorisations Android */}
          <section className="space-y-4">
            <h2 className="text-xl font-bold text-foreground flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-primary" />
              4. Autorisations Spécifiques Android (Permissions Google Play)
            </h2>
            <p>
              L'application mobile demande les autorisations Android suivantes, rigoureusement justifiées par les fonctionnalités offertes :
            </p>

            <div className="grid gap-4 md:grid-cols-2">
              <div className="border border-border bg-card rounded-lg p-4">
                <div className="flex items-center gap-2 font-semibold text-foreground mb-2">
                  <MapPin className="w-5 h-5 text-primary" />
                  <span>Localisation (ACCESS_FINE_LOCATION / COARSE)</span>
                </div>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  <strong>Finalité :</strong> Permet d'afficher la liste et la carte des restaurants partenaires les plus proches de vous.
                  <br />
                  <strong>Contrôle :</strong> Vous pouvez refuser cette permission et choisir de rechercher manuellement un restaurant par nom ou quartier.
                </p>
              </div>

              <div className="border border-border bg-card rounded-lg p-4">
                <div className="flex items-center gap-2 font-semibold text-foreground mb-2">
                  <Wifi className="w-5 h-5 text-primary" />
                  <span>Accès Internet (INTERNET / NETWORK_STATE)</span>
                </div>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  <strong>Finalité :</strong> Indispensable pour interroger les serveurs, charger les cartes et menus actualisés des restaurants et transmettre les demandes de réservation en temps réel.
                </p>
              </div>

              <div className="border border-border bg-card rounded-lg p-4">
                <div className="flex items-center gap-2 font-semibold text-foreground mb-2">
                  <Bell className="w-5 h-5 text-primary" />
                  <span>Notifications (POST_NOTIFICATIONS)</span>
                </div>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  <strong>Finalité :</strong> Vous envoyer les notifications de statut de votre réservation (ex. « Réservation confirmée par le restaurant ») et des rappels utiles avant votre repas.
                </p>
              </div>

              <div className="border border-border bg-card rounded-lg p-4">
                <div className="flex items-center gap-2 font-semibold text-foreground mb-2">
                  <Camera className="w-5 h-5 text-primary" />
                  <span>Appareil photo (CAMERA - optionnel)</span>
                </div>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  <strong>Finalité :</strong> Utilisé uniquement si vous choisissez de scanner un QR code présent sur une table ou dans un restaurant partenaire pour accéder directement à sa carte. Aucune photo n'est enregistrée.
                </p>
              </div>
            </div>
          </section>

          {/* Section 5: Utilisation */}
          <section className="space-y-3">
            <h2 className="text-xl font-bold text-foreground flex items-center gap-2">
              <Utensils className="w-5 h-5 text-primary" />
              5. Finalité de l'Utilisation des Données
            </h2>
            <p>Les informations collectées sont strictement employées pour :</p>
            <ul className="list-disc pl-6 space-y-1.5 text-muted-foreground">
              <li>Permettre la recherche, la géolocalisation et l'affichage des restaurants adhérents et de leurs menus ;</li>
              <li>Transmettre, enregistrer et assurer le suivi de vos réservations auprès des restaurateurs concernés ;</li>
              <li>Vous informer par notification ou message de la confirmation, modification ou annulation d'une réservation ;</li>
              <li>Améliorer les performances et l'ergonomie de l'application mobile ;</li>
              <li>Assurer l'assistance aux utilisateurs et le support technique.</li>
            </ul>
          </section>

          {/* Section 6: Partage */}
          <section className="space-y-3">
            <h2 className="text-xl font-bold text-foreground flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-primary" />
              6. Partage des Données avec des Tiers
            </h2>
            <p>
              <strong>Click Menu ZEN ne vend, ne loue et n'échange aucune donnée personnelle avec des courtiers en données ou des annonceurs tiers.</strong>
            </p>
            <p>Vos données sont transmises exclusivement :</p>
            <ul className="list-disc pl-6 space-y-1.5 text-muted-foreground">
              <li>
                <strong>Aux restaurants et établissements partenaires auprès desquels vous réservez :</strong> uniquement les informations indispensables à la bonne prise en charge de votre réservation (nom, téléphone, date, heure, nombre de couverts, notes).
              </li>
              <li>
                <strong>À nos prestataires techniques d'infrastructure :</strong> services d'hébergement cloud sécurisés agissant en sous-traitance sous de strictes clauses de confidentialité.
              </li>
            </ul>
          </section>

          {/* Section 7: Sécurité */}
          <section className="space-y-3">
            <h2 className="text-xl font-bold text-foreground flex items-center gap-2">
              <Lock className="w-5 h-5 text-primary" />
              7. Sécurité et Confidentialité
            </h2>
            <p>
              Toutes les données échangées entre l'application mobile et nos serveurs sont protégées par chiffrement à l'aide des protocoles standards de l'industrie (HTTPS / TLS). Nous limitons l'accès aux données aux seuls personnels et partenaires habilités ayant besoin d'en connaître pour exécuter le service de réservation.
            </p>
          </section>

          {/* Section 8: Conservation & Suppression (Exigence Google Play) */}
          <section className="space-y-3 border-l-4 border-primary pl-4 py-1 bg-primary/5 rounded-r-lg">
            <h2 className="text-xl font-bold text-foreground flex items-center gap-2">
              <Trash2 className="w-5 h-5 text-primary" />
              8. Conservation & Suppression des Données (Conformité Google Play)
            </h2>
            <p>
              Les données de réservation sont conservées pour une durée n'excédant pas celle requise par la gestion de la réservation et les obligations administratives courantes.
            </p>
            <p>
              Conformément à la politique de Google Play relative à la suppression des comptes et des données utilisateurs, <strong>vous pouvez à tout moment exiger l'effacement définitif de vos données personnelles</strong> et de votre historique de réservation.
            </p>
            <div className="bg-card border border-border p-4 rounded-lg text-sm space-y-2">
              <p className="font-semibold text-foreground">Comment exercer votre droit à l'effacement :</p>
              <p className="text-muted-foreground">
                Il vous suffit d'adresser un simple message électronique à notre service d'assistance :
              </p>
              <p>
                <a
                  href="mailto:clickmenuzen@gmail.com?subject=Demande%20de%20suppression%20de%20donnees%20Click%20Menu%20ZEN"
                  className="inline-flex items-center gap-2 text-primary font-semibold hover:underline"
                >
                  <Mail className="w-4 h-4" />
                  clickmenuzen@gmail.com
                </a>
              </p>
              <p className="text-xs text-muted-foreground">
                Indiquez le numéro de téléphone ou l'email utilisé lors de vos réservations. Vos données personnelles seront purgées de nos bases de données dans un délai maximal de 30 jours, avec confirmation écrite envoyée en retour.
              </p>
            </div>
          </section>

          {/* Section 9: Mineurs */}
          <section className="space-y-3">
            <h2 className="text-xl font-bold text-foreground flex items-center gap-2">
              <HelpCircle className="w-5 h-5 text-primary" />
              9. Protection des Mineurs
            </h2>
            <p>
              Notre application est destinée au grand public capable de réserver une table dans un restaurant. Nous ne collectons pas sciemment de données auprès d'enfants âgés de moins de 13 ans. Si nous constatons qu'un enfant nous a fourni des renseignements sans accord parental, nous prenons les mesures immédiates pour supprimer ces données.
            </p>
          </section>

          {/* Section 10: Modifications */}
          <section className="space-y-3">
            <h2 className="text-xl font-bold text-foreground flex items-center gap-2">
              <FileText className="w-5 h-5 text-primary" />
              10. Mises à Jour de cette Politique
            </h2>
            <p>
              Nous nous réservons le droit d'actualiser la présente Politique de Confidentialité pour accompagner les évolutions de l'application mobile ou des exigences légales. La date de dernière mise à jour sera systématiquement actualisée en tête de document.
            </p>
          </section>

          {/* Section 11: Contact */}
          <section className="space-y-3 pt-4 border-t border-border">
            <h2 className="text-xl font-bold text-foreground flex items-center gap-2">
              <Mail className="w-5 h-5 text-primary" />
              11. Contact
            </h2>
            <p>Pour toute question, remarque ou demande relative à vos données personnelles, veuillez contacter :</p>
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
