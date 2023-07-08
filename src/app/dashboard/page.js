'use client'
import SearchBar from "@/components/searchBar/page";
import { useSession } from "next-auth/react"
import { useContext } from "react"
import { FaArrowAltCircleRight } from "react-icons/fa";
import { FiLoader } from "react-icons/fi";
import Button from "@/components/button/button";
import { UserContext } from "./layout";


const Dashboard = () => {
    const {data:session} = useSession();
    const { userData, loading: userLoading, error: recommendationsError } = useContext(UserContext)

    return (
        <div className="p-4">
            <h2 className="opacity-[0.3] font-semibold text-lg my-3">DASHBOARD</h2>
            <p>Welcome: <span className="font-semibold">{session && session.user.name || session && session.user.email}</span></p>

            <div className="bg-white dark:bg-dark mt-5">
                <div className="mb-4">
                    <SearchBar/>
                </div>

                <div className="px-4 pb-6">
                    <h2 className="opacity-[0.3] font-semibold my-3">YOUR RECOMMENDATIONS</h2>

                    <div className="mb-6">
                        <h3 className="p-2 border border-transparent border-y-slate-300/[0.1] bg-slate-200/[0.05]">Subjects</h3>
                    {
                        userLoading ? 
                            <div className="min-h-[40vh] flex items-center justify-center" onClick={() => setError("")}><FiLoader className="animate-spin text-primary text-2xl" /></div>  :
                        userData[0]?.subjects === [] ? 
                            <p className="flex items-center min-h-[100px]">You have not choosen any recommendations</p> 
                        :
                        userData[0]?.subjects.map((item, i) => (
                            <p key={i} className="p-4 border border-slate-400/[0.1] rounded my-1">{item}</p>
                        ))
                    }
                    </div>

                    <div className="mb-6">
                        <h3 className="p-2 border border-transparent border-y-slate-300/[0.1] bg-slate-200/[0.05]">Platforms</h3>
                    {
                        userLoading ? 
                            <div className="min-h-[40vh] flex items-center justify-center" onClick={() => setError("")}><FiLoader className="animate-spin text-primary text-2xl" /></div>  :
                        userData[0]?.platforms === [] ? 
                            <p className="flex items-center min-h-[100px]">You have not choosen any platform</p> 
                        :
                        userData[0]?.platforms.map((item, i) => (
                            <p key={i} className="p-4 border border-slate-400/[0.1] rounded my-1">{item}</p>
                        ))
                    }
                    </div>

                    <div className="mb-6">
                        <h3 className="p-2 border border-transparent border-y-slate-300/[0.1] bg-slate-200/[0.05]">Time</h3>
                    {
                        userLoading ? 
                            <div className="min-h-[40vh] flex items-center justify-center" onClick={() => setError("")}><FiLoader className="animate-spin text-primary text-2xl" /></div>  :
                        userData[0]?.time === "" ? 
                            <p className="flex items-center min-h-[100px]">You have not choosen time to receive papers</p> 
                        :
                            <p className="p-4 border border-slate-400/[0.1] rounded my-1">{userData[0]?.time}</p>
                        
                    }
                    </div>


                    <Button link={"/dashboard/recommendations"} text={"Edit Recommendations"} type={"secondary"} icon={<FaArrowAltCircleRight />} />
                </div>
            </div>
        </div>
    )
}

export default Dashboard;
