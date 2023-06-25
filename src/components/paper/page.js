'use client'
import Link from "next/link";
import { useEffect } from "react";
import { FiBookOpen, FiBriefcase, FiFile, FiFilePlus, FiMessageSquare, FiPaperclip } from "react-icons/fi";

const Paper = ({ url, data }) => {
    useEffect(() => {
        console.log(url)
    }, [url])

    if (data !== [] && data[0]) {
        return (
        <>
        {
            !data[0].doi ?
            data.map(paper => (
                <div key={paper.paperId} className="flex gap-4 items-start p-4 border border-slate-400/[0.3] rounded my-1 w-full">
                    <p className="p-2 text-xl bg-primary/[0.4] text-primary rounded border border-primary">
                        <FiFile />
                    </p>
                    <div>
                        <Link href={paper.title} className="font-semibold mb-2" >{paper.title}</Link>
                            <div>Authors: {paper.authors.slice(0,3).map(author => ( <span key={author.authorId}>{author.name},</span> ))}</div>
                        <p className="opacity-[0.6]">Year: {paper.year}</p>
                    </div>
                </div>
            ))
            : 
            data.map(paper => (
                <div key={paper.doi} className="flex gap-4 items-start p-4 border border-slate-400/[0.3] rounded my-1 w-full">
                    <p className="p-2 text-xl bg-primary/[0.4] text-primary rounded border border-primary"><FiPaperclip /></p>
                    <div>
                        <Link href={paper.publicationName} className="font-semibold mb-2" >{paper.publicationName}</Link>
                        <div>Authors: {paper.creators.slice(0,3).map((author,i) => ( <span key={i}>{author.creator},</span> ))}</div>
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
            <div>Welcome</div>
        )
    }
}

export default Paper;