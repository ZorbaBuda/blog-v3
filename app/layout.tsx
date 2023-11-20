import './globals.scss'
// import './mdx.css';
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { ThemeProviders } from './theme-providers';
import TwSizeIndicator from '@/components/helpers/TwSizeIndicator';


const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Neuro Primal',
  description: 'Resúmenes, ideas, textos...',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html className="font-roboto antialiased" lang="es" suppressHydrationWarning >
  
      <body >
       
      <ThemeProviders>
         <TwSizeIndicator/>
       <main className=' bg-white dark:bg-[#121212] text-black dark:text-white'>
        {children}
        </main> 
     </ThemeProviders>
       
        </body>
       
    </html>
  )
}
