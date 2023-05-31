import 'bulma/css/bulma.css'

export const metadata = {
  title: 'Vendas App',
  description: 'Generated by create next app',
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
