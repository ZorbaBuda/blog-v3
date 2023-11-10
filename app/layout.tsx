import './globals.css'
// import './mdx.css';
import './bgPatterns.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
// import SectionContainer from '@/components/SectionContainer';
import { ThemeProviders } from './theme-providers';
// bg-[#ECEBDA]

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
    <html className="font-roboto antialiased " lang="en">
      <body>
       
      <ThemeProviders>
       <main className=' bg-white dark:bg-[#121212] text-black dark:text-white'>
        {children}
        </main> 
     </ThemeProviders>
       
        </body>
    </html>
  )
}
