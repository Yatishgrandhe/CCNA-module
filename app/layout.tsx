import type { Metadata, Viewport } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: '🎯 CCNA Quiz - Interactive Networking Challenge',
  description: 'Master CCNA networking concepts with this interactive quiz game. Test your knowledge with 69+ questions covering OSI layers, networking media, and data link protocols.',
  keywords: 'CCNA, networking, quiz, interactive, OSI, data link, switching, cabling',
  authors: [{ name: 'CCNA Quiz Team' }],
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="icon" href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>🎯</text></svg>" />
      </head>
      <body className="font-body antialiased bg-gimkit-bg text-gimkit-text-dark">
        <div className="min-h-screen">
          {children}
        </div>
      </body>
    </html>
  )
}
