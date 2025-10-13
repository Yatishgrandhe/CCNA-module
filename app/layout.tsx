import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: '🎯 CCNA Quiz - Interactive Networking Challenge',
  description: 'Master CCNA networking concepts with this interactive quiz game. Test your knowledge with 69+ questions covering OSI layers, networking media, and data link protocols.',
  keywords: 'CCNA, networking, quiz, interactive, OSI, data link, switching, cabling',
  authors: [{ name: 'CCNA Quiz Team' }],
  viewport: 'width=device-width, initial-scale=1',
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
      <body className="font-body antialiased">
        <div className="min-h-screen relative overflow-hidden">
          {/* Animated background elements */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute -top-40 -right-40 w-80 h-80 bg-gimkit-primary/20 rounded-full blur-3xl animate-float"></div>
            <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gimkit-secondary/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gimkit-accent/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
          </div>
          
          {/* Main content */}
          <div className="relative z-10">
            {children}
          </div>
        </div>
      </body>
    </html>
  )
}
