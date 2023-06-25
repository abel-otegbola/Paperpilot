'use client'
import SettingBox from "@/components/settingsBox/page";
import { useState } from "react";
import { FaCheckCircle } from "react-icons/fa";
import { FiSave } from "react-icons/fi";

const Recommendations = () => {
    const [options, setOptions] = useState({ recommendations: [], platforms: [], time: [] })

    const handleOptions = (option, value) => {
        // let newOption = options[option].indexOf(value) === -1 ? options[option].push(value) : {...options, option: option.filter(item => item === value)}
        setOptions({  })
        console.log(options["recommendations"])
    }

    return (
        <div className="p-4">
            <h2 className="opacity-[0.3] font-semibold text-lg my-3">RECOMMENDATIONS</h2>
            <SettingBox text={"Recommendations"} subtext={"Set-up your research recommendations. Please select the categories that suite you."}>
                <div className="flex flex-wrap gap-2 pt-4 overflow-auto">
                    { ["Physics", "Mathematics", "Medicine", "Nanotechnology", "BioChemistry", "History", "Chemistry"].map((item, i) => (
                        <button key={i} onClick={() => handleOptions("recommendations", item)} className="flex items-center text-center rounded border border-gray-500/[0.3] p-[10px] hover:border-primary hover:text-primary"><FaCheckCircle className="opacity-[0.5] mr-2"/> {item}</button>
                    ))}
                </div>
            </SettingBox>

            <SettingBox text={"Platforms"} subtext={"Select platforms to get papers from"}>
                <div className="flex flex-wrap gap-2 pt-4 overflow-auto">
                    { ["Springer", "Semantic", "CORE"].map((item, i) => (
                        <button key={i} onClick={() => handleOptions("platforms", item)} className="flex items-center text-center rounded border border-gray-500/[0.3] p-[10px] hover:border-primary hover:text-primary"><FaCheckCircle className="opacity-[0.5] mr-2"/> {item}</button>
                    ))}
                </div>
            </SettingBox>

            <SettingBox text={"Time"} subtext={"How often do you want to receive the research papers"}>
                <div className="flex flex-wrap gap-2 pt-4 overflow-auto">
                    { ["Everday", "Every two days", "Every three days", "Weekly", "Every two weeks", "Monthly"].map((item, i) => (
                        <button key={i} onClick={() => handleOptions("time", item)} className="flex items-center text-center rounded border border-gray-500/[0.3] p-[10px] hover:border-primary hover:text-primary"><FaCheckCircle className="opacity-[0.5] mr-2"/> {item}</button>
                    ))}
                </div>
            </SettingBox>

            <button className="flex gap-2 items-center w-fit p-3 px-6 rounded bg-primary text-white"><FiSave /> Save</button>
        </div>
    )
}

export default Recommendations;