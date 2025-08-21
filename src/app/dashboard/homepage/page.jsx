"use client"
import FilterItem from "@/components/Dashboard/Calendar/FilterItem";
import Question from "@/components/Dashboard/Calendar/Question";
import Sections from "@/components/Dashboard/Calendar/Sections";
import Table from "@/components/Dashboard/Calendar/Table";
import Tests from "@/components/Dashboard/Calendar/Test";
import HeaderDashboard from "@/components/Dashboard/Header/HeaderDashbaord";
import StartSection from "@/components/Dashboard/Stats/StartSection";
import ByDifficulty from "@/components/Homepage/Bydifficulty/ByDifficulty";
import ByFamily from "@/components/Homepage/ByFamily/ByFamily";
import FlaggedQuestions from "@/components/Homepage/flagedQestion/flagedQuestion";
import HomeHeader from "@/components/Homepage/HomeHeader";
import PracticeExame from "@/components/Homepage/PracticeExam/practiveExame";
import ServicesCards from "@/components/Homepage/ServicesCards/ServicesCards";
import { useState } from "react";

const page = () => {
    const [table, setTable] = useState("Sections")
    const tableView = (table) => {
        setTable(table)
    }
    const [activeCard, setActiveCard] = useState(2);

    const services = [
        { id: 1, title: "Reading Comprehension" },
        { id: 2, title: "Reading Comprehension" },
        { id: 3, title: "Reading Comprehension" },
        { id: 4, title: "Reading Comprehension" }
    ];

    return (
        <div className="" >
            <div className="mx-[2%] md:mx-[5%] xl:mx-[8%] mt-[20px] md:mt-[30px] lg:mt-[60px]" >
                <HomeHeader title={"Saad"} />
                {/* <div className='relative' >
                    <StartSection />
                </div> */}

                <div className="mt-10">
                    <PracticeExame />
                </div>
            </div>

            {/* Service Cards */}
            <div className=" my-[70px] mx-[2%] md:mx-[5%] xl:mx-[8%] flex overflow-x-auto">
                {services.map((service) => (
                    <ServicesCards
                        key={service.id}
                        id={service.id}
                        title={service.title}
                        activeCard={activeCard}
                        setActiveCard={setActiveCard}
                    />
                ))}
            </div>

            {/* Tables */}

            <div className="mx-[2%] md:mx-[5%] xl:mx-[8%] mt-[20px] md:mt-[30px] lg:mt-[60px]" >
                <div className='flex items-center flex-wrap gap-[8px] my-[30px]' >
                    <FilterItem dropdown={false} filter="Date & Time" />
                    <FilterItem dropdown={true} filter="Amount" />
                    <FilterItem dropdown={false} filter="Date & Time" />
                    <FilterItem dropdown={false} filter="Date & Time" />
                    <FilterItem dropdown={false} filter="Date & Time" />
                    <div className='text-[#0866FF] text-[14px] font-semibold cursor-pointer hover:text-[#0831ff] px-[8px]' >
                        Clear Filter
                    </div>
                </div>
                <div className='my-[30px] flex gap-[20px] overflow-x-auto' >
                    <Sections tableview={tableView} />
                </div>
                <div >
                    <div className="overflow-x-auto" >
                        {table === "Sections" && <Table />}
                        {table === "Questions" && <Question />}
                        {table === "Tests" && <Tests />}
                    </div>
                    <div className='px-[40px] py-[22px] flex items-center justify-between' >
                        <div className='text-[#787878] dark:text-white' >Viewing 1-20 of 90 results</div>
                        <div className='flex items-center gap-[13px]' >
                            <div className='border border-[#D9DEE4] cursor-pointer text-[#D9DEE4] dark:border-[#787878] dark:text-[#787878] rounded-[7px] p-[10px]' >Previous</div>
                            <div className='border border-[#787878] cursor-pointer text-black dark:text-white dark:border-white rounded-[7px] p-[10px]'>Next</div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="mx-[2%] md:mx-[5%] xl:mx-[8%] mt-[20px] md:mt-[30px] lg:mt-[60px]" >

                <div>
                    <ByDifficulty />
                </div>
                <div className="mt-[70px]">
                    <ByFamily />
                </div>
                <div className="mt-[70px]">
                    <FlaggedQuestions />
                </div>
            </div>
        </div>

    )
}
export default page;