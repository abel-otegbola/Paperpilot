'use client'
const { useSearchParams } = require("next/navigation")
const { useEffect, useState } = require("react")

const SinglePaper = () => {
    const [paper, setPaper] = useState([])
    const [error, setError] = useState("")
    const [loading, setLoading] = useState(false)
    const id = useSearchParams().get("paper")
    const source = useSearchParams().get("source")

    async function getData() {
        setLoading(true)
        const res = await fetch(source === "semantic" ? `https://api.semanticscholar.org/graph/v1/paper/${id}?fields=title,url,year,authors,abstract,publicationVenue,openAccessPdf,fieldsOfStudy,publicationTypes,publicationDate` : `http://api.springernature.com/metadata/json?q=doi:${id}?${NEXT_PUBLIC_SPRINGER_API_KEY}`)
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
        .then(data => {setPaper(!data.records ? data : data.records ); console.log(data)})
    }, [getData])

    return (
        <div className="p-4">
            {
                paper && 
                <div className="p-[5%]">
                    <h1 className="md:text-4xl text-2xl md:leading-[50px] font-bold py-3">{paper.title}</h1>
                    <div className="flex flex-wrap items-center gap-6 py-2">
                        <p className="font-semibold text-primary">AUTHORS:</p>
                        {
                            paper.authors.slice(0,3).map(author => (
                                <div className="flex items-center gap-1">
                                <p className="p-3 py-1 rounded-full text-lg font-bold bg-green-300">{author.name.slice(0,1)}</p>
                                <p className="font-semibold">{author.name}</p>
                                </div>
                            ))
                        }
                    </div>

                </div>
            }
        </div>
    )
}

export default SinglePaper;
