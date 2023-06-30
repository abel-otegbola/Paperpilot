'use client'
import Link from "next/link";
import Image from "next/image";
import { FaBars } from 'react-icons/fa'
import { signOut, useSession } from "next-auth/react";
import { useState } from "react";
import { FiHome, FiInfo, FiPackage, FiSettings } from "react-icons/fi";
import { usePathname } from "next/navigation";
import Button from "../button/button";

const Navbar = () => {
    const {data: session} = useSession()
    const [open, setOpen] = useState(false)
    const pathname = usePathname()


    return (
        <div className="fixed top-0 left-0 w-full bg-white dark:bg-dark shadow flex items-center z-[100] justify-between px-[5%] md:p-2">
            <Link href="/" className="flex items-center text-lg font-semibold gap-2">
                <Image src="/logo.svg" alt="paperpilot" width={30} height={30} /> 
                <h1 className="flex items-center font-sans">Paperpilot</h1>
            </Link>

            <ul className="md:flex hidden md:items-center justify-center md:flex-row flex-col font-semibold">
                <li><Link className={`px-6 py-2 ${pathname === "/" ? "text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-600 to-primary" : "dark:text-white/[0.7]"}`} href="/" >Home</Link></li>
                <li><Link className={`px-6 py-2 ${pathname === "features" ? "text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-600 to-primary" : "dark:text-white/[0.7]"}`} href="/features" >Features</Link></li>
                <li><Link className={`px-6 py-2 ${pathname === "about" ? "text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-600 to-primary" : "dark:text-white/[0.7]"}`} href="/about" >About us</Link></li>
            </ul>

                <div className="md:flex items-center hidden gap-2">
            {
                session ?
                    <Button link={"/dashboard"} text={"Dashboard"} type={"primary"} />
                :        
                    <>
                        <Button link={"/login"} text={"Sign in"} type={"secondary"} />
                        <Button link={"/signup"} text={"Create an account"} type={"primary"} />
                    </>
            }
                </div>

                <div className="flex relative md:hidden">
                    <div className={`absolute top-[100%] right-0 transition-all duration-700 overflow-hidden z-[10] ${open ? "md:h-0 h-[500px]" : "h-0"}`}>
                        <Sidebar session={session} />
                    </div>
                    <FaBars className="text-3xl p-1 hover:text-primary/[0.6]" onClick={() => setOpen(!open)} />
                </div>
        </div>
    )
}

export default Navbar;

const Sidebar = ({session}) => {
    return (
        <div className="p-4 px-6 rounded shadow-lg bg-white dark:bg-dark z-[100] rounded min-w-[250px]">
            <Link href="/dashboard" className={`flex items-center gap-3 hover:text-primary py-2 ${session ? "flex" : "hidden"}`}><FiHome className="text-lg opacity-[0.6]" /> <p>Dashboard</p></Link>

            <div className="border border-transparent border-t-slate-400/[0.7] border-b-slate-400/[0.7] py-4 mt-4">
                <Link href="/" className="flex items-center gap-3 hover:text-primary py-2"><FiHome className="text-lg opacity-[0.5]" /> <p>Home</p></Link>
                <Link href="/features" className="flex items-center gap-3 hover:text-primary py-2"><FiPackage className="text-lg opacity-[0.5]" /> <p>Features</p></Link>
                <Link href="/about" className="flex items-center gap-3 hover:text-primary py-2"><FiInfo className="text-lg opacity-[0.5]" /> <p>About us</p></Link>
                <Link href="/dashboard/settings" className="flex items-center gap-3 hover:text-primary py-2"><FiSettings className="text-lg opacity-[0.5]" /> <p>Settings</p></Link>
            </div>

            <div className="mt-3 flex">
            {
                session ?
                <Button link={"#"} role={"logout"} text={"Logout"} type={"secondary"} />
                :
                <Button link={"/signup"} text={"Create an account"} type={"primary"} />

            }
            </div>
        </div>
    )
}