import './globals.css'
import './mdx.css';
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
// import SectionContainer from '@/components/SectionContainer';
import { ThemeProviders } from './theme-providers';

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html className="font-alliance1 antialiased " lang="en">
      <body>
       
      <ThemeProviders>
       <main className=' bg-[#ECEBDA] dark:bg-[#121212]'>
        {children}
        </main> 
     </ThemeProviders>
       
        </body>
    </html>
  )
}
