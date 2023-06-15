'use client'
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import {  FaRegPaperPlane, FaUserCircle } from 'react-icons/fa'
import { FiBell, FiFilePlus, FiSettings, FiUserCheck, FiUsers } from 'react-icons/fi'
import { signOut } from "next-auth/react";

const DashboardNav = () => {
    const [open, setOpen] = useState(false)

    return (
        <div className="flex items-center justify-between md:px-[5%] p-4 bg-white dark:bg-transparent">
            <Link href="/" className="flex items-center text-lg font-bold gap-2">
                <Image src="/logo.svg" width={30} height={30} /> 
                <h1 className="flex items-center">Paperpil<FaRegPaperPlane className="bg-primary text-white text-sm p-[2px] rounded-full" />t</h1>
            </Link>


            <div className="flex items-center p-1 pr-4 rounded-[40px] text-slate-500">
                <FiBell className="text-xl hover:text-primary/[0.6] mr-8" />
                <FiSettings className="text-xl hover:text-primary/[0.6] mr-8"/>
                <div className="relative">
                    <div className={`absolute top-[100%] right-0 transition-all duration-700 overflow-hidden ${open ? "h-[500px]" : "h-0"}`}>
                        <Sidebar  />
                    </div>
                    <FaUserCircle className="text-3xl hover:text-primary/[0.6] text-orange-500/[0.4]" onClick={() => setOpen(!open)}/>
                </div>
            </div>
        </div>
    )
}

export default DashboardNav;


const Sidebar = () => {
    return (
        <div className="p-4 px-6 rounded shadow-lg bg-white dark:bg-dark rounded min-w-[250px]">
            <h3 className="opacity-[0.6] py-2">Profile settings</h3>
            <Link href="/profile" className="py-2 hover:text-primary">View profile</Link>

            <div className="border border-transparent border-t-slate-400/[0.7] border-b-slate-400/[0.7] py-6 mt-6">
                <Link href="/papers" className="flex items-center gap-3 hover:text-primary py-2"><FiFilePlus className="text-lg" /> <p>Explore research papers</p></Link>
                <Link href="/papers" className="flex items-center gap-3 hover:text-primary py-2"><FiUserCheck className="text-lg" /> <p>Manage recommendations</p></Link>
                <Link href="/papers" className="flex items-center gap-3 hover:text-primary py-2"><FiUsers className="text-lg" /> <p>Invite members</p></Link>
            </div>

            <button className="p-2 bg-slate-300/[0.1] rounded-sm hover:bg-primary hover:text-white w-full mt-6 text-left" onClick={() => signOut()}>Logout</button>
        </div>
    )
}