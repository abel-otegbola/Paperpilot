'use client'
import DashboardSidebar from "@/components/dashboardSidebar/page";
import { useSession } from "next-auth/react"

export default function RootLayout({ children }) {
    const {data:session} = useSession();

    return (
        <div className="flex min-h-[90vh] gap-2 bg-slate-100 dark:bg-slate-100/[0.05]">
            <DashboardSidebar session={session}/>
            <div className="flex-1">{ children }</div>
        </div>
    )
}