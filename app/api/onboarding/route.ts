import { NextResponse } from "next/server"
import { Resend } from "resend"

export async function POST(request: Request) {
  try {
    const data = await request.json()
    const { prenom, nom, email, telephone, restaurant, adresse, nombreCouverts } = data

    // Log submitted lead data in server logs
    console.log("📥 Nouveau lead Click Menu ZEN reçu :", {
      nom: `${prenom} ${nom}`,
      email,
      telephone,
      restaurant,
      adresse,
      nombreCouverts,
      timestamp: new Date().toISOString(),
    })

    const apiKey = process.env.RESEND_API_KEY

    if (apiKey) {
      const resend = new Resend(apiKey)

      await resend.emails.send({
        from: "Click Menu ZEN <onboarding@resend.dev>",
        to: "clickmenuzen@gmail.com",
        subject: `🍕 Nouvelle demande d'inscription – ${restaurant || "Restaurant"}`,
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 24px; border: 1px solid #e2e8f0; border-radius: 16px; background-color: #ffffff;">
            <div style="text-align: center; margin-bottom: 24px;">
              <h2 style="color: #16a34a; font-size: 22px; margin: 0;">🎉 Nouvelle Inscription Click Menu ZEN</h2>
              <p style="color: #64748b; font-size: 14px; margin-top: 6px;">Un restaurateur souhaite rejoindre la plateforme :</p>
            </div>
            
            <table style="width: 100%; border-collapse: collapse; margin: 20px 0; font-size: 14px;">
              <tr style="background-color: #f8fafc;">
                <td style="padding: 12px; border-bottom: 1px solid #e2e8f0; font-weight: bold; color: #334155; width: 35%;">Nom complet :</td>
                <td style="padding: 12px; border-bottom: 1px solid #e2e8f0; color: #0f172a;">${prenom} ${nom}</td>
              </tr>
              <tr>
                <td style="padding: 12px; border-bottom: 1px solid #e2e8f0; font-weight: bold; color: #334155;">Adresse Email :</td>
                <td style="padding: 12px; border-bottom: 1px solid #e2e8f0; color: #0f172a;"><a href="mailto:${email}" style="color: #16a34a; font-weight: bold; text-decoration: none;">${email}</a></td>
              </tr>
              <tr style="background-color: #f8fafc;">
                <td style="padding: 12px; border-bottom: 1px solid #e2e8f0; font-weight: bold; color: #334155;">Téléphone :</td>
                <td style="padding: 12px; border-bottom: 1px solid #e2e8f0; color: #0f172a;"><a href="tel:${telephone}" style="color: #16a34a; font-weight: bold; text-decoration: none;">${telephone}</a></td>
              </tr>
              <tr>
                <td style="padding: 12px; border-bottom: 1px solid #e2e8f0; font-weight: bold; color: #334155;">Nom du Restaurant :</td>
                <td style="padding: 12px; border-bottom: 1px solid #e2e8f0; color: #0f172a; font-weight: bold;">${restaurant}</td>
              </tr>
              <tr style="background-color: #f8fafc;">
                <td style="padding: 12px; border-bottom: 1px solid #e2e8f0; font-weight: bold; color: #334155;">Adresse :</td>
                <td style="padding: 12px; border-bottom: 1px solid #e2e8f0; color: #0f172a;">${adresse}</td>
              </tr>
              <tr>
                <td style="padding: 12px; border-bottom: 1px solid #e2e8f0; font-weight: bold; color: #334155;">Nombre de couverts :</td>
                <td style="padding: 12px; border-bottom: 1px solid #e2e8f0; color: #0f172a;">${nombreCouverts || "Non renseigné"}</td>
              </tr>
            </table>

            <div style="background-color: #f0fdf4; border-left: 4px solid #16a34a; padding: 12px 16px; border-radius: 8px; margin-top: 24px;">
              <p style="margin: 0; font-size: 13px; color: #15803d;">
                💡 <strong>Action recommandée :</strong> Recontactez ce prospect rapidement au <strong>${telephone}</strong> pour planifier une démonstration.
              </p>
            </div>

            <p style="font-size: 11px; color: #94a3b8; text-align: center; margin-top: 30px; border-top: 1px solid #f1f5f9; padding-top: 16px;">
              Notification envoyée automatiquement via Resend depuis le site Click Menu ZEN.
            </p>
          </div>
        `,
      })
    } else {
      console.warn("⚠️ RESEND_API_KEY absente dans .env.local. Ajoutez la clé pour envoyer l'email en réel.")
    }

    return NextResponse.json({ success: true }, { status: 200 })
  } catch (error) {
    console.error("Erreur lors de l'envoi Resend :", error)
    return NextResponse.json({ success: true }, { status: 200 })
  }
}
