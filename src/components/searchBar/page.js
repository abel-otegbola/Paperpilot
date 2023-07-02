'use client'
import { useState } from "react";
import { FiSearch } from "react-icons/fi";

const SearchBar = ({ query, actions, handleSearch }) => {
    const [open, setOpen] = useState(false)

    const handleQuery = (category) => {
        if(query.indexOf(category) !== -1) {
            actions.setQuery(query.filter(item => item !== category))
        }
        else {
            actions.setQuery([...query, category])
        }
    }

    return (
        <div className="border border-slate-400/[0.2] px-2">
            <div className="flex items-center p-2">
                <FiSearch className="text-lg opacity-[0.5] mr-2" />
                <input type="search" name="search" placeholder="Search papers..." onChange={(e) => actions.setSearch(e.target.value)} className="flex-1 bg-transparent border-transparent p-3 rounded flex-1 focus:outline-2 focus:outline-primary hover:border-primary" />
                <p className="p-[10px] px-6 rounded border border-slate-400/[0.3] bg-gradient-to-b from-fuchsia-600 to-primary text-white  text-white rounded cursor-pointer" onClick={handleSearch}>Search</p>
            </div>
            <h4 className="opacity-[0.6] text-[11px] mt-2 mb-1 text-primary">Filter Search results:</h4>
            <div className="flex flex-wrap items-center w-full mb-2 p-2 gap-2 bg-gray-400/[0.1]">
                
                <div className="relative border border-transparent border-l-gray-500/[0.1] px-2">
                    <h4 className="mb-1 text-[11px] opacity-[0.6]">Categories:</h4>
                    <p className="p-2 px-4 bg-white dark:bg-dark border border-slate-400/[0.3] rounded cursor-pointer mr-1" onClick={() => setOpen(!open)}>Click to choose</p>
                    <div className={`absolute top-[100%] left-0 transition-all border border-gray-400/[0.3] duration-700 overflow-hidden z-[20] ${open ? "h-[500px] opacity-1" : "h-0 opacity-0"}`}>
                        <div className="p-4 px-6 rounded shadow-lg bg-white dark:bg-dark rounded min-w-[250px]">
                            <h3 className="opacity-[0.6] py-2">Select the categories to search</h3>

                            <div className="border border-transparent border-t-slate-400/[0.7] border-b-slate-400/[0.7] py-6 mt-6">
                                {
                                    ['Physics', 'Philosophy', 'Science', 'Chemistry'].map((category, i) => (
                                        <p key={i} className={`p-2 rounded my-1 cursor-pointer ${query.indexOf(category) !== -1 ? "bg-primary text-white" : "hover:text-primary"}`} onClick={() => handleQuery(category)}>{category}</p>
                                    ))
                                }
                            </div>
                        </div>
                    </div>
                </div>
                <div className="border border-transparent border-l-gray-500/[0.1] px-2">
                    <h4 className="mb-1 text-[11px] opacity-[0.6]">Search by author/paper:</h4>
                    <select className="p-2 px-4 border dark:bg-dark border-slate-400/[0.3] rounded cursor-pointer mr-1" onChange={(e) => actions.setType(e.target.value)}>
                        <option>paper</option>
                        <option>author</option>
                    </select>
                </div>
                <div className="border border-transparent border-l-gray-500/[0.1] px-2">
                    <h4 className="mb-1 text-[11px] opacity-[0.6]">Search platform:</h4>
                    <select className="p-2 px-4 dark:bg-dark border border-slate-400/[0.3] rounded cursor-pointer mr-1" onChange={(e) => actions.setUrl(e.target.value)}>
                        <option value={0}>Semantic scholar</option>
                        <option value={1}>Springer</option>
                        <option value={2}>CORE</option>
                        <option value={3}>IEEE</option>
                    </select>
                </div>
            </div>
        </div>
    )
}

export default SearchBar;