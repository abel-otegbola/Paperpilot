'use client'
import { useSession } from "next-auth/react"

const Dashboard = () => {
    const {data:session} = useSession();

    return (
        <div className="px-[5%]">
            <p>welcome {session && session.user.email}</p>
        </div>
    )
}

export default Dashboard;