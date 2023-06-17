import Link from "next/link";
import { usePathname } from "next/navigation";
import { FiBookOpen, FiHome, FiPaperclip, FiSettings, FiUser } from "react-icons/fi";

const DashboardSidebar = () => {
    const links = [
        { id: 0, title: 'Dashboard', icon: <FiHome className="text-xl opacity-[0.7]" /> },
        { id: 1, title: 'Research papers', icon: <FiBookOpen className="text-xl opacity-[0.7]" /> },
        { id: 2, title: 'Recommendations', icon: <FiPaperclip className="text-xl opacity-[0.7]" /> },
    ]
    const links2 = [
        { id: 0, title: 'Profile', icon: <FiUser className="text-xl opacity-[0.7]" /> },
        { id: 1, title: 'Settings', icon: <FiSettings className="text-xl opacity-[0.7]" /> },
    ]
    const pathname = usePathname()

    return (
        <div className="lg:w-[300px] w-[230px] bg-whtie dark:bg-dark">
            <ul className="md:px-[12%] p-4 border border-transparent border-b-slate-500/[0.3]">
                {
                    links.map(link => (
                        <li key={link.id} className="flex w-full px-3 py-1">
                            <Link href={link.title.toLowerCase()} className={`flex items-center gap-4 w-full p-4 px-5 hover:bg-primary hover:text-white rounded ${pathname.indexOf(link.title.toLowerCase()) !== -1 ? "bg-primary text-white" : ""}`}>
                                {link.icon}
                                <p>{link.title}</p>
                            </Link>
                        </li>
                    ))
                }
            </ul>
            
            <ul className="md:px-[12%] p-4 border border-transparent border-b-slate-500/[0.3]">
                {
                    links2.map(link => (
                        <li key={link.id} className="flex w-full px-3 py-1">
                            <Link href={link.title.toLowerCase()} className={`flex items-center gap-4 w-full p-4 px-5 hover:bg-primary hover:text-white rounded ${pathname.indexOf(link.title.toLowerCase()) !== -1 ? "bg-primary text-white" : ""}`}>
                                {link.icon}
                                <p>{link.title}</p>
                            </Link>
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}

export default DashboardSidebar;