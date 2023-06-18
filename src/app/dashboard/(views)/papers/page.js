'use client'
import SearchBar from "@/components/searchBar/page";
import { useSession } from "next-auth/react"
import Link from "next/link";
import { useEffect, useState } from "react"
import { FiPaperclip } from "react-icons/fi";



const ResearchPapers = () => {
    const {data:session} = useSession();
    const [papers, setPapers] = useState([])
    const [query, setQuery] = useState(['Physics', 'Philosophy'])
    const [search, setSearch] = useState("covid")

    async function getData() {
        const res = await fetch(`https://api.semanticscholar.org/graph/v1/paper/search?query=${search}&year=2020-2023&openAccessPdf&fieldsOfStudy=${query.join()}&fields=title,year,authors`)
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
    }, [query, search])

    const handleQuery = (category) => {
        if(query.indexOf(category) !== -1) {
            setQuery(query.filter(item => item !== category))
        }
        else {
            setQuery([...query, category])
        }
    }

    return (
        <div className="p-4">
            <h2 className="opacity-[0.3] font-semibold text-lg my-3">DASHBOARD / RESEARCH PAPERS</h2>
            <p>Find and download research papers</p>

            <div className="flex bg-white dark:bg-dark p-2 mt-5">
                <div className="md:w-[65%]">
                    <SearchBar query={query} handleQuery={handleQuery} />
                    <div className="my-4">
                        {papers && papers.map(paper => (
                            <div key={paper.paperId} className="flex gap-4 items-start p-4 border border-slate-400/[0.3] rounded my-1 w-full">
                                <p className="p-2 text-xl bg-primary/[0.4] text-primary rounded border border-primary"><FiPaperclip /></p>
                                <div>
                                    <Link href={paper.title} className="font-semibold" >{paper.title}</Link>
                                    <div className="flex mt-2 gap-2">Authors: {paper.authors.slice(0,3).map(author => ( <p key={author.authorId}>{author.name},</p> ))}</div>
                                    <p className="opacity-[0.6]">Year: {paper.year}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ResearchPapers;