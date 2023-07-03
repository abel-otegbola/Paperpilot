'use client'
import Link from "next/link";
import Image from "next/image";
import { FaBars, FaUserCircle } from 'react-icons/fa'
import { useSession } from "next-auth/react";
import { useEffect, useRef, useState } from "react";
import { FiBell, FiSettings } from "react-icons/fi";
import { usePathname } from "next/navigation";
import Button from "../button/button";
import NavMenu from "../navMenu/navMenu";
import { closeBlock } from "@/utils/closeBlock";

const Navbar = () => {
    const {data: session} = useSession()
    const [open, setOpen] = useState(false)
    const pathname = usePathname()
    const menuRef = useRef(null)

    // Close navbar when clicked outside
    useEffect(() => {
        closeBlock(menuRef, open, setOpen)
    }, [open])


    return (
        <div className="fixed top-0 left-0 w-full bg-white dark:bg-dark shadow flex items-center z-[100] justify-between px-[5%] py-4">
            <Link href="/" className="flex items-center text-lg font-semibold gap-2">
                <Image src="/logo.svg" alt="paperpilot" width={30} height={30} /> 
                <h1 className="flex items-center font-sans">Paperpilot</h1>
            </Link>

            <ul className="md:flex hidden md:items-center justify-center md:flex-row flex-col font-semibold">
                <li><Link className={`px-6 py-2 ${pathname === "/" ? "text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-600 to-primary" : "dark:text-white/[0.7]"}`} href="/" >Home</Link></li>
                <li><Link className={`px-6 py-2 ${pathname === "/features" ? "text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-600 to-primary" : "dark:text-white/[0.7]"}`} href="/features" >Features</Link></li>
                <li><Link className={`px-6 py-2 ${pathname === "/about" ? "text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-600 to-primary" : "dark:text-white/[0.7]"}`} href="/about" >About us</Link></li>
            </ul>

            <div className="flex items-center gap-2">
                        <Link href="/settings"><FiSettings className="text-xl mr-4 text-slate-500 dark:text-white/[0.8] hover:text-primary/[0.6]"/></Link>
                {
                    session ?
                        <Link href="/dashboard"><FaUserCircle className="text-2xl text-slate-500 dark:text-white/[0.8] hover:text-primary/[0.6] md:mr-0"/></Link>
                    :        
                        <div className="md:flex hidden items-center gap-2">
                            <Button link={"/login"} text={"Sign in"} type={"secondary"} />
                            <Button link={"/signup"} text={"Create an account"} type={"primary"} />
                        </div>
                }

                <div ref={menuRef} className="flex relative md:hidden">
                    <div className={`absolute top-[100%] right-0 transition-all duration-700 overflow-hidden z-[10] ${open ? "md:h-0 h-[500px]" : "h-0"}`}>
                        <NavMenu />
                    </div>
                    <FaBars className="text-xl hover:text-primary/[0.6] ml-3" onClick={() => setOpen(!open)} />
                </div>
            </div>
        </div>
    )
}

export default Navbar;
