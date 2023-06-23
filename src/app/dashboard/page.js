'use client'
import SearchBar from "@/components/searchBar/page";
import { useSession } from "next-auth/react"
import Link from "next/link";
import { useEffect, useState } from "react"
import { FaArrowAltCircleRight, FaTimes } from "react-icons/fa";
import { FiLoader, FiPaperclip } from "react-icons/fi";
import Error from "./error";



const Dashboard = () => {
    const {data:session} = useSession();
    const [papers, setPapers] = useState([])
    const [query, setQuery] = useState(['Physics', 'Philosophy'])
    const [search, setSearch] = useState("covid")
    const [year, setYear] = useState(["2022", "2023"])
    const [type, setType] = useState("paper")
    const [url, setUrl] = useState("")
    const [error, setError] = useState("")
    const [loading, setLoading] = useState(false)

    const urls = [
             `https://api.semanticscholar.org/graph/v1/${type}/search?query=${search}&year=${year.join("-")}&openAccessPdf&fieldsOfStudy=${query.join()}&fields=title,year,authors`,
            `http://api.springernature.com/openaccess/jats?${type === "paper" ? `q=subject:${query[0]} year:${year[1]}` : `name=${search}`}&api_key=${process.env.SPRINGER_API_KEY}`
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
        .then(data => {setPapers(data.data); console.log(data)})
    }, [])


    const handleSearch = () => {
        getData()
        .then(data => {setPapers(data.data); console.log(data)})
    }

    return (
        <div className="p-4">
            <h2 className="opacity-[0.3] font-semibold text-lg my-3">DASHBOARD</h2>
            <p>Welcome: <span className="font-semibold">{session && session.user.name}</span></p>

            <div className="flex flex-wrap bg-white dark:bg-dark p-2 mt-5">
                <div className="lg:w-[65%] w-full">
                    <SearchBar query={query} actions={{ setSearch, setQuery, setYear, setType, setUrl }} handleSearch={handleSearch} />
                    <div className="my-4 min-h-[50vh]">

                        <div className="rounded border border-slate-400/[0.2] p-4 bg-white dark:bg-dark">
                            {loading ? 
                                <div className="min-h-[40vh] flex items-center justify-center" onClick={() => setError("")}><FiLoader className="animate-spin text-primary" /></div> 
                                : error !== "" ?
                                <>
                                    <FaTimes onClick={() => setError("")} className="text-right text-primary text-xl" />
                                    <Error error={error} reset={handleSearch}/>
                                </>
                            :
                            papers && papers.map(paper => (
                                <div key={paper.paperId} className="flex gap-4 items-start p-4 border border-slate-400/[0.3] rounded my-1 w-full">
                                    <p className="p-2 text-xl bg-primary/[0.4] text-primary rounded border border-primary"><FiPaperclip /></p>
                                    <div>
                                        <Link href={paper.title} className="font-semibold mb-2" >{paper.title}</Link>
                                        <div>Authors: {paper.authors.slice(0,3).map(author => ( <span key={author.authorId}>{author.name},</span> ))}</div>
                                        <p className="opacity-[0.6]">Year: {paper.year}</p>
                                    </div>
                                </div>
                            )) }
                        </div>
                    </div>
                </div>

                <div className="lg:w-[35%] w-full px-4">
                    <h2 className="opacity-[0.3] font-semibold my-3">YOUR RECOMMENDATIONS</h2>

                    <div className="mb-6">
                    {
                        ["Physics", "Mathematics", "Chemistry", "Astrology"].map((item, i) => (
                            <p key={i} className="p-4 border border-slate-200 my-1">{item}</p>
                        ))
                    }
                    </div>

                    <Link href="/dashboard/recommendations" className="flex gap-2 items-center w-fit p-3 px-6 rounded bg-primary text-white"><span>Edit recommentations</span> <FaArrowAltCircleRight /></Link>
                </div>
            </div>
        </div>
    )
}

export default Dashboard;