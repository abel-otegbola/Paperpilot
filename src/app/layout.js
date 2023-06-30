import './globals.css'
import { Inter } from 'next/font/google'
import Footer from '@/components/footer/page'
import Script from 'next/script'
import Navbar from '@/components/navbar/page'
import AuthProvider from '@/utils/authProvider'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Paperpilot',
  description: 'Research recommendation website',
  keywords: 'Research, Research recommendations, Research papers',
  author: 'Abel Otegbola'
}

export default function RootLayout({ children, session }) {

  return (
    <html lang="en">
      <body className={`${inter.className} text-[13px] mt-[60px] dark:text-white/[0.8] dark:bg-dark`}>
        <AuthProvider session={session}>
            <Navbar />
            {children}
            <Footer />
        </AuthProvider>

        <Script id="darkmode" strategy="afterInteractive">
          {`if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
            document.documentElement.classList.add('dark')
          } else {
            document.documentElement.classList.remove('dark')
          }`}
        </Script>
      </body>
    </html>
  )
}
