import 'bootstrap/dist/css/bootstrap.min.css';
import type { Metadata } from 'next'
import './global.css'

export const metadata: Metadata = {
  title: 'Antonio Fernando',
  description: 'Portfolio Antonio Fernando',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  )
}
