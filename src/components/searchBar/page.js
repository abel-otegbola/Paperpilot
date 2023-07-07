'use client'
import { closeBlock } from "@/utils/closeBlock";
import { useEffect, useRef, useState } from "react";
import { FiSearch } from "react-icons/fi";

const SearchBar = () => {
    const [open, setOpen] = useState(false)
    const [search, setSearch] = useState("Fermentation")
    const [year, setYear] = useState("2022")
    const [type, setType] = useState("paper")
    const [url, setUrl] = useState(0)
    const menuRef = useRef(null)

    // Close categories when clicked outside
    useEffect(() => {
        closeBlock(menuRef, open, setOpen)
    }, [open])

    return (
        <form ref={menuRef} className="border border-slate-400/[0.2] px-2 backdrop-blur-sm bg-white/[0.6] dark:bg-dark/[0.6]" action={`/search`}>
            <div className="flex items-center p-2">
                <FiSearch className="text-lg opacity-[0.5] mr-2" />
                <input type="search" name="search" placeholder="Search papers..." onFocus={() => setOpen(true)} onChange={(e) => setSearch(e.target.value)} className="flex-1 bg-transparent border-transparent p-3 rounded flex-1 focus:outline-2 focus:outline-primary hover:border-primary" />
                <button className="p-[10px] px-6 rounded border border-slate-400/[0.3] bg-gradient-to-b from-fuchsia-600 to-primary text-white rounded cursor-pointer" >Search</button>
            </div>

            <div className={`overflow-hidden transition-all duration-700 ${open ? "md:h-[120px] h-[190px]" : "h-[0px]"}`}>
                <h4 className="opacity-[0.6] text-[11px] mt-2 mb-1 text-primary">Filter Search results:</h4>
                <div className="flex flex-wrap items-center w-full mb-2 p-2 gap-2 bg-gray-400/[0.1]">
                    <div className="border border-transparent border-l-gray-500/[0.1] px-2">
                        <h4 className="mb-1 text-[11px] opacity-[0.6]">Search by author/paper:</h4>
                        <select className="p-2 px-4 border dark:bg-dark border-slate-400/[0.3] rounded cursor-pointer mr-1" name="type" onChange={(e) => setType(e.target.value)}>
                            <option>paper</option>
                            <option>author</option>
                        </select>
                    </div>
                    <div className="border border-transparent border-l-gray-500/[0.1] px-2">
                        <h4 className="mb-1 text-[11px] opacity-[0.6]">Search platform:</h4>
                        <select className="p-2 px-4 dark:bg-dark border border-slate-400/[0.3] rounded cursor-pointer mr-1" name="url" onChange={(e) => setUrl(e.target.value)}>
                            <option value={0}>Semantic scholar</option>
                            <option value={1}>Springer</option>
                            <option value={2}>CORE</option>
                            <option value={3}>IEEE</option>
                        </select>
                    </div>
                </div>
            </div>

        </form>
    )
}

export default SearchBar;