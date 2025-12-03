import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'AlfredAI - Your AI Partner for Business Growth',
  description: 'Create automation systems powered by knowledge management infrastructure to protect margins, scale expertise, and lift EBITDA.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>{children}</body>
    </html>
  )
}