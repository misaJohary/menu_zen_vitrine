import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import {
  ArrowLeft,
  Trash2,
  Mail,
  CheckCircle2,
  Clock,
  ShieldAlert,
  Smartphone,
  Info,
  Server,
  Phone,
  MapPin,
  HelpCircle
} from "lucide-react"

export const metadata: Metadata = {
  title: "Suppression de compte | Click Menu ZEN",
  description: "Procédure de suppression de compte et des données personnelles pour l'application mobile Click Menu ZEN (Google Play Store).",
}

export default function DeleteAccountPage() {
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
        <div className="mb-10 text-center md:text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-destructive/10 text-destructive text-xs font-semibold uppercase tracking-wider mb-4 border border-destructive/20">
            <Trash2 className="w-3.5 h-3.5" />
            Google Play Store Compliance
          </div>
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground mb-3">
            Suppression de compte et de données
          </h1>
          <p className="text-muted-foreground text-base max-w-2xl">
            Application mobile : <strong>Click Menu ZEN</strong> (Développeur : Click Menu ZEN).
            <br />
            Dernière mise à jour : {lastUpdated}
          </p>
        </div>

        {/* English Compliance Notice for Google Play Reviewers */}
        <div className="bg-primary/5 border-2 border-primary/20 rounded-2xl p-6 mb-10 shadow-sm">
          <div className="flex items-start gap-3">
            <Info className="w-6 h-6 text-primary shrink-0 mt-0.5" />
            <div className="text-sm">
              <h2 className="font-bold text-foreground text-base mb-1">
                Notice for Google Play App Reviewers (Account Deletion Policy)
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                This page fulfills Google Play's requirement for account and associated data deletion requests.
                Users of <strong>Click Menu ZEN</strong> can initiate the complete removal of their account and all personal data either directly inside the app (Profile &gt; Delete Account) or outside the app via email using the instructions below.
                Upon deletion, all user data (identity, credentials, reservations, favorites) is disabled and purged via the <code>DELETE /customers/me</code> API endpoint.
              </p>
            </div>
          </div>
        </div>

        <div className="space-y-8">
          {/* Section 1 : Procédure de demande */}
          <section className="bg-card border border-border rounded-2xl p-6 md:p-8 shadow-sm">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                <CheckCircle2 className="w-5 h-5" />
              </div>
              <h2 className="text-xl font-bold text-foreground">
                1. Procédure pour demander la suppression
              </h2>
            </div>

            <p className="text-muted-foreground text-sm leading-relaxed mb-6">
              Vous avez le droit de demander à tout moment la clôture de votre compte et la suppression totale de vos données personnelles sans justification requise, selon deux méthodes :
            </p>

            <div className="grid md:grid-cols-2 gap-4">
              {/* Méthode 1 */}
              <div className="border border-border rounded-xl p-5 bg-background/50 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2 text-primary font-semibold text-sm mb-2">
                    <Smartphone className="w-4 h-4" />
                    Option 1 : Depuis l'application
                  </div>
                  <p className="text-xs text-muted-foreground leading-relaxed mb-3">
                    Idéal si vous avez encore l'application installée sur votre smartphone :
                  </p>
                  <ol className="text-xs text-muted-foreground space-y-1.5 list-decimal list-inside pl-1">
                    <li>Ouvrez l'application <strong>Click Menu ZEN</strong>.</li>
                    <li>Accédez à l'onglet <strong>Profil</strong> en bas à droite.</li>
                    <li>Faites défiler vers le bas et appuyez sur <strong className="text-destructive">« Supprimer mon compte »</strong>.</li>
                    <li>Confirmez votre décision dans la boîte de dialogue.</li>
                  </ol>
                </div>
                <div className="mt-4 pt-3 border-t border-border/60 text-[11px] text-muted-foreground">
                  ⚡ La suppression est immédiate via l'API sécurisée <code>DELETE /customers/me</code>.
                </div>
              </div>

              {/* Méthode 2 */}
              <div className="border border-border rounded-xl p-5 bg-background/50 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2 text-primary font-semibold text-sm mb-2">
                    <Mail className="w-4 h-4" />
                    Option 2 : Par e-mail (sans l'application)
                  </div>
                  <p className="text-xs text-muted-foreground leading-relaxed mb-3">
                    Si vous avez déjà désinstallé l'application ou perdu l'accès :
                  </p>
                  <ul className="text-xs text-muted-foreground space-y-1.5 list-disc list-inside pl-1">
                    <li>Envoyez un e-mail à : <strong>clickmenuzen@gmail.com</strong></li>
                    <li>Objet : <em>Demande de suppression de compte Click Menu ZEN</em></li>
                    <li>Indiquez l'adresse e-mail ou le numéro de téléphone utilisé lors de votre inscription.</li>
                  </ul>
                </div>
                <div className="mt-4 pt-3 border-t border-border/60">
                  <a
                    href="mailto:clickmenuzen@gmail.com?subject=Demande%20de%20suppression%20de%20compte%20Click%20Menu%20ZEN"
                    className="inline-flex items-center justify-center gap-2 w-full py-2 px-3 bg-primary hover:bg-primary/90 text-primary-foreground text-xs font-semibold rounded-lg transition-colors"
                  >
                    <Mail className="w-3.5 h-3.5" />
                    Envoyer une demande par e-mail
                  </a>
                </div>
              </div>
            </div>
          </section>

          {/* Section 2 : Données supprimées */}
          <section className="bg-card border border-border rounded-2xl p-6 md:p-8 shadow-sm">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-destructive/10 flex items-center justify-center text-destructive">
                <Trash2 className="w-5 h-5" />
              </div>
              <h2 className="text-xl font-bold text-foreground">
                2. Types de données supprimées
              </h2>
            </div>

            <p className="text-muted-foreground text-sm leading-relaxed mb-4">
              Lorsque votre demande de suppression est confirmée, les données suivantes sont <strong>définitivement effacées ou désactivées</strong> :
            </p>

            <div className="grid sm:grid-cols-2 gap-3 text-sm text-muted-foreground">
              <div className="p-3.5 rounded-xl bg-muted/40 border border-border flex items-start gap-2.5">
                <span className="text-destructive font-bold">•</span>
                <div>
                  <strong className="text-foreground block text-xs uppercase tracking-wide">Profil personnel</strong>
                  Nom complet, photo/avatar de profil, informations de biographie.
                </div>
              </div>

              <div className="p-3.5 rounded-xl bg-muted/40 border border-border flex items-start gap-2.5">
                <span className="text-destructive font-bold">•</span>
                <div>
                  <strong className="text-foreground block text-xs uppercase tracking-wide">Identifiants d'accès</strong>
                  Adresse e-mail, numéro de téléphone et mot de passe chiffré.
                </div>
              </div>

              <div className="p-3.5 rounded-xl bg-muted/40 border border-border flex items-start gap-2.5">
                <span className="text-destructive font-bold">•</span>
                <div>
                  <strong className="text-foreground block text-xs uppercase tracking-wide">Historique & commandes</strong>
                  Réservations de table passées ou en attente et historique de commandes.
                </div>
              </div>

              <div className="p-3.5 rounded-xl bg-muted/40 border border-border flex items-start gap-2.5">
                <span className="text-destructive font-bold">•</span>
                <div>
                  <strong className="text-foreground block text-xs uppercase tracking-wide">Préférences & favoris</strong>
                  Liste des restaurants favoris, avis rédigés et jetons de session (tokens JWT).
                </div>
              </div>
            </div>
          </section>

          {/* Section 3 : Données conservées et délai */}
          <section className="bg-card border border-border rounded-2xl p-6 md:p-8 shadow-sm">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-amber-500/10 flex items-center justify-center text-amber-600 dark:text-amber-400">
                <Clock className="w-5 h-5" />
              </div>
              <h2 className="text-xl font-bold text-foreground">
                3. Données conservées et durée de rétention
              </h2>
            </div>

            <p className="text-muted-foreground text-sm leading-relaxed mb-4">
              Par principe, <strong>aucune donnée personnelle marketing ou de profil n'est conservée</strong> après la suppression. Seules les exceptions strictement prévues par la réglementation légale s'appliquent :
            </p>

            <div className="space-y-3">
              <div className="p-4 rounded-xl bg-muted/30 border border-border text-sm">
                <div className="font-semibold text-foreground mb-1">
                  Obligations légales et comptables
                </div>
                <p className="text-muted-foreground text-xs leading-relaxed">
                  Si des transactions financières ou paiements ont été réalisés dans le cadre d'une commande au restaurant, les factures et pièces comptables correspondantes sont archivées pendant la durée légale fiscale obligatoire (conformément au droit commercial et fiscal en vigueur) avant leur destruction automatique.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-muted/30 border border-border text-sm">
                <div className="font-semibold text-foreground mb-1">
                  Journaux de sécurité serveur (Logs techniques)
                </div>
                <p className="text-muted-foreground text-xs leading-relaxed">
                  Les logs réseau serveur temporaires (adresses IP d'accès pour la prévention des attaques) sont purgés de manière cyclique dans un délai maximal de <strong>90 jours</strong>. Ces logs ne sont jamais reliés à votre identité après la suppression du compte.
                </p>
              </div>
            </div>
          </section>

          {/* Section 4 : Contact & Support */}
          <section className="bg-card border border-border rounded-2xl p-6 md:p-8 shadow-sm">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                <HelpCircle className="w-5 h-5" />
              </div>
              <h2 className="text-xl font-bold text-foreground">
                4. Contact et assistance
              </h2>
            </div>

            <p className="text-muted-foreground text-sm leading-relaxed mb-4">
              Pour toute question relative à la suppression de vos données ou à notre politique de confidentialité, vous pouvez nous joindre directement :
            </p>

            <div className="grid sm:grid-cols-2 gap-4 text-sm">
              <div className="flex items-center gap-3 p-3 rounded-xl bg-muted/30 border border-border">
                <Mail className="w-5 h-5 text-primary shrink-0" />
                <div>
                  <span className="text-xs text-muted-foreground block">Email officiel</span>
                  <a href="mailto:clickmenuzen@gmail.com" className="font-medium text-foreground hover:text-primary">
                    clickmenuzen@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-3 p-3 rounded-xl bg-muted/30 border border-border">
                <Phone className="w-5 h-5 text-primary shrink-0" />
                <div>
                  <span className="text-xs text-muted-foreground block">Téléphone</span>
                  <span className="font-medium text-foreground">+261 38 35 602 05</span>
                </div>
              </div>

              <div className="flex items-center gap-3 p-3 rounded-xl bg-muted/30 border border-border sm:col-span-2">
                <MapPin className="w-5 h-5 text-primary shrink-0" />
                <div>
                  <span className="text-xs text-muted-foreground block">Adresse du développeur</span>
                  <span className="font-medium text-foreground">Betela Tuléar, Madagascar</span>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-border py-8 px-4 bg-muted/20 mt-12 text-center text-xs text-muted-foreground">
        <div className="max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <p>© {new Date().getFullYear()} Click Menu ZEN. Tous droits réservés.</p>
          <div className="flex items-center gap-6">
            <Link href="/privacy" className="hover:text-primary transition-colors">
              Politique de confidentialité
            </Link>
            <Link href="/" className="hover:text-primary transition-colors">
              Accueil
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}
