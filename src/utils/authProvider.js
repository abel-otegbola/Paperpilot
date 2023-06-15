'use client'
import DashboardNav from "@/components/dashboardNav/page";
import Navbar from "@/components/navbar/page";
import { SessionProvider } from "next-auth/react";
import { usePathname } from 'next/navigation'

const AuthProvider = ({ children, session }) => {
    const pathname = usePathname();

    return (
        <SessionProvider session={session}>{
            pathname.indexOf("dashboard") !== -1 ? 
            <DashboardNav />
            :
            <Navbar />
            }
            {children}
        </SessionProvider>
    )
}

export default AuthProvider;