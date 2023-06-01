"use client";
import 'bulma/css/bulma.css'
import Head from 'next/head';

export const metadata = {
  title: 'Vendas App',
  description: 'Aplicativo de vendas',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head />
      <body >
        {children}
      </body>
    </html>
  )
}
