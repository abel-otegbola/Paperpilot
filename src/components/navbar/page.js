'use client'
import Link from "next/link";
import Image from "next/image";
import { FaRegPaperPlane } from 'react-icons/fa'
import { useSession } from "next-auth/react";

const Navbar = () => {
    const {data: session} = useSession()

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
            <Link href="/" className="flex items-center text-lg font-bold gap-2">
                <Image src="/logo.svg" alt="paperpilot" width={25} height={25} /> 
                <h1 className="flex items-center">Paperpil<FaRegPaperPlane className="bg-primary text-white text-sm p-[2px] rounded-full" />t</h1>
            </Link>

            <ul className="md:flex hidden md:items-center justify-center md:flex-row flex-col font-semibold">
                <li><Link className="text-primary hover:text-primary px-6 py-2" href="/" >Home</Link></li>
                <li><Link className="hover:text-primary px-6 py-2" href="/features" >Features</Link></li>
                <li><Link className="hover:text-primary px-6 py-2" href="/papers" >Papers</Link></li>
                <li><Link className="hover:text-primary px-6 py-2" href="/about us" >About us</Link></li>
                <li><Link className="hover:text-primary px-6 py-2" href="/contact" >Contact</Link></li>
            </ul>

                {
                    session ?
                    <Link className="px-[30px] py-[12px] rounded bg-gradient-to-b from-secondary to-primary text-white" href="/dashboard">Dashboard</Link> 
                    :        
                    <div className="flex items-center">
                        <Link className="px-6" href="/login">Login</Link>
                        <Link className="px-[30px] py-[12px] rounded bg-gradient-to-b from-secondary to-primary text-white" href="/signup">Sign up</Link>
                    </div>
            }
        </div>
    )
}

export default Navbar;