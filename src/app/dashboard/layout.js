'use client'
import DashboardSidebar from "@/components/dashboardSidebar/page";
import axios from "axios";
import { useSession } from "next-auth/react"
import { createContext, useEffect, useState } from "react"

export const UserContext = createContext()

export default function RootLayout({ children }) {
    const {data:session} = useSession();
    const [userData, setUserData] = useState([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(false)

    const getData = async () => {
        const res = await axios.get(`/api/getRecommendations/${session?.user.email}`)
        // Recommendation: handle errors
        .catch(err => {
            setError('Failed to fetch data')
            setLoading(false)
            setError("")
            throw new Error("Failed to fetch data")
        })
        setLoading(false)
        return setUserData(res.data)
    }

    useEffect(() => {
        if(session) {
            getData()
        }
        else {
            setLoading(true)
        }
    }, [session])

    return (
        <UserContext.Provider value={{userData, loading, error}}>
            <div className="flex min-h-[90vh] gap-2 bg-slate-100 dark:bg-slate-100/[0.05]">
                <DashboardSidebar session={session}/>
                <div className="flex-1">{ children }</div>
            </div>
        </UserContext.Provider>
    )
}