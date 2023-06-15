'use client'

import { useState } from "react";
import { CgSpinner } from "react-icons/cg";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { FaCheck } from "react-icons/fa";
import Link from "next/link";

export default function Signup() {
    const [active, setActive] = useState(0)
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
                    <h1 className="py-6 text-primary text-2xl font-bold">Create Your Account</h1>
                    <p className="pb-5">Sign up to create and manage your recommendations</p>

                    <Signupflow active={active} actions={{ setFullname, setEmail }} />

                    <div className="flex w-full">
                        <button type="submit" onClick={() => setActive(active-1)} className={`flex justify-center items-center bg-transparent rounded my-[30px] transition-all duration-700 overflow-hidden ${active > 0 && active < 4 ? "w-full p-[13px] border border-gray-400" : "w-0 p-0"}`}>Back</button> 
                        <button type="submit" onClick={() => setActive(active+1)} className={`flex justify-center items-center bg-primary hover:bg-secondary text-white rounded my-[30px] transition-all duration-700 overflow-hidden ${active < 4 ? "w-full p-[13px]" : "w-0 p-0"}`}>{loading ? <CgSpinner className="animate-spin" /> : ""} Continue</button>
                        <Link href={'/dashboard'} className={`flex justify-center items-center bg-primary hover:bg-secondary text-white rounded my-[30px] transition-all duration-700 overflow-hidden ${active === 4 ? "w-full p-[13px]" : "w-0 p-0"}`}>Go to dashboard</Link>
                    </div>
                    <div className="my-10 flex flex-wrap justify-between">
                        <p>Already have an Account? <a href="/login" className="text-primary mt-3">Signin</a></p>
                    </div>
                </div>
            </div>
        </div>
    )
}

const Signupflow = ({ active, actions }) => {

    return (
        <div className={`flex items-center min-h-[300px] overflow-hidden`}>
            <div className={`transition-all duration-700 overflow-hidden ${active === 0 ? "w-full opacity-1" : "w-0 opacity-0"}`}>
                <label className="ml-2 break-none" htmlFor="fullname" >Full Name:</label>
                <input type="text" id="fullname" name="fullname" placeholder="e.g John Doe" onChange={(e) => actions.setFullname(e.target.value)} className=" w-full rounded border border-gray-500/[0.2] mt-2 mb-8 p-[12px] focus:outline-2 focus:outline-primary hover:border-primary dark:bg-gray-900 " />

                <label className="ml-2 break-none" htmlFor="email" >Email Address:</label>
                <input type="email" id="email" name="email" placeholder="e.g Johndoe@gmail.com" onChange={(e) => actions.setEmail(e.target.value)}  className="w-full rounded border border-gray-500/[0.2] mt-2 mb-8 p-[12px] focus:outline-2 focus:outline-primary hover:border-primary dark:bg-gray-900 " />
            </div>

            <div className={`flex justify-center flex-col transition-all duration-700 overflow-hidden ${active === 1 ? "w-full h-[250px] opacity-1" : "w-0 h-0 opacity-0"}`}>
                <h2 htmlFor="code" className="break-none text-lg font-semibold mb-4" >Check your email</h2>
                <p className="">We sent a 4-digit code to Johndoe@gmail.com</p>
                <p className="">Please enter it below. Can&apos;t find it? Check your spam folder</p>
                <div className="flex gap-2 pt-4">
                    { [0,0,0,0].map((item, i) => (
                        <input key={i} type="text" id="code" name="codes" placeholder={item} onChange={(e) => setFullname(e.target.value)} className="w-[60px] text-center rounded-xl border border-gray-500/[0.2] mt-2 mb-8 p-[12px] focus:outline-2 focus:outline-primary hover:border-primary dark:bg-gray-900 " />
                    ))}
               </div>
               <button className="text-primary mt-4 cursor w-fit">Click to send a new code</button>
            </div>

            <div className={`flex justify-center flex-col transition-all duration-700 overflow-hidden ${active === 2 ? "w-full h-[250px] opacity-1" : "w-0 h-0 opacity-0"}`}>
                <h2 htmlFor="code" className="break-none text-lg font-semibold mb-4" >Congratulations</h2>
                <p className="">Your account has been created</p>
                <p className="">Let&apos;s set-up your research recommendations. Please select the categories that suite you.</p>
                <div className="grid grid-cols-3 gap-2 pt-4 overflow-auto">
                    { ["Physics", "Mathematics", "Medicine", "Nanotechnology", "BioChemistry", "History", "Chemistry"].map((item, i) => (
                        <button key={i} className="text-center rounded-lg border border-gray-500/[0.3] p-[20px] hover:border-primary hover:text-primary dark:bg-gray-900 ">{item}</button>
                    ))}
                </div>
            </div>

            <div className={`flex justify-center flex-col transition-all duration-700 overflow-hidden ${active === 3 ? "w-full h-[250px] opacity-1" : "w-0 h-0 opacity-0"}`}>
                <h2 htmlFor="code" className="break-none text-lg font-semibold mb-4" >Almost done </h2>
                <p className="">How often do you want to receive the research papers</p>
                <div className="grid grid-cols-3 gap-2 pt-4 overflow-auto">
                    { ["Everday", "Every two days", "Every three days", "Weekly", "Every two weeks", "Monthly"].map((item, i) => (
                        <button key={i} className="text-center rounded-lg border border-gray-500/[0.3] p-[20px] hover:border-primary hover:text-primary dark:bg-gray-900 ">{item}</button>
                    ))}
                </div>
            </div>

            <div className={`flex justify-center flex-col transition-all duration-700 overflow-hidden ${active === 4 ? "w-full h-[250px] opacity-1" : "w-0 h-0 opacity-0"}`}>
                <FaCheck className="rounded-[40px] text-5xl bg-green-500 text-white p-4 mb-4" />
                <h2 htmlFor="code" className="break-none text-lg font-semibold mb-4" >Setup complete</h2>
                <p className="">Nice work! Your account is all setup and ready.</p>
            </div>
        </div>
    )
}