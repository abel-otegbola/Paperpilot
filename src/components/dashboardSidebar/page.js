import { signOut } from "next-auth/react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FiBell, FiBook, FiHome, FiLogOut, FiSettings } from "react-icons/fi";

const DashboardSidebar = ({ session }) => {
    const links = [
        { id: 0, title: 'Dashboard', to: "/dashboard", icon: <FiHome className="text-xl opacity-[0.7]" /> },
        { id: 1, title: 'Recommendations', to: "/dashboard/recommendations", icon: <FiBook className="text-xl opacity-[0.7]" /> },
        { id: 2, title: 'Notifications', to: "/dashboard/notifications", icon: <FiBell className="text-xl opacity-[0.7]" /> },
    ]
    const links2 = [
        { id: 0, title: 'Settings', to: "/dashboard/settings", icon: <FiSettings className="text-xl opacity-[0.7]" /> },
        { id: 1, title: 'Logout', to: "#", icon: <FiLogOut className="text-xl opacity-[0.7]" /> },
    ]
    const pathname = usePathname()

    return (
        <div className="md:flex top-2 h-screen flex-col justify-between hidden w-[300px] bg-white dark:bg-dark">
            <div>
                <ul className="md:px-[8%] p-4 border border-transparent border-b-slate-500/[0.3]">
                    {
                        links.map(link => (
                            <li key={link.id} className="flex w-full px-3 py-1">
                                <Link href={link.to} className={`flex items-center gap-4 w-full p-4 px-7 hover:bg-primary hover:text-white rounded ${pathname === link.to ? "bg-primary text-white" : ""}`}>
                                    {link.icon}
                                    <p>{link.title}</p>
                                </Link>
                            </li>
                        ))
                    }
                </ul>
                
                <ul className="md:px-[8%] p-4 border border-transparent border-b-slate-500/[0.3]">
                    {
                        links2.map(link => (
                            <li key={link.id} className="flex w-full px-3 py-1">
                                <Link href={link.to} onClick={() => link.title === 'Logout' ? signOut() : ""} className={`flex items-center gap-4 w-full p-4 px-7 hover:bg-primary hover:text-white rounded ${pathname === link.to ? "bg-primary text-white" : ""}`}>
                                    {link.icon}
                                    <p>{link.title}</p>
                                </Link>
                            </li>
                        ))
                    }
                </ul>
            </div>
            {
                session && 
                <div className="flex md:px-[12%] m-4 p-2 bg-slate-300/[0.3] gap-4 border border-slate-500/[0.3] rounded">
                    <div>
                        {
                            session.user.image ? 
                                <img src={session.user.image} alt="user" className="rounded-full w-[35px] h-[35px] border border-primary" /> 
                            :
                            <p className="p-2 text-lg bg-slate-200 dark:bg-slate-200/[0.3] rounded-full">a</p>
                        }
                    </div>
                    <div>
                        <h2>{session.user.name}</h2>
                        <p className="text-[10px] opacity-[0.7]">{session.user.email}</p>
                    </div>
                </div>
            }
        </div>
    )
}

export default DashboardSidebar;