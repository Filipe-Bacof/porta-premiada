import './globals.css'
import { ReactNode } from 'react'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Porta Premiada',
  description: 'Desafio de Monty Hall - Porta Premiada - Curso de NextJS',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="pt-br">
      <body className={`${inter.className} bg-[#444] text-white`}>
        {children}
      </body>
    </html>
  )
}
