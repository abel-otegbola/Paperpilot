'use client'

import { useState } from "react";
import { CgSpinner } from "react-icons/cg";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { FaCheck } from "react-icons/fa";
import Link from "next/link";

export default function Signup() {
    const [loading, setLoading] = useState(false)
    const [fullname, setFullname] = useState("")
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
                <div className="w-[50%] overflow-hidden md:block hidden relative bg-gray-800/[0.1]">
                    <Image src="/woman_researcher.png" alt="researcher" className="object-cover" fill={true}/>
                </div>
                <div className="p-[20px] md:w-[50%] w-full md:px-[7%] md:py-[4%] py-[80px] bg-slate-100 dark:bg-gray-800 rounded" method="post">
                    
                    <Image src="/logo.svg" alt="paperpilot" width={30} height={30} /> 
                    <h1 className="py-4 text-primary text-2xl font-bold">Create Your Account</h1>
                    <p className="pb-5">Sign up to create and manage your recommendations</p>
                    
                    <div className={`transition-all duration-700 overflow-hidden`}>
                        <label className="ml-2" htmlFor="fullname" >Full Name:</label>
                        <input type="text" id="fullname" name="fullname" placeholder="e.g John Doe" onChange={(e) => setFullname(e.target.value)} className=" w-full rounded border border-gray-500/[0.2] mt-2 mb-4 p-[12px] focus:outline-2 focus:outline-primary hover:border-primary dark:bg-gray-900 " />

                        <label className="ml-2" htmlFor="email" >Email Address:</label>
                        <input type="email" id="email" name="email" placeholder="e.g Johndoe@gmail.com" onChange={(e) => setEmail(e.target.value)}  className="w-full rounded border border-gray-500/[0.2] mt-2 mb-4 p-[12px] focus:outline-2 focus:outline-primary hover:border-primary dark:bg-gray-900 " />
                        
                        <label className="ml-2" htmlFor="password" >Password:</label>
                        <input type="password" id="password" name="password" onChange={(e) => setEmail(e.target.value)}  className="w-full rounded border border-gray-500/[0.2] mt-2 mb-4 p-[12px] focus:outline-2 focus:outline-primary hover:border-primary dark:bg-gray-900 " />
                    </div>

                    <button type="submit" className={`flex justify-center items-center bg-primary hover:bg-secondary text-white rounded my-[30px] p-3 w-full`}>{loading ? <CgSpinner className="animate-spin" /> : ""} Continue</button>
                    <div className="my-10 flex flex-wrap justify-between">
                        <p>Already have an Account? <a href="/login" className="text-primary mt-3">Signin</a></p>
                    </div>
                </div>
            </div>
        </div>
    )
}