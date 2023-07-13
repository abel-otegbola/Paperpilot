'use client'
import SettingBox from "@/components/settingsBox/page";
import axios from "axios";
import { useSession } from "next-auth/react";
import { useContext, useEffect, useState } from "react";
import { FaCheckCircle, FaTimes } from "react-icons/fa";
import { FiLoader, FiSave } from "react-icons/fi";
import { UserContext } from "../../layout";

const Recommendations = () => {
    const [recommendations, setRecommendations] = useState([])
    const [platforms, setPlatforms] = useState([])
    const [time, setTime] = useState([])
    const [value, setValue] = useState("")
    const {data:session} = useSession()
    const { userData, loading: userLoading, error: dataError } = useContext(UserContext)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState("")
    const [checkbox, setCheckbox] = useState()

    useEffect(() => {
        if(userData[0]) {
            setRecommendations(userData[0].subjects)
            setPlatforms(userData[0].platforms)
            setTime(userData[0].time)
        }
    }, [userData])

    const startDelivery = async () => {
        const res = await axios.get(`/api/startRecommendations/${session?.user.email}`)
            .catch(err => {
                setError('Failed to fetch data')
                setLoading(false)
                setError("")
                throw new Error("Failed to fetch data")
            })
            setLoading(false)
            return console.log(res)
    }

    useEffect(() => {
        if(checkbox) {
            startDelivery()
        }
    }, [checkbox])

    const addRecommendations = () => {
        if(recommendations.indexOf(value) === -1 && value !== "") {
            setRecommendations([...recommendations, value])
        }
    }

    const removeRecommendations = (index) => {
        setRecommendations(recommendations.filter(item => item !== index))
    }

    const handleOptions = (option, value) => {
        if(option === 0) {
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

    const handleSave = async() => {
        setLoading(true)
        const res = await axios.post(`/api/recommendations/${session?.user.email}`, {
            data: { subjects: recommendations, platforms, time, user: session?.user.email }
        })
        // Recommendation: handle errors
        .catch(err => {
            setError('Failed to fetch data')
            setLoading(false)
            setError("")
            throw new Error("Failed to fetch data")
        })
        setLoading(false)
        return console.log(res)
    }

    return (
        <div className="relative p-4">
            <h2 className="opacity-[0.3] font-semibold text-lg my-3">RECOMMENDATIONS</h2>
            {
                userLoading ? 
                <div className="absolute flex justify-center items-center h-[80vh] w-full top-0 left-0 text-primary text-2xl"><FiLoader className="animate-spin"/></div>
                :
                ""
            }
            <SettingBox text={"Recommendations"} subtext={"Set-up your research recommendations. Please select the categories that suite you."}>
                <div className="flex flex-wrap gap-2 pt-4 overflow-auto mb-2">
                    <input type="text" className="flex-1 bg-transparent border-gray-200/[0.1] border p-4 rounded-sm" placeholder="Type keywords, categories, tags and/or fields of study you will like to receive papers from" onChange={(e) => setValue(e.target.value)} />
                    <button className="bg-gradient-to-b from-fuchsia-600 to-primary text-white p-[12px] rounded px-6" onClick={() => addRecommendations()}>Add to recommendations</button>
                </div>
                {
                    recommendations.map((item, i) => (
                        <p key={i} className="md:w-[50%] my-1 flex p-2 px-4 rounded-sm bg-slate-200/[0.08] justify-between items-center"><span>{item}</span> <FaTimes onClick={() => removeRecommendations(item)} className="text-red-500 text-3xl p-2" /></p>
                    ))
                }
            </SettingBox>

            <SettingBox text={"Platforms"} subtext={"Select platforms to get papers from"}>
                <div className="flex flex-wrap gap-2 pt-4 overflow-auto">
                    { ["Springer", "Semantic Scholar", "CORE", "IEEE"].map((item, i) => (
                        <button key={i} onClick={() => handleOptions(1, item)} className={`flex items-center text-center rounded border p-[10px] ${platforms.indexOf(item) !== -1 ? "border-green-500 bg-green-600 text-white": "border-gray-500/[0.3]"}`}><FaCheckCircle className="opacity-[0.5] mr-2"/> {item}</button>
                    ))}
                </div>
            </SettingBox>

            <SettingBox text={"Time"} subtext={"How often do you want to receive the research papers"}>
                <div className="flex flex-wrap gap-2 pt-4 overflow-auto">
                    { ["Daily", "Every three days", "Weekly", "Monthly"].map((item, i) => (
                        <button key={i} onClick={() => handleOptions(2, item)} className={`flex items-center text-center rounded border p-[10px] ${time.indexOf(item) !== -1 ? "border-green-500 bg-green-600 text-white": "border-gray-500/[0.3]"}`}><FaCheckCircle className="opacity-[0.5] mr-2"/> {item}</button>
                    ))}
                </div>
            </SettingBox>

            <button className="flex gap-2 items-center w-fit p-[10px] px-6 rounded bg-gradient-to-b from-fuchsia-600 to-primary text-white" onClick={() => handleSave()}>{ !loading? <span className="flex items-center gap-2"><FiSave /> Save</span> : <span className="flex items-center gap-2"><FiLoader className="animate-spin" /> Loading</span>}</button>
            <div>
                <p className="mt-6 mb-1">Toggle delivery of research papers</p>
                <div className="flex gap-2 p-2 rounded bg-gray-300/[0.1]">
                    <input type="checkbox" onChange={(e) => setCheckbox(e.target.value)} />
                    <p>{checkbox ?  'Disable' : 'Enable'}</p>
                </div>
                
            </div>
        </div>
    )
}

export default Recommendations;