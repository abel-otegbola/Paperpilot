'use client'
import { useState } from "react";
import { CgSpinner } from "react-icons/cg";
import { useRouter } from "next/navigation";
import { FaGithub } from "react-icons/fa";
import { FcGoogle } from 'react-icons/fc'
import Image from "next/image";
import { signIn } from "next-auth/react"

export default function Signup() {
    const [loading, setLoading] = useState(false)
    const [email, setEmail] = useState("")
    const [error, setError] = useState("")
    const [success, setSuccess] = useState("")
    const router = useRouter()

    const submitForm = async (e) => {
        e.preventDefault();
        let valid = true
        if (!valid) {
            setLoading(true);
            await fetch(`/api/auth/signup`, {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ fullname, email, password })
            })
            .then(res => res.json())
            .then(data => {
                if(data.error) {
                    setError(data.error)
                }
                else {
                    setSuccess("User created successfully")
                    router.push("/login")
                }
                setLoading(false)
            })
            .catch(err => {
                console.log(err)
                setLoading(false)
            }) 
            
        }
        else {
            setError(valid)
        }
    }

    return (
        <div className="md:px-[5%] sm:py-[5%] dark:bg-gray-900">
            <div className="flex">
                
                <div className="w-[50%] md:block hidden overflow-hidden relative bg-gray-800/[0.1]">
                    <Image src="/woman_researcher.png" alt="researcher" className="object-cover" fill={true}/>
                </div>
                <div className="p-[20px] md:w-[50%] w-full md:px-[7%] md:py-[4%] py-[80px] bg-slate-100 dark:bg-gray-800 rounded" method="post">
                    
                    <Image src="/logo.svg" alt="paperpilot" width={30} height={30} /> 
                    <h1 className="py-6 text-primary text-2xl font-bold">Welcome!</h1>
                    <p className="pb-5">Sign in to create and manage your recommendations</p>

                    
                    <div className="py-[30px] gap-3 mb-4">
                        {
                            [{key: 1, id: "google", name: "Google"}, {key: 2, id: "github", name: "Github"}].map((provider) => ( 
                                <a key={provider.key} onClick={() => signIn(provider.id, {callbackUrl: `${window.location.origin}/dashboard`})} className="flex items-center justify-center bg-white dark:bg-gray-900 cursor-pointer p-3 my-2 rounded border border-gray-400">
                                    { provider.name === "Google" ? <FcGoogle className="mr-2" />: <FaGithub className="mr-2" /> } 
                                    Signin with {provider.name}
                                </a>
                            ))
                        }
                    </div>

                    <p className="text-lg text-center mb-4">OR</p>

                    <div className={`transition-all duration-700 overflow-hidden`}>
                        <label className="ml-2 break-none" htmlFor="email" >Email Address:</label>
                        <input type="email" id="email" name="email" placeholder="e.g Johndoe@gmail.com" onChange={(e) => actions.setEmail(e.target.value)}  className="w-full rounded border border-gray-500/[0.2] mt-2 mb-8 p-[12px] focus:outline-2 focus:outline-primary hover:border-primary dark:bg-gray-900" />
                    </div>

                    <button type="submit" onClick={(e) => submitForm(e)} className="flex justify-center items-center p-[13px] w-full bg-primary hover:bg-secondary text-white rounded my-[30px] transition-all duration-700">{loading ? <CgSpinner className="animate-spin" /> : ""} Sign in</button>
                    <div className="my-10 flex flex-wrap justify-between">
                        <p>Don't have an Account? <a href="/signup" className="text-primary mt-3">Signup</a></p>
                    </div>
                </div>
            </div>
        </div>
    )
}
