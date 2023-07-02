'use client'
import Link from "next/link";
import { FiFile, FiPaperclip } from "react-icons/fi";

const Paper = ({ data }) => {

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
                            query: { paper: paper.paperId || paper.doi, source: "semantic" }
                        }} className="font-semibold mb-2" >{paper.title}</Link>
                            <div>Authors: {paper.authors.slice(0,3).map((author, i) => ( <span key={i}>{author.name},</span> ))}</div>
                        <p className="opacity-[0.6]">Year: {paper.year}</p>
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