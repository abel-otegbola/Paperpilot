'use client'
import Link from "next/link";
import { FiFile, FiPaperclip } from "react-icons/fi";

const Paper = ({ data, url }) => {

    if (data !== [] && data[0]) {
        return (
        <>
        {
            !data[0].creators ?
            data.map((paper, i) => (
                <div key={i} className="flex gap-4 items-start p-4 border border-slate-400/[0.3] rounded my-1 w-full">
                    <p className="p-2 text-xl bg-primary/[0.4] text-primary rounded border border-primary">
                        <FiFile />
                    </p>
                    <div>
                        <Link href={{
                            pathname: '/dashboard/singlePaper',
                            query: { paper: paper.paperId || paper.doi || paper.title, source: url === 0 ? "semantic" : url === 1 ? "springer" : url === 2 ? "CORE" : "IEEE"}
                        }} className="font-semibold mb-2" >{paper.title}</Link>
                            {
                                paper.authors.authors ?
                                <div className="py-1">Authors: {paper.authors.authors.slice(0,3).map((author, i) => ( <span key={i}>{author.full_name},</span> ))}</div>
                                :
                                <div className="py-1">Authors: {paper.authors.slice(0,3).map((author, i) => ( <span key={i}>{author.name},</span> ))}</div>
                            }
                        <p className="opacity-[0.6]">Year: {paper.year || paper.yearPublished || paper.publication_year}</p>
                    </div>
                </div>
            ))
            : 
            data.map(paper => (
                <div key={paper.doi} className="flex gap-4 items-start p-4 border border-slate-400/[0.3] rounded my-1 w-full">
                    <p className="p-2 text-xl bg-primary/[0.4] text-primary rounded border border-primary"><FiPaperclip /></p>
                    <div>
                        <Link href={{
                            pathname: '/dashboard/singlePaper',
                            query: { paper: paper.doi, source: "springer" }
                        }} className="font-semibold mb-2" >{paper.publicationName}</Link>
                        <div className="py-1">Authors: {paper.creators.slice(0,3).map((author,i) => ( <span key={i}>{author.creator},</span> ))}</div>
                        <p className="opacity-[0.6]">Year: {paper.publicationDate}</p>
                    </div>
                </div>
            ))
        }
        </>
    )
    }
    else {
        return (
            <div className="min-h-[150px] flex justify-center items-center">Could not fetch data. Please try again</div>
        )
    }
}

export default Paper;