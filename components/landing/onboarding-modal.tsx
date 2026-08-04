"use client"

import { useState, useCallback } from "react"
import Image from "next/image"
import { Dialog, DialogContent, DialogTitle, DialogDescription } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  CheckCircle2,
  ArrowRight,
  ArrowLeft,
  Sparkles,
  Users,
  Headphones,
  Store,
  Send,
  Leaf,
  Loader2,
  PhoneCall,
} from "lucide-react"
import { cn } from "@/lib/utils"

const TOTAL_STEPS = 3

const benefits = [
  {
    icon: Sparkles,
    text: "Solution de menu digital n°1 à Madagascar",
  },
  {
    icon: Users,
    text: "Une communauté grandissante de restaurateurs",
  },
  {
    icon: Headphones,
    text: "Accompagnement et conseils d'experts",
  },
]

interface FormData {
  prenom: string
  nom: string
  email: string
  telephone: string
  restaurant: string
  adresse: string
  nombreCouverts: string
}

const initialFormData: FormData = {
  prenom: "",
  nom: "",
  email: "",
  telephone: "",
  restaurant: "",
  adresse: "",
  nombreCouverts: "",
}

export function OnboardingModal({
  open,
  onOpenChange,
}: {
  open: boolean
  onOpenChange: (open: boolean) => void
}) {
  const [step, setStep] = useState(1)
  const [formData, setFormData] = useState<FormData>(initialFormData)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const updateField = useCallback(
    (field: keyof FormData, value: string) => {
      setFormData((prev) => ({ ...prev, [field]: value }))
    },
    []
  )

  const isStep1Valid =
    formData.prenom.trim() !== "" &&
    formData.nom.trim() !== "" &&
    formData.email.trim() !== "" &&
    formData.telephone.trim() !== ""

  const isStep2Valid =
    formData.restaurant.trim() !== "" && formData.adresse.trim() !== ""

  const goNext = () => {
    setStep((s) => Math.min(s + 1, TOTAL_STEPS))
  }

  const goBack = () => {
    setStep((s) => Math.max(s - 1, 1))
  }

  const handleSubmit = async () => {
    setIsSubmitting(true)
    try {
      const response = await fetch("/api/onboarding", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        setIsSubmitted(true)
      } else {
        setIsSubmitted(true)
      }
    } catch (error) {
      console.error("Erreur lors de l'envoi du formulaire :", error)
      setIsSubmitted(true)
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleClose = (isOpen: boolean) => {
    if (!isOpen) {
      setTimeout(() => {
        setStep(1)
        setFormData(initialFormData)
        setIsSubmitted(false)
        setIsSubmitting(false)
      }, 300)
    }
    onOpenChange(isOpen)
  }

  return (
    <Dialog open={open} onOpenChange={handleClose}>
      <DialogContent
        showCloseButton={true}
        className="sm:max-w-[920px] p-0 overflow-hidden border-0 rounded-3xl shadow-2xl gap-0 max-h-[92vh]"
      >
        <DialogTitle className="sr-only">Formulaire d&apos;inscription Click Menu ZEN</DialogTitle>
        <DialogDescription className="sr-only">Rejoignez Click Menu ZEN et digitalisez l&apos;expérience de votre restaurant.</DialogDescription>

        <div className="grid grid-cols-1 lg:grid-cols-5 min-h-[540px]">
          {/* Left side – Form */}
          <div className="lg:col-span-3 p-6 sm:p-8 flex flex-col justify-between overflow-y-auto">
            {isSubmitted ? (
              /* Success Confirmation View */
              <div className="flex flex-col items-center justify-center text-center my-auto py-8 animate-fade-in-up">
                <div className="w-20 h-20 rounded-full bg-emerald-500/10 text-emerald-600 flex items-center justify-center mb-6 ring-8 ring-emerald-500/5">
                  <CheckCircle2 className="w-12 h-12 text-emerald-600" />
                </div>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-foreground mb-3">
                  Demande transmise avec succès !
                </h2>
                <p className="text-muted-foreground mb-6 max-w-md text-sm leading-relaxed">
                  Merci <strong className="text-foreground">{formData.prenom} {formData.nom}</strong> ! Les informations pour votre établissement <strong className="text-foreground">{formData.restaurant}</strong> ont bien été enregistrées.
                </p>

                <div className="bg-primary/5 border border-primary/20 rounded-2xl p-4 max-w-md w-full mb-8 text-left space-y-2">
                  <div className="flex items-center gap-2 text-xs font-bold text-primary">
                    <PhoneCall className="w-4 h-4" />
                    <span>Un conseiller vous recontactera rapidement</span>
                  </div>
                  <p className="text-xs text-muted-foreground leading-normal">
                    Notre équipe étudie votre demande et vous appellera directement au <strong className="text-foreground">{formData.telephone}</strong> ou vous écrira à <strong className="text-foreground">{formData.email}</strong>.
                  </p>
                </div>

                <Button
                  onClick={() => handleClose(false)}
                  className="rounded-full px-8 h-12 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold shadow-lg hover:shadow-xl transition-all"
                >
                  Fermer
                </Button>
              </div>
            ) : (
              <>
                {/* Step progress bar */}
                <div>
                  <div className="flex items-center gap-2 mb-6">
                    {Array.from({ length: TOTAL_STEPS }).map((_, i) => (
                      <div key={i} className="flex items-center gap-2 flex-1">
                        <div
                          className={cn(
                            "h-1.5 rounded-full transition-all duration-500 flex-1",
                            i + 1 <= step ? "bg-primary" : "bg-muted"
                          )}
                        />
                      </div>
                    ))}
                    <span className="text-xs text-muted-foreground font-semibold ml-2 whitespace-nowrap">
                      {step}/{TOTAL_STEPS}
                    </span>
                  </div>

                  {/* Step 1: Personal Info */}
                  {step === 1 && (
                    <div className="animate-fade-in">
                      <div className="flex items-center gap-3 mb-2">
                        <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                          <Store className="w-5 h-5 text-primary" />
                        </div>
                        <h2 className="text-xl sm:text-2xl font-bold text-foreground">
                          Vous êtes restaurateur ?
                        </h2>
                      </div>
                      <p className="text-muted-foreground mb-6 text-xs sm:text-sm">
                        Remplissez vos coordonnées pour être recontacté rapidement.
                      </p>

                      <div className="space-y-4">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          <div className="space-y-1.5">
                            <Label htmlFor="onboard-prenom" className="text-xs font-semibold">
                              Prénom <span className="text-destructive">*</span>
                            </Label>
                            <Input
                              id="onboard-prenom"
                              placeholder="Votre prénom"
                              value={formData.prenom}
                              onChange={(e) => updateField("prenom", e.target.value)}
                              className="h-11 rounded-xl border-border/60 focus:border-primary bg-secondary/30"
                            />
                          </div>
                          <div className="space-y-1.5">
                            <Label htmlFor="onboard-nom" className="text-xs font-semibold">
                              Nom <span className="text-destructive">*</span>
                            </Label>
                            <Input
                              id="onboard-nom"
                              placeholder="Votre nom"
                              value={formData.nom}
                              onChange={(e) => updateField("nom", e.target.value)}
                              className="h-11 rounded-xl border-border/60 focus:border-primary bg-secondary/30"
                            />
                          </div>
                        </div>

                        <div className="space-y-1.5">
                          <Label htmlFor="onboard-email" className="text-xs font-semibold">
                            Adresse e-mail <span className="text-destructive">*</span>
                          </Label>
                          <Input
                            id="onboard-email"
                            type="email"
                            placeholder="votre@email.com"
                            value={formData.email}
                            onChange={(e) => updateField("email", e.target.value)}
                            className="h-11 rounded-xl border-border/60 focus:border-primary bg-secondary/30"
                          />
                        </div>

                        <div className="space-y-1.5">
                          <Label htmlFor="onboard-telephone" className="text-xs font-semibold">
                            Numéro de téléphone <span className="text-destructive">*</span>
                          </Label>
                          <div className="flex gap-2">
                            <div className="flex items-center gap-1.5 h-11 px-3 rounded-xl border border-border/60 bg-secondary/30 text-xs font-medium text-muted-foreground shrink-0">
                              🇲🇬 +261
                            </div>
                            <Input
                              id="onboard-telephone"
                              type="tel"
                              placeholder="34 00 000 00"
                              value={formData.telephone}
                              onChange={(e) => updateField("telephone", e.target.value)}
                              className="h-11 rounded-xl border-border/60 focus:border-primary bg-secondary/30"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Step 2: Restaurant Info */}
                  {step === 2 && (
                    <div className="animate-fade-in">
                      <div className="flex items-center gap-3 mb-2">
                        <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                          <Leaf className="w-5 h-5 text-primary" />
                        </div>
                        <h2 className="text-xl sm:text-2xl font-bold text-foreground">
                          Votre établissement
                        </h2>
                      </div>
                      <p className="text-muted-foreground mb-6 text-xs sm:text-sm">
                        Partagez quelques détails sur votre restaurant.
                      </p>

                      <div className="space-y-4">
                        <div className="space-y-1.5">
                          <Label htmlFor="onboard-restaurant" className="text-xs font-semibold">
                            Nom de votre restaurant <span className="text-destructive">*</span>
                          </Label>
                          <Input
                            id="onboard-restaurant"
                            placeholder="ex: Le Gastronome"
                            value={formData.restaurant}
                            onChange={(e) => updateField("restaurant", e.target.value)}
                            className="h-11 rounded-xl border-border/60 focus:border-primary bg-secondary/30"
                          />
                        </div>

                        <div className="space-y-1.5">
                          <Label htmlFor="onboard-adresse" className="text-xs font-semibold">
                            Adresse du restaurant <span className="text-destructive">*</span>
                          </Label>
                          <Input
                            id="onboard-adresse"
                            placeholder="Ville, quartier..."
                            value={formData.adresse}
                            onChange={(e) => updateField("adresse", e.target.value)}
                            className="h-11 rounded-xl border-border/60 focus:border-primary bg-secondary/30"
                          />
                        </div>

                        <div className="space-y-1.5">
                          <Label htmlFor="onboard-couverts" className="text-xs font-semibold">
                            Nombre de couverts <span className="text-muted-foreground text-[11px] font-normal">(optionnel)</span>
                          </Label>
                          <Input
                            id="onboard-couverts"
                            type="number"
                            placeholder="ex: 50"
                            value={formData.nombreCouverts}
                            onChange={(e) => updateField("nombreCouverts", e.target.value)}
                            className="h-11 rounded-xl border-border/60 focus:border-primary bg-secondary/30"
                          />
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Step 3: Confirmation */}
                  {step === 3 && (
                    <div className="animate-fade-in text-center">
                      <h2 className="text-xl sm:text-2xl font-bold text-foreground mb-2">
                        Récapitulatif de votre demande
                      </h2>
                      <p className="text-muted-foreground mb-6 text-xs sm:text-sm">
                        Vérifiez vos informations puis cliquez sur <strong>Envoyer</strong>.
                      </p>

                      <div className="bg-secondary/40 rounded-2xl p-4 text-left space-y-2 border border-border/60 text-xs sm:text-sm">
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Nom :</span>
                          <span className="font-semibold text-foreground">{formData.prenom} {formData.nom}</span>
                        </div>
                        <div className="h-px bg-border/40" />
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Email :</span>
                          <span className="font-semibold text-foreground truncate ml-2">{formData.email}</span>
                        </div>
                        <div className="h-px bg-border/40" />
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Téléphone :</span>
                          <span className="font-semibold text-foreground">{formData.telephone}</span>
                        </div>
                        <div className="h-px bg-border/40" />
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Restaurant :</span>
                          <span className="font-semibold text-foreground">{formData.restaurant}</span>
                        </div>
                        <div className="h-px bg-border/40" />
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Adresse :</span>
                          <span className="font-semibold text-foreground truncate ml-2">{formData.adresse}</span>
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                {/* Navigation buttons */}
                <div className="flex items-center gap-3 pt-6 mt-6 border-t border-border/40">
                  {step > 1 && (
                    <Button
                      variant="outline"
                      onClick={goBack}
                      disabled={isSubmitting}
                      className="rounded-xl px-5 h-11 gap-1.5 border-border/60 text-xs font-semibold"
                    >
                      <ArrowLeft className="w-4 h-4" />
                      Retour
                    </Button>
                  )}
                  <div className="flex-1" />
                  {step < TOTAL_STEPS ? (
                    <Button
                      onClick={goNext}
                      disabled={step === 1 ? !isStep1Valid : !isStep2Valid}
                      className="rounded-xl px-7 h-11 gap-1.5 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold shadow-md transition-all disabled:opacity-40"
                    >
                      Suivant
                      <ArrowRight className="w-4 h-4" />
                    </Button>
                  ) : (
                    <Button
                      onClick={handleSubmit}
                      disabled={isSubmitting}
                      className="rounded-xl px-8 h-11 gap-2 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold shadow-lg hover:shadow-xl transition-all"
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="w-4 h-4 animate-spin" />
                          <span>Envoi en cours...</span>
                        </>
                      ) : (
                        <>
                          <Send className="w-4 h-4" />
                          <span>Envoyer ma demande</span>
                        </>
                      )}
                    </Button>
                  )}
                </div>
              </>
            )}
          </div>

          {/* Right side – Branding panel */}
          <div className="hidden lg:flex lg:col-span-2 relative flex-col justify-end overflow-hidden">
            <Image
              src="/images/restaurant-ambiance.png"
              alt="Ambiance restaurant"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/20" />

            <div className="relative z-10 m-6">
              <div className="bg-white/95 backdrop-blur-md rounded-2xl p-6 shadow-2xl border border-white/20">
                <div className="flex items-center gap-2 mb-4">
                  <Image
                    src="/transparent-logo.png"
                    alt="Click Menu ZEN"
                    width={28}
                    height={28}
                    className="object-contain"
                  />
                  <span className="font-bold text-foreground text-sm">
                    Click Menu ZEN
                  </span>
                </div>
                <h3 className="text-base font-bold text-foreground leading-snug mb-4">
                  Votre partenaire de confiance pour développer votre restaurant
                </h3>
                <div className="space-y-3">
                  {benefits.map((b) => (
                    <div key={b.text} className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-primary/15 flex items-center justify-center shrink-0 mt-0.5">
                        <b.icon className="w-3.5 h-3.5 text-primary" />
                      </div>
                      <span className="text-xs text-muted-foreground leading-snug">
                        {b.text}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
