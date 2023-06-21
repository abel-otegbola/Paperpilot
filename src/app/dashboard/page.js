'use client'
import SearchBar from "@/components/searchBar/page";
import { useSession } from "next-auth/react"
import Link from "next/link";
import { useEffect, useState } from "react"
import { FaArrowAltCircleRight } from "react-icons/fa";
import { FiPaperclip } from "react-icons/fi";



const Dashboard = () => {
    const {data:session} = useSession();
    const [papers, setPapers] = useState([])
    const [query, setQuery] = useState(['Physics', 'Philosophy'])
    const [search, setSearch] = useState("covid")
    const [year, setYear] = useState(["2022", "2023"])
    const [type, setType] = useState("paper")

    async function getData() {
        const res = await fetch(`https://api.semanticscholar.org/graph/v1/${type}/search?query=${search}&year=${year.join("-")}&openAccessPdf&fieldsOfStudy=${query.join()}&fields=title,year,authors`)
        .catch(err => {
            throw new Error("Failed to fetch data")
        })
        // The return value is *not* serialized
        // You can return Date, Map, Set, etc.
    
        // Recommendation: handle errors
        if (!res.ok) {
        // This will activate the closest `error.js` Error Boundary
            throw new Error('Failed to fetch data')
        }
    
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

            <div className="flex bg-white dark:bg-dark p-2 mt-5">
                <div className="md:w-[65%]">
                    <SearchBar query={query} actions={{ setSearch, setQuery, setYear, setType }} handleSearch={handleSearch} />
                    <div className="my-4">
                        {papers && papers.map(paper => (
                            <div key={paper.paperId} className="flex gap-4 items-start p-4 border border-slate-400/[0.3] rounded my-1 w-full">
                                <p className="p-2 text-xl bg-primary/[0.4] text-primary rounded border border-primary"><FiPaperclip /></p>
                                <div>
                                    <Link href={paper.title} className="font-semibold mb-2" >{paper.title}</Link>
                                    <div>Authors: {paper.authors.slice(0,3).map(author => ( <span key={author.authorId}>{author.name},</span> ))}</div>
                                    <p className="opacity-[0.6]">Year: {paper.year}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="md:w-[35%] px-4">
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