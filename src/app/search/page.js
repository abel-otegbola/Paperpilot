'use client'
import Paper from "@/components/paper/page";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { FaTimes } from "react-icons/fa";
import Error from "../dashboard/error";
import { FiLoader } from "react-icons/fi";
import axios from "axios";
import SearchBar from "@/components/searchBar/page";

const Search = () => {
    const [papers, setPapers] = useState([])
    const searchparams = useSearchParams();
    const [error, setError] = useState("")
    const [loading, setLoading] = useState(false)
    const search = searchparams.get('search')
    const type = searchparams.get('type')
    const url = parseInt(searchparams.get('url'))

    const urls = [
        `https://api.semanticscholar.org/graph/v1/paper/search?query=${search}&openAccessPdf&fields=title,year,authors,publicationTypes`,
        `${process.env.NEXT_PUBLIC_SPRINGER_URL}/metadata/json?${type === "paper" ? `q=keyword:${search}` : `q=name:${search}`}&api_key=${process.env.NEXT_PUBLIC_SPRINGER_API_KEY}`,
        `https://api.core.ac.uk/v3/search/works/?q=${search}&api_key=${process.env.NEXT_PUBLIC_CORE_API_KEY}`
    ]

    async function getData() {
        setLoading(true)
        const res = await axios.get(urls[url])
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
    }, [searchparams])



    return (
        <div className="md:px-[5%] px-4 py-[5%]">
            <SearchBar search={search} url={url} type={type}/>
            <div className="min-h-[50vh]">
                <h1 className="p-2 bg-slate-200/[0.05] my-4">Search for: <span className="opacity-[0.7] ml-4">Query: </span> {search} <span className="opacity-[0.7] ml-4">Platform: </span>{url === 0 ? "Semantic Scholar" : url === 1 ? "Springer" : url === 2 ? "CORE" : "IEEE"}  </h1>
                <div className="bg-white dark:bg-dark">
                    {loading ? 
                        <div className="min-h-[40vh] flex items-center justify-center" onClick={() => setError("")}>
                            <FiLoader className="animate-spin text-primary text-2xl" />
                        </div> 
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
    )
}

export default Search;