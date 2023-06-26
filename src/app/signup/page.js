'use client'

import { useState } from "react";
import { CgSpinner } from "react-icons/cg";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { FaTimesCircle } from "react-icons/fa";
import Link from "next/link";
import { validateSignup } from "@/utils/validateSignup";

export default function Signup() {
    const [loading, setLoading] = useState(false)
    const [fullname, setFullname] = useState("")
    const [email, setEmail] = useState("")
    const [error, setError] = useState("")
    const [password, setPassword] = useState("")
    const [cpassword, setConfirmPassword] = useState("")
    const [success, setSuccess] = useState("")
    const router = useRouter()
    const [validate, setValidate] = useState({fullname: "", email: "", password: "", cpassword: ""})

    const submitForm = async () => {
        setError("")
        const validator = validateSignup(fullname, email, password, cpassword)
        setValidate(validator)
        if (validator.fullname === "" && validator.email === "" && validator.password === "" && validator.cpassword === "") {
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
            setError("Could not create account due to validation. Please check the fields and try again")
        }
    }

    return (
        <div className="md:px-[5%] sm:py-[2%] dark:bg-gray-900">
            <div className="flex"> 
                <div className="w-[50%] overflow-hidden md:block hidden relative bg-gray-800/[0.1]">
                    <Image src="/woman_researcher.png" alt="researcher" className="object-cover" fill={true}/>
                </div>
                <div className="p-[20px] md:w-[50%] w-full md:py-[7%] py-[80px] bg-slate-100 dark:bg-gray-800 rounded" method="post">
                    
                    <div className="mx-auto max-w-[350px]">
                        <Image src="/logo.svg" alt="paperpilot" width={30} height={30} /> 
                        <h1 className="py-4 text-primary text-2xl font-bold">Create Your Account</h1>
                        <p className="pb-5">Sign up to create and manage your recommendations</p>

                        {/* Show success message */}
                        { success !== "" ? <p className="my-2 text-green-500 p-4 text-center flex justify-between items-center rounded bg-green-200/[0.5]">{success}<FaTimesCircle onClick={() => setSuccess("")} /></p> : "" }
                        { error !== "" ? <p className="my-2 text-red-500 p-4 text-center flex justify-between items-center rounded bg-red-200/[0.5]">{error}<FaTimesCircle onClick={() => setError("")} /></p> : "" }
                        
                        <div className={`transition-all duration-700 overflow-hidden`}>
                            <div className="mb-4">
                                <label className="font-semibold" htmlFor="fullname" >Full Name:</label>
                                <input type="text" id="fullname" name="fullname" placeholder="e.g John Doe" onChange={(e) => setFullname(e.target.value)} className=" w-full rounded border border-gray-500/[0.2] mt-2 p-[10px] focus:outline-2 focus:outline-primary hover:border-primary dark:bg-gray-900 " />
                                { validate.fullname !== ""  ? <p className="text-red-500 mt-1 text-[10px]">{validate.fullname}</p> : ""}
                            </div>

                            <div className="mb-4">
                                <label className="font-semibold" htmlFor="email" >Email Address:</label>
                                <input type="email" id="email" name="email" placeholder="e.g Johndoe@gmail.com" onChange={(e) => setEmail(e.target.value)}  className="w-full rounded border border-gray-500/[0.2] mt-2 p-[10px] focus:outline-2 focus:outline-primary hover:border-primary dark:bg-gray-900 " />
                                { validate.email !== ""  ? <p className="text-red-500 mt-1 text-[10px]">{validate.email}</p> : ""}
                            </div>

                            <div className="mb-4">
                                <label className="font-semibold" htmlFor="password" >Password:</label>
                                <input type="password" id="password" name="password" onChange={(e) => setPassword(e.target.value)}  className="w-full rounded border border-gray-500/[0.2] mt-2 p-[10px] focus:outline-2 focus:outline-primary hover:border-primary dark:bg-gray-900 " />
                                { validate.password !== ""  ? <p className="text-red-500 mt-1 text-[10px]">{validate.password}</p> : ""}
                            </div>

                            <div className="mb-4">
                                <label className="font-semibold" htmlFor="cpassword" >Confirm Password:</label>
                                <input type="password" id="cpassword" name="cpassword" onChange={(e) => setConfirmPassword(e.target.value)}  className="w-full rounded border border-gray-500/[0.2] mt-2 p-[10px] focus:outline-2 focus:outline-primary hover:border-primary dark:bg-gray-900 " />
                            { validate.cpassword !== ""  ? <p className="text-red-500 mt-1 text-[10px]">{validate.cpassword}</p> : ""}
                            </div>
                        </div>

                        <button type="submit" onClick={() => submitForm()} className={`flex justify-between items-center bg-gradient-to-b from-fuchsia-600 to-primary hover:bg-secondary text-white rounded my-[20px] p-3 w-full`}><span className="flex-1 text-center">Signup</span>{loading ? <CgSpinner className="animate-spin" /> : ""} </button>
                        <div className="mt-2 flex flex-col gap-2">
                            <p className="">Already have an Account?</p>
                            <Link href="/login" className="p-[10px] rounded border border-primary text-center w-100"> Signin</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}