'use client'
import { useState } from "react";
import { CgSpinner } from "react-icons/cg";
import { useRouter } from "next/navigation";
import { FaEye, FaEyeSlash, FaGithub, FaTimesCircle } from "react-icons/fa";
import { FcGoogle } from 'react-icons/fc'
import Image from "next/image";
import { signIn } from "next-auth/react"
import Link from "next/link";

export default function Signup() {
    const [loading, setLoading] = useState(false)
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState("")
    const [success, setSuccess] = useState("")
    const [show, setShow] = useState(false)
    const router = useRouter()

    
    const submitForm = async (e) => {
        setLoading(true)
        await signIn("credentials", { redirect: false, email, password, callbackUrl: `/dashboard` })
        .then(res => {
            if(res.ok) {
                setSuccess("Login successful")
                router.push(res.url)
            }
            else {
                setError(res.error)
            }
        })
        .catch(error => console.log(error))
        setLoading(false)
    }

    return (
        <div className="px-[5%] sm:py-[2%] dark:bg-gray-900">
            <div className="flex">
                
                <div className="w-[50%] md:block hidden overflow-hidden relative bg-gray-800/[0.1]">
                    <Image src="/woman_researcher.png" alt="researcher" className="object-cover" fill={true}/>
                </div>
                <div className="p-[20px] md:w-[50%] w-full md:px-[12%] md:py-[7%] py-[80px] bg-slate-100 dark:bg-gray-800 rounded">
                    
                    <Image src="/logo.svg" alt="paperpilot" width={30} height={30} /> 
                    <h1 className="py-3 text-primary text-2xl font-bold">Welcome!</h1>
                    <p className="pb-2">Sign in to create and manage your recommendations</p>

                    
                    <div className="py-[10px] gap-3">
                        {
                            [{key: 1, id: "google", name: "Google"}, {key: 2, id: "github", name: "Github"}].map((provider) => ( 
                                <a key={provider.key} onClick={() => signIn(provider.id, {callbackUrl: `${window.location.origin}/dashboard`})} className="flex items-center justify-center bg-white dark:bg-gray-900 cursor-pointer p-[10px] my-2 rounded border border-gray-400">
                                    { provider.name === "Google" ? <FcGoogle className="mr-2" />: <FaGithub className="mr-2" /> } 
                                    Signin with {provider.name}
                                </a>
                            ))
                        }
                    </div>

                    <p className="font-bold text-purple-500 text-center my-2">OR</p>

                    {/* Show success message */}
                    { success !== "" ? <p className="my-2 text-green-500 p-4 text-center flex justify-between items-center rounded bg-green-400/[0.1]">{success}<FaTimesCircle onClick={() => setSuccess("")}/></p> : "" }
                    { error !== "" ? <p className="my-2 text-red-500 p-4 text-center flex justify-between items-center rounded bg-red-400/[0.1]">{error}<FaTimesCircle onClick={() => setError("")} /></p> : "" }
                    

                    <label className="mb-2" htmlFor="email" >Email Address:</label>
                    <input type="email" id="email" name="email" placeholder="e.g Johndoe@gmail.com" onChange={(e) => setEmail(e.target.value)}  className="w-full rounded border border-gray-500/[0.2] mt-2 mb-3 p-[10px] focus:outline-2 focus:outline-primary hover:border-primary dark:bg-gray-900" />
                    

                    <label className="mb-2">Password:</label>
                    <div className="flex items-center w-full rounded border border-gray-500/[0.2] mb-7 mt-2">
                        <input type={show ? "text" : "password"} onChange={(e) => setPassword(e.target.value)} className="w-full rounded border border-gray-500/[0.2] p-[10px] focus:outline-2 focus:outline-primary hover:border-primary dark:bg-gray-900" />
                        <div className="p-2 px-3 text-gray-500" onClick={() => setShow(!show)}>
                            {show ? <FaEyeSlash/> : <FaEye />}
                        </div>
                    </div>

                    <button type="submit" onClick={(e) => submitForm(e)} className={`flex justify-between items-center bg-gradient-to-b from-fuchsia-600 to-primary hover:bg-secondary text-white rounded my-[20px] p-3 w-full`}><span className="flex-1 text-center">Sign in</span>{loading ? <CgSpinner className="animate-spin" /> : ""} </button>
                    <div className="mt-2 flex flex-col gap-2">
                        <p className="">Don&apos;t have an Account?</p>
                        <Link href="/signup" className="p-[10px] rounded border border-primary text-center w-100"> Signup</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
