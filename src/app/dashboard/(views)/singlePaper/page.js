'use client'

import { FaDownload, FaTimes } from "react-icons/fa"
import Error from "../../error"
import { FiCalendar, FiLoader, FiPaperclip } from "react-icons/fi"
import Link from "next/link"

const { useSearchParams } = require("next/navigation")
const { useEffect, useState } = require("react")

const SinglePaper = () => {
    const [paper, setPaper] = useState({
        title: "", url: "", year: "", authors: [], abstract: "", publicationDate: "", openAccessPdf: { url: "" }, fieldsOfStudy: [], publicationTypes: []
    })
    const [error, setError] = useState("")
    const [loading, setLoading] = useState(false)
    const id = useSearchParams().get("paper")
    const source = useSearchParams().get("source")

    async function getData() {
        setLoading(true)
        const res = await fetch(source === "semantic" ? `https://api.semanticscholar.org/graph/v1/paper/${id}?fields=title,url,year,authors,abstract,openAccessPdf,fieldsOfStudy,publicationTypes,publicationDate` : `${process.env.NEXT_PUBLIC_SPRINGER_URL}metadata/json?q=doi:${id}&api_key=${process.env.NEXT_PUBLIC_SPRINGER_API_KEY}`)
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
        .then(data => {
            if(!data.records) {setPaper(data)}
            else {
                const {publicationName: title, creators, subjects: fieldsOfStudy, abstract, publicationDate: year, contentType, url, publicationType, publicationDate} = data.records[0];
                setPaper({title, authors: creators.map((item, i) => ({ authorId: i, name: item.creator }) ), fieldsOfStudy, abstract, year, publicationDate, openAccessPdf:{url: url[0].value}, publicationTypes: [contentType, publicationType], })
            } 
            console.log(data.records[0])
        })
    }, [])

    return (
        <div className="p-4">
            {
                loading ? 
                    <div className="min-h-[40vh] flex items-center justify-center" onClick={() => setError("")}><FiLoader className="animate-spin text-primary text-2xl" /></div> 
                : error !== "" ?
                <>
                    <FaTimes onClick={() => setError("")} className="text-right text-primary text-xl" />
                    <Error error={error} reset={getData}/>
                </>
                :
                paper &&
                <div className="p-[5%]">
                    <h1 className="md:text-4xl text-2xl md:leading-[50px] font-bold pb-4">{paper.title}</h1>
                    <div className="flex flex-wrap items-center gap-6 py-2">
                        <p className="font-semibold text-primary">AUTHORS:</p>
                        {
                            paper.authors && paper.authors.slice(0,3).map(author => (
                                <div key={author.authorId} className="flex items-center gap-1">
                                    <p className="p-2 py-1 rounded-full font-bold bg-green-300">{author.name.slice(0,1)}</p>
                                    <p className="font-semibold">{author.name}</p>
                                </div>
                            ))
                        }
                        <p className="opacity-[0.7] py-2">{paper.year}</p>
                    </div>
                    <div className="flex flex-wrap items-center gap-2 py-2">
                        {
                            paper.fieldsOfStudy.map((field,i) => (
                                <p key={i} className="px-4 py-2 rounded-[30px] text-[10px] bg-slate-300/[0.2] border border-slate-300">{field}</p>
                            ))
                        }
                    </div>
                    <div className="py-4">
                        <h2 className="opacity-[0.6] py-2">ABSTRACT</h2>
                        <p className="leading-[25px] py-2 border border-transparent border-y-slate-500/[0.1]">{paper.abstract}</p>
                    </div>
                    <div className="py-4">
                        <h2 className="opacity-[0.6] py-2">PUBLICATION</h2>
                        <div className="flex items-center gap-4 leading-[25px] py-4 border border-transparent border-y-slate-500/[0.1]">
                            <p className="flex items-center opacity-[0.7] gap-2"><FiCalendar className="p-2 rounded bg-slate-300/[0.1] text-3xl" /> {paper.publicationDate}</p>
                            <Link className="flex items-center opacity-[0.7] gap-2" href={paper.openAccessPdf ? paper.openAccessPdf.url : "#"}><FaDownload className="p-2 rounded bg-slate-300/[0.1] text-3xl"/> Download</Link>
                            <p className="flex items-center opacity-[0.7] gap-2"><FiPaperclip className="p-2 rounded bg-slate-300/[0.1] text-3xl" /> {paper.publicationTypes && paper.publicationTypes.map((item, i) => ( <span key={i}> {item} </span> ))}</p>                            
                        </div>                        
                    </div>
                </div>
            }
        </div>
    )
}

export default SinglePaper;
