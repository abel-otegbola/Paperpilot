'use client'
import SearchBar from "@/components/searchBar/page";
import { useSession } from "next-auth/react"
import { useEffect, useState, useContext } from "react"
import { FaArrowAltCircleRight, FaTimes } from "react-icons/fa";
import { FiLoader } from "react-icons/fi";
import Error from "./error";
import Paper from "@/components/paper/page";
import Button from "@/components/button/button";
import axios from "axios";
import { UserContext } from "./layout";



const Dashboard = () => {
    const {data:session} = useSession();
    const [papers, setPapers] = useState([])
    const [error, setError] = useState("")
    const [loading, setLoading] = useState(false)
    const { userData, loading: userLoading, error: recommendationsError } = useContext(UserContext)

    const urls = [
        `https://api.semanticscholar.org/graph/v1/paper/search?query=${search}&year=${year.join("-")}&openAccessPdf&fieldsOfStudy=${query.join()}&fields=title,year,authors,publicationTypes`,
        `${process.env.NEXT_PUBLIC_SPRINGER_URL}/metadata/json?${type === "paper" ? `q=subject:${search}` : `q=name:${search}`}&api_key=${process.env.NEXT_PUBLIC_SPRINGER_API_KEY}`,
        `https://api.core.ac.uk/v3/search/works/?q=${search}&api_key=${process.env.NEXT_PUBLIC_CORE_API_KEY}`
    ]

    async function getData() {
        setLoading(true)
        const res = await axios.get(urls[url])
        // Recommendation: handle errors
        .catch(err => {
            setError('Failed to fetch data')
            setLoading(false)
            setError("")
            throw new Error("Failed to fetch data")
        })
        setLoading(false)
        return res.data
    }

    useEffect(() => {
        getData()
        .then(data => {
            if(data.records) {
                setPapers(data.records)
            }
            else if(data.results) {
                setPapers(data.results)
            }
            else if(data.data) {
                setPapers(data.data)
            }
        })
    }, [])


    const handleSearch = () => {
        getData()
        .then(data => {
            if(data.records) {
                setPapers(data.records)
            }
            else if(data.results) {
                setPapers(data.results)
            }
            else {
                setPapers(data.data)
            }
        })
    }

    return (
        <div className="p-4">
            <h2 className="opacity-[0.3] font-semibold text-lg my-3">DASHBOARD</h2>
            <p>Welcome: <span className="font-semibold">{session && session.user.name || session && session.user.email}</span></p>

            <div className="flex flex-wrap bg-white dark:bg-dark mt-5">
                <div className="lg:w-[65%] w-full">
                    <SearchBar query={query} actions={{ setSearch, setQuery, setYear, setType, setUrl }} handleSearch={handleSearch} />
                    <div className="my-4 min-h-[50vh]">

                        <div className="rounded border border-slate-400/[0.2] bg-white dark:bg-dark">
                            {loading ? 
                                <div className="min-h-[40vh] flex items-center justify-center" onClick={() => setError("")}><FiLoader className="animate-spin text-primary text-2xl" /></div> 
                                : error !== "" ?
                                <>
                                    <FaTimes onClick={() => setError("")} className="text-right text-primary text-xl" />
                                    <Error error={error} reset={handleSearch}/>
                                </>
                            :
                            papers && <Paper url={url} data={papers}/> }
                        </div>
                    </div>
                </div>

                <div className="lg:w-[35%] w-full px-4 pb-6">
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
