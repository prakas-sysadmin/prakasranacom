import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Prakas Rana',
  description: 'Created by Me',
  generator: 'Prakas Rana',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
