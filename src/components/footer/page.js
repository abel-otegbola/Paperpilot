import Link from "next/link";
import Image from "next/image";
import {FaFacebookSquare, FaTwitterSquare, FaInstagramSquare, FaRegPaperPlane} from 'react-icons/fa'

const Footer = () => {
    return (
        <div className="flex justify-between flex-wrap md:px-[5%] px-4 py-[40px]">
            <div className="md:w-[30%] my-12">
                <Link href="/" className="flex items-center text-lg font-bold mb-4 gap-2">
                    <Image src="/logo.svg" alt="paperpilot" width={25} height={25} /> 
                    <h1 className="flex items-center">Paperpilot</h1>
                </Link>
                <p className="leading-[25px]">Your Personal Research Recommendation Engine - Get Curated Papers Delivered Straight to Your Inbox!</p>
            </div>

            <ul className="flex flex-col font-semibold md:w-auto sm:w-[50%] my-8 w-full">
                <h2 className="uppercase pb-6">Navigations</h2>
                <li className="py-3 w-full"><Link className="hover:text-primary hover:text-primary w-full py-6" href="/" >Home</Link></li>
                <li className="py-3 w-full"><Link className="hover:text-primary w-full py-6" href="/features" >Features</Link></li>
                <li className="py-3 w-full"><Link className="hover:text-primary w-full py-6" href="/about us" >About us</Link></li>
            </ul>

            <ul className="flex flex-col font-semibold md:w-auto sm:w-[50%] my-8 w-full">
                <h2 className="uppercase pb-6">Customer section</h2>
                <li className="py-3 w-full"><Link className="hover:text-primary hover:text-primary w-full py-6" href="/" >Privacy policy</Link></li>
                <li className="py-3 w-full"><Link className="hover:text-primary w-full py-6" href="/features" >Terms of service</Link></li>
                <li className="py-3 w-full"><Link className="hover:text-primary w-full py-6" href="/papers" >FAQs</Link></li>
                <li className="py-3 w-full"><Link className="hover:text-primary w-full py-6" href="/about us" >Feedbacks & Suggestions</Link></li>
            </ul>

            <ul className="flex flex-col font-semibold md:w-auto sm:w-[50%] my-8 w-full">
                <h2 className="uppercase pb-6">Connect with us on socials</h2>
                <li className="py-3 w-full"><Link className="flex gap-2 hover:text-primary w-full" href="/" ><FaFacebookSquare className="text-xl text-fuchsia-600" /> Facebook</Link></li>
                <li className="py-3 w-full"><Link className="flex gap-2 hover:text-primary w-full" href="/" ><FaTwitterSquare className="text-xl text-fuchsia-600" /> Twitter</Link></li>
                <li className="py-3 w-full"><Link className="flex gap-2 hover:text-primary w-full" href="/" ><FaInstagramSquare className="text-xl text-fuchsia-600" /> Instagram</Link></li>
            </ul>
        </div>
    )
}

export default Footer;