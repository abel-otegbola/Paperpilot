'use client'
import Link from "next/link";
import Image from "next/image";
import { FaBars, FaUserCircle } from 'react-icons/fa'
import { signOut, useSession } from "next-auth/react";
import { useState } from "react";
import { FiHome, FiInfo, FiPackage, FiSettings } from "react-icons/fi";

const Navbar = () => {
    const {data: session} = useSession()
    const [open, setOpen] = useState(false)

    // useEffect(() => {
    //     window.onload = () => {
    //         google.accounts.id.initialize({
    //             client_id: "",
    //             callback: handleCredentialResponse
    //         })
    //         google.accounts.id.prompt();
    //     }
    // }, [])

    return (
        <div className="flex items-center justify-between md:px-[5%] p-4">
            <Link href="/" className="flex items-center text-lg font-semibold gap-2">
                <Image src="/logo.svg" alt="paperpilot" width={30} height={30} /> 
                <h1 className="flex items-center font-sans">Paperpilot</h1>
            </Link>

            <ul className="md:flex hidden md:items-center justify-center md:flex-row flex-col font-semibold">
                <li><Link className="text-primary hover:text-primary px-6 py-2" href="/" >Home</Link></li>
                <li><Link className="hover:text-primary px-6 py-2" href="/features" >Features</Link></li>
                <li><Link className="hover:text-primary px-6 py-2" href="/about us" >About us</Link></li>
            </ul>

            {
                session ?
                <Link className="md:block hidden px-[30px] py-[10px] rounded bg-gradient-to-b from-fuchsia-600 to-primary text-white" href="/dashboard">Dashboard</Link> 
                :        
                <div className="md:flex items-center hidden gap-2">
                    <Link className="px-6 py-[10px] rounded text-primary bg-primary/[0.1] border border-primary" href="/login">Sign in</Link>
                    <Link className="px-[30px] py-[10px] rounded bg-gradient-to-b from-fuchsia-600 to-primary text-white border border-primary" href="/signup">Create an account</Link>
                </div>
            }

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
        <div className="p-4 px-6 rounded shadow-lg bg-white dark:bg-dark rounded min-w-[250px]">
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
                <button className={`p-2 px-4 bg-slate-300/[0.1] rounded-sm bg-gradient-to-b from-fuchsia-600 to-primary hover:bg-primary hover:text-white w-full mt-6 text-left`} onClick={() => signOut()}>Logout</button>
                :
                <Link href="/signup" className={`p-[10px] px-4 bg-slate-300/[0.1] rounded bg-gradient-to-b from-fuchsia-600 to-primary text-white hover:bg-primary hover:text-white w-full text-left`}>Create an account</Link>

            }
            </div>
        </div>
    )
}