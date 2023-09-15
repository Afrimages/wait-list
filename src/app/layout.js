import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Afrimages',
  description: 'Join our waitlist to receive exclusive updates on the build progress.',
}

export default function RootLayout({ children }) {
  return (
    <>
      {/* <meta> */}
        {/* <link rel="preconnect" href="https://fonts.googleapis.com"></link>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin></link>
        <link href="https://fonts.googleapis.com/css2?family=Roboto&display=swap" rel="stylesheet"></link>
      </meta> */}

      <html lang="en">
        <body className={inter.className}>{children}</body>
      </html>
    </>
  )
}
