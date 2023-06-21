'use client'

import { useEffect } from "react"

export default function Error({error, reset}) {
    useEffect(() => {
        console.log(error)
    }, [error])
    return (
        <div className="flex-1 min-h-[90vh] flex flex-col justify-center items-center ">
            <h2 className="text-primary text-2xl mb-4">Something went wrong!</h2>
            <button onClick={() => reset()} className="p-3 px-6 rounded bg-primary text-white">Try again</button>
        </div>
    )
}