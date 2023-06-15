'use client'
import Navbar from '@/components/navbar/page'
import './globals.css'
import { Inter } from 'next/font/google'
import Footer from '@/components/footer/page'
import { usePathname } from 'next/navigation'
import { SessionProvider } from "next-auth/react";
import DashboardNav from '@/components/dashboardNav/page'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Paperpilot',
  description: 'Research recommendation website',
  keywords: 'Research, Research recommendations, Research papers',
  author: 'Abel Otegbola'
}

export default function RootLayout({ children, session }) {
  const pathname = usePathname();

  return (
    <html lang="en">
      <body className={`${inter.className} text-[12px] dark:text-white/[0.8] dark:bg-dark`}>
        <SessionProvider session={session}>
            {
            pathname.indexOf("dashboard") !== -1 ? 
            <DashboardNav />
            :
            <Navbar />
            }
            {children}
            <Footer />
        </SessionProvider>
      </body>
    </html>
  )
}
