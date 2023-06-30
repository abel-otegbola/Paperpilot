import { useSession } from "next-auth/react";
import Link from "next/link";
import { FiDatabase, FiHome, FiInfo, FiPackage, FiUser } from "react-icons/fi";
import Button from "../button/button";

const NavMenu = () => {
    const {data: session} = useSession()

    return (
        <div className="p-4 px-6 rounded shadow-lg bg-white dark:bg-dark rounded min-w-[250px]">
            <Link href="/dashboard" className={`flex items-center gap-3 hover:text-primary py-2 ${session ? "" : "hidden"}`}><FiHome className="text-lg" /> <p>Dashboard</p></Link>

            <div className="border border-transparent border-y-slate-400/[0.7] py-6 my-6">
                <Link href="/features" className="flex items-center gap-3 hover:text-primary py-2"><FiPackage className="text-lg opacity-[0.5]" /> <p>Features</p></Link>
                <Link href="/about" className="flex items-center gap-3 hover:text-primary py-2"><FiInfo className="text-lg opacity-[0.5]" /> <p>About us</p></Link>
                { 
                session ?
                    <>
                        <Link href="/dashboard/recommendations" className="flex items-center gap-3 hover:text-primary py-2">
                            <FiDatabase className="text-lg opacity-[0.5]" /> 
                            <p>Manage recommendations</p>
                        </Link>
                    </> 
                :
                "" 
                }
            </div>

            <Button link={session ? "#" : "/signup"} role={session ? "logout" : null} text={session ? "Logout" : "Create an account"} type={"primary"} />
        </div>
    )
}

export default NavMenu;