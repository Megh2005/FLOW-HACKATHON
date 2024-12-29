import { Roboto_Slab } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from 'next-themes'
import { Toaster } from 'react-hot-toast'
import { WalletContextProvider } from '@/context/wallet'
import Navbar from './components/Nvbar'

const inter = Roboto_Slab({ weight:["400"], subsets: ['latin'] })

export const metadata = {
  title: 'Ownio - Flow',
  description: 'Ownio - Flow',
  keywords: 'Ownio',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="shortcut icon" href="https://res.cloudinary.com/dg2hsvg8w/image/upload/v1735274620/cadence_pohkhx.png" type="image/x-icon" />
        <link rel="apple-touch-icon" href="https://res.cloudinary.com/dg2hsvg8w/image/upload/v1735274620/flow_odmybv.png" />
      </head>
      <WalletContextProvider>
        <body className={inter.className}>
          <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange>
              <Navbar/>
            {children}
            <Toaster />
          </ThemeProvider>
        </body>
      </WalletContextProvider>
    </html>
  )
}
