import type { Metadata } from 'next'
import { Inter, JetBrains_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const inter = Inter({
  subsets: ["latin"],
  variable: '--font-inter'
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: '--font-jetbrains-mono'
})

export const metadata: Metadata = {
  title: 'SafeMoon | The True SafeMoon Spirit on Solana',
  description: '100% of creator rewards used for automatic USDC buybacks via pump.fun Agent Mode. The true SafeMoon spirit — now stable on USDC. Built on Solana.',
  keywords: ['safemoon', 'solana', 'usdc', 'buybacks', 'pump.fun', 'agent mode', 'creator rewards', 'memecoin'],
  icons: {
    icon: [
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
    ],
    apple: '/apple-icon.png',
  },
  openGraph: {
    title: 'SafeMoon | The True SafeMoon Spirit on Solana',
    description: '100% creator rewards → automatic USDC buybacks via pump.fun Agent Mode. The true SafeMoon spirit, now stable on USDC.',
    type: 'website',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'SafeMoon on USDC',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SafeMoon | The True SafeMoon Spirit on Solana',
    description: '100% creator rewards → automatic USDC buybacks via pump.fun Agent Mode.',
    images: ['/og-image.png'],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable}`}>
      <body className="font-sans antialiased bg-[#060D1F]">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
