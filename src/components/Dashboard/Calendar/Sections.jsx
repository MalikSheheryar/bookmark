"use client"

import { useState } from "react"

const sections = [
    {
        title: "Sections",
        count: 156
    },
    {
        title: "Tests",
        count: 156
    },
    {
        title: "Questions",
        count: 156
    },
    {
        title: "Drills",
        count: 156
    },
    {
        title: "Homeworks",
        count: 156
    },
    {
        title: "Pdfs",
        count: 156
    },

]
const Sections = ({ tableview, width }) => {
    const [active, setActive] = useState("Sections")

    const handleClick = (title) => {
        setActive(title)
        tableview(title)
    }
    return (
        <div className="flex gap-[20px]" >
            {
                sections.map((item) => {
                    return (
                        <div key={item.title} onClick={() => handleClick(item.title)} className={`cursor-pointer rounded-[10px] ${width == "dashboard" ? "min-w-[40%]" : "min-w-[40%] md:min-w-[197px]"}  p-[20px]  border ${active == item.title ? "text-[#0866FF] border-[#0866FF] dark:text-[#0866FF] dark:border-[#0866FF]" : "dark:text-white text-[#5B6170] border-[#D9DEE4]"} `} >
                            <div className="text-[18px] font-[500] leading-tight" >{item.title}</div>
                            <div className="text-[24px] font-semibold" >{item.count}</div>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Sections