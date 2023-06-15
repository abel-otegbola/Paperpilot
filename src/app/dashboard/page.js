'use client'
const { useSession } = "next-auth/react"

const Dashboard = () => {
    const {data:session} = useSession();

    return (
        <div className="px-[5%]">
            <p>welcome {session.user.email}</p>
        </div>
    )
}

export default Dashboard;