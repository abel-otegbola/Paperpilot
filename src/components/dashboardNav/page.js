'use client'
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import {  FaBars, FaRegPaperPlane, FaUserCircle } from 'react-icons/fa'
import { FiBell, FiFilePlus, FiSettings, FiUser, FiDatabase, FiHome } from 'react-icons/fi'
import { signOut } from "next-auth/react";

const DashboardNav = () => {
    const [open, setOpen] = useState(false)

    return (
        <div className="flex items-center justify-between md:px-[5%] p-4 bg-white dark:bg-transparent">
            <Link href="/" className="flex items-center text-lg font-bold gap-2">
                <Image src="/logo.svg" alt="paperpilot" width={25} height={25} /> 
                <h1 className="flex items-center">Paperpil<FaRegPaperPlane className="bg-primary text-white text-sm p-[2px] rounded-full" />t</h1>
            </Link>


            <div className="flex items-center p-1 pr-4 rounded-[40px] text-slate-500 dark:text-white/[0.8]">
                <Link href="/dashboard/notifications"><FiBell className="text-xl hover:text-primary/[0.6] mr-8" /></Link>
                <Link href="/dashboard/settings"><FiSettings className="text-xl hover:text-primary/[0.6] mr-8"/></Link>
                <div className="flex relative">
                    <div className={`absolute top-[100%] right-0 transition-all duration-700 overflow-hidden z-[10] ${open ? "md:h-0 h-[500px]" : "h-0"}`}>
                        <Sidebar  />
                    </div>
                    <Link href="/dashboard" className="md:block hidden"><FaUserCircle className="text-3xl hover:text-primary/[0.6] text-primary/[0.4] md:mr-0 mr-8"/></Link>
                    <FaBars className="text-3xl p-1 hover:text-primary/[0.6] md:hidden block" onClick={() => setOpen(!open)} />
                </div>
            </div>
        </div>
    )
}

export default DashboardNav;


const Sidebar = () => {
    return (
        <div className="p-4 px-6 rounded shadow-lg bg-white dark:bg-dark rounded min-w-[250px]">
            <Link href="/dashboard" className="flex items-center gap-3 hover:text-primary py-2"><FiHome className="text-lg" /> <p>Dashboard</p></Link>

            <div className="border border-transparent border-t-slate-400/[0.7] border-b-slate-400/[0.7] py-6 mt-6">
                <Link href="/dashboard/recommendations" className="flex items-center gap-3 hover:text-primary py-2"><FiDatabase className="text-lg" /> <p>Manage recommendations</p></Link>
                <Link href="/dashboard/settings" className="flex items-center gap-3 hover:text-primary py-2"><FiUser className="text-lg" /> <p>Profile settings</p></Link>
            </div>

            <button className="p-2 px-4 bg-slate-300/[0.1] rounded-sm hover:bg-primary hover:text-white w-full mt-6 text-left" onClick={() => signOut()}>Logout</button>
        </div>
    )
}