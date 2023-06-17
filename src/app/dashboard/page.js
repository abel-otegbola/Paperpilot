'use client'
import DashboardSidebar from "@/components/dashboardSidebar/page";
import { useSession } from "next-auth/react"

const Dashboard = () => {
    const {data:session} = useSession();

    return (
        <div className="flex gap-2 bg-slate-100 dark:bg-slate-100/[0.3]">
            <DashboardSidebar />
            <div></div>
            <p>welcome {session && session.user.email}</p>
        </div>
    )
}

export default Dashboard;