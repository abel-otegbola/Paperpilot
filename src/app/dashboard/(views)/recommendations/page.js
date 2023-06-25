'use client'
import SettingBox from "@/components/settingsBox/page";
import { useState } from "react";
import { FaCheckCircle } from "react-icons/fa";
import { FiSave } from "react-icons/fi";

const Recommendations = () => {
    const [recommendations, setRecommendations] = useState([])
    const [platforms, setPlatforms] = useState([])
    const [time, setTime] = useState([])

    const handleOptions = (option, value) => {
        if(option === 0) {
            recommendations.indexOf(value) === -1 ?
            setRecommendations([...recommendations, value])
            :
            setRecommendations(recommendations.filter(item => item !== value))
        }
        else if(option === 1) {
            platforms.indexOf(value) === -1 ?
            setPlatforms([...platforms, value])
            :
            setPlatforms(platforms.filter(item => item !== value))
        }
        else if(option === 2) {
            setTime(value)
        }
    }

    return (
        <div className="p-4">
            <h2 className="opacity-[0.3] font-semibold text-lg my-3">RECOMMENDATIONS</h2>
            <SettingBox text={"Recommendations"} subtext={"Set-up your research recommendations. Please select the categories that suite you."}>
                <div className="flex flex-wrap gap-2 pt-4 overflow-auto">
                    { ["Physics", "Mathematics", "Medicine", "Nanotechnology", "BioChemistry", "History", "Chemistry"].map((item, i) => (
                        <button key={i} onClick={() => handleOptions(0, item)} className={`flex items-center text-center rounded border p-[10px] ${recommendations.indexOf(item) !== -1 ? "border-green-500 bg-green-600 text-white": "border-gray-500/[0.3]"}`}><FaCheckCircle className="opacity-[0.5] mr-2"/> {item}</button>
                    ))}
                </div>
            </SettingBox>

            <SettingBox text={"Platforms"} subtext={"Select platforms to get papers from"}>
                <div className="flex flex-wrap gap-2 pt-4 overflow-auto">
                    { ["Springer", "Semantic", "CORE"].map((item, i) => (
                        <button key={i} onClick={() => handleOptions(1, item)} className={`flex items-center text-center rounded border p-[10px] ${platforms.indexOf(item) !== -1 ? "border-green-500 bg-green-600 text-white": "border-gray-500/[0.3]"}`}><FaCheckCircle className="opacity-[0.5] mr-2"/> {item}</button>
                    ))}
                </div>
            </SettingBox>

            <SettingBox text={"Time"} subtext={"How often do you want to receive the research papers"}>
                <div className="flex flex-wrap gap-2 pt-4 overflow-auto">
                    { ["Everday", "Every two days", "Every three days", "Weekly", "Every two weeks", "Monthly"].map((item, i) => (
                        <button key={i} onClick={() => handleOptions(2, item)} className={`flex items-center text-center rounded border p-[10px] ${time.indexOf(item) !== -1 ? "border-green-500 bg-green-600 text-white": "border-gray-500/[0.3]"}`}><FaCheckCircle className="opacity-[0.5] mr-2"/> {item}</button>
                    ))}
                </div>
            </SettingBox>

            <button className="flex gap-2 items-center w-fit p-3 px-6 rounded bg-primary text-white"><FiSave /> Save</button>
        </div>
    )
}

export default Recommendations;