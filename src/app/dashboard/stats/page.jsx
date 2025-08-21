"use client"

import FilterItem from '@/components/Dashboard/Calendar/FilterItem'
import MonthSection from '@/components/Dashboard/Calendar/MonthSection'
import Question from '@/components/Dashboard/Calendar/Question'
import Sections from '@/components/Dashboard/Calendar/Sections'
import Table from '@/components/Dashboard/Calendar/Table'
import Tests from '@/components/Dashboard/Calendar/Test'
import HeaderDashboard from '@/components/Dashboard/Header/HeaderDashbaord'
import { ChartProgress } from '@/components/Dashboard/Stats/chart-prgress'
import Progress from '@/components/Dashboard/Stats/Progress'
import StartSection from '@/components/Dashboard/Stats/StartSection'
import { useState } from 'react'

const page = () => {
    const [table, setTable] = useState("Sections")
    const tableView = (table) => {
        setTable(table)
    }
    return (
        <div className='mb-[30px] mx-[2%] md:mx-[5%] xl:mx-[8%] mt-[20px] md:mt-[30px] lg:mt-[60px] ' >
            <HeaderDashboard Title={"Saad"} />
            <div className='relative' >
                <StartSection />
            </div>
            <div className='grid grid-cols-1 md:grid-cols-12 gap-[19px] mt-[30px]'>
                <div className='col-span-12 md:col-span-6 md:min-w-auto  overflow-x-auto'>
                    <Progress />
                </div>
                <div className=' col-span-12 md:col-span-6 md:min-w-auto overflow-x-auto'>
                    <ChartProgress />
                </div>
            </div>

            <div className="grid grid-cols-12 gap-[19px] mt-[30px]">
                <div className="col-span-12 md:col-span-6 p-[20px] border border-gray-200 rounded-[10px]">
                    <div className="flex items-center overflow-x-auto min-h-[50px] gap-[8px] mb-[30px]">
                        <FilterItem dropdown={false} filter="Date" />
                        <FilterItem dropdown={true} filter="Amount" />
                        <FilterItem dropdown={false} filter="Currency" />
                        <FilterItem dropdown={false} filter="Status" />
                        <FilterItem dropdown={false} filter="Status" />
                    </div>
                    <div className="my-[30px] flex gap-[20px] overflow-x-auto">
                        <Sections width='dashboard' tableview={tableView} />
                    </div>
                    <div className="overflow-x-auto">
                        {table === "Sections" && <Table />}
                        {table === "Questions" && <Question />}
                        {table === "Tests" && <Tests />}
                    </div>
                </div>

                {/* Second Section with MonthSection */}
                <div className="col-span-12 md:col-span-6 p-[20px] border border-gray-200 rounded-[10px]">
                    <MonthSection />
                </div>
            </div>

        </div>
    )
}

export default page