import React from "react"
import type { Metadata } from 'next'
import { Poppins, Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const _poppins = Poppins({ 
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins"
});

const _inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter"
});

export const metadata: Metadata = {
  title: 'Click Menu ZEN – Commandez vos repas en un clic',
  description: 'Menus digitaux, commandes rapides et gestion simplifiée pour restaurants et hôtels. Digitalisez votre restaurant avec Click Menu ZEN.',
  icons: {
    icon: '/transparent-logo.png',
    apple: '/transparent-logo.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
