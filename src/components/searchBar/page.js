'use client'
import { useState } from "react";
import { FiSearch } from "react-icons/fi";

const SearchBar = ({ query, handleQuery }) => {
    const [open, setOpen] = useState(false)

    return (
        <div className="flex items-center border border-slate-400/[0.2] px-1 pl-4">
            <FiSearch className="text-lg opacity-[0.5] mr-2" />
            <input type="search" name="search" placeholder="Search papers..." className="bg-transparent border-transparent p-4 rounded flex-1 focus:outline-2 focus:outline-primary hover:border-primary" />
            
            <div className="relative">
                <p className="p-3 px-5 rounde-[30px] border border-slate-400/[0.3] rounded cursor-pointer mr-1" onClick={() => setOpen(!open)}>Categories</p>
                <div className={`absolute top-[100%] right-0 transition-all duration-700 overflow-hidden ${open ? "h-[500px]" : "h-0"}`}>
                    <div className="p-4 px-6 rounded shadow-lg bg-white dark:bg-dark rounded min-w-[250px]">
                        <h3 className="opacity-[0.6] py-2">Select the categories to search</h3>

                        <div className="border border-transparent border-t-slate-400/[0.7] border-b-slate-400/[0.7] py-6 mt-6">
                            {
                                ['Physics', 'Philosophy', 'Science', 'Chemistry'].map((category, i) => (
                                    <p key={i} className={`hover:bg-primary hover:text-white p-2 rounded my-1 ${query.indexOf(category) !== -1 ? "bg-primary text-white" : ""}`} onClick={() => handleQuery(category)}>{category}</p>
                                ))
                            }
                        </div>
                    </div>
                </div>
            </div>
            <p className="p-3 px-5 rounde-[30px] border border-slate-400/[0.3] bg-primary text-white rounded cursor-pointer">Search</p>
        </div>
    )
}

export default SearchBar;