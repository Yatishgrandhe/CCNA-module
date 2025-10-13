import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Gimkit CCNA Quiz',
  description: 'Test your CCNA knowledge with this interactive quiz game',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-gradient-to-br from-gimkit-blue via-gimkit-purple to-gimkit-green">
        {children}
      </body>
    </html>
  )
}
