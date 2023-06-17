import './globals.css'
import { Inter } from 'next/font/google'
import Footer from '@/components/footer/page'
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
      <body className={`${inter.className} text-[13px] dark:text-white/[0.8] dark:bg-dark`}>
        <AuthProvider session={session}>
            
            {children}
            <Footer />
        </AuthProvider>
      </body>
    </html>
  )
}
