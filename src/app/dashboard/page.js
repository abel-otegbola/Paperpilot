'use client'
import SearchBar from "@/components/searchBar/page";
import { useSession } from "next-auth/react"
import Link from "next/link";
import { useEffect, useState } from "react"
import { FaArrowAltCircleRight, FaTimes } from "react-icons/fa";
import { FiLoader, FiPaperclip } from "react-icons/fi";
import Error from "./error";
import Paper from "@/components/paper/page";
import Button from "@/components/button/button";



const Dashboard = () => {
    const {data:session} = useSession();
    const [papers, setPapers] = useState([])
    const [query, setQuery] = useState(['Physics', 'Philosophy'])
    const [search, setSearch] = useState("Hughes")
    const [year, setYear] = useState(["2022", "2023"])
    const [type, setType] = useState("paper")
    const [url, setUrl] = useState(0)
    const [error, setError] = useState("")
    const [loading, setLoading] = useState(false)

    const urls = [
        `https://api.semanticscholar.org/graph/v1/paper/search?query=${search}&year=${year.join("-")}&openAccessPdf&fieldsOfStudy=${query.join()}&fields=title,year,authors,publicationTypes`,
        `http://api.springernature.com/metadata/json?${type === "paper" ? `q=subject:${query[0]}` : `q=name:${search}`}&api_key=${process.env.NEXT_PUBLIC_SPRINGER_API_KEY}`
    ]

    async function getData() {
        setLoading(true)
        const res = await fetch(urls[url])
        // Recommendation: handle errors
        .catch(err => {
            setError('Failed to fetch data')
            setLoading(false)
            setError("")
            throw new Error("Failed to fetch data")
        })
        setLoading(false)
        return res.json()
    }

    useEffect(() => {
        getData()
        .then(data => {setPapers(!data.records ? data.data : data.records )})
    }, [getData])


    const handleSearch = () => {
        getData()
        .then(data => {setPapers(!data.records ? data.data : data.records )})
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

                <div className="lg:w-[35%] w-full px-4">
                    <h2 className="opacity-[0.3] font-semibold my-3">YOUR RECOMMENDATIONS</h2>

                    <div className="mb-6">
                    {
                        ["Physics", "Mathematics", "Chemistry", "Astrology"].map((item, i) => (
                            <p key={i} className="p-4 border border-slate-400/[0.1] rounded my-1">{item}</p>
                        ))
                    }
                    </div>

                    <Button link={"/dashboard/recommendations"} text={"Edit Recommendations"} type={"primary"} icon={<FaArrowAltCircleRight />} />
                </div>
            </div>
        </div>
    )
}

export default Dashboard;
