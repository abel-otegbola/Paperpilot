'use client'

export default function Error({error, reset}) {
    return (
        <div className="flex-1 min-h-[50vh] flex flex-col justify-center items-center ">
            <h2 className="text-lg text-red-500 font-semibold mb-4">Something went wrong!</h2>
            <p className="mb-4 opacity-[0.7]">{error}</p>
            <button onClick={() => reset()} className="p-3 px-6 min-w-[150px] text-center rounded border border-primary text-primary">Try again</button>
        </div>
    )
}