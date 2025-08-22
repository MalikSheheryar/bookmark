'use client'
import FilterItem from '@/components/Dashboard/Calendar/FilterItem'
import Question from '@/components/Dashboard/Calendar/Question'
import Sections from '@/components/Dashboard/Calendar/Sections'
import Table from '@/components/Dashboard/Calendar/Table'
import Tests from '@/components/Dashboard/Calendar/Test'
import ByDifficulty from '@/components/Homepage/Bydifficulty/ByDifficulty'
import ByFamily from '@/components/Homepage/ByFamily/ByFamily'
import FlaggedQuestions from '@/components/Homepage/flagedQestion/flagedQuestion'
import SectionCard from '@/components/SectionCard'

import Header from '@/components/Header'
import ScoreHeader from '@/components/ScoreHeader'
import { useState } from 'react'

const SectionResultsPage = () => {
  const [table, setTable] = useState('Sections')
  const tableView = (table) => {
    setTable(table)
  }

  return (
    <div className="">
      <div className="bg-white py-6">
        <div className="max-w-6xl mx-auto">
          {/* Header Section */}
          <Header />

          {/* Score Overview Section */}
          <div className="mb-8">
            <ScoreHeader />

            <div className="flex items-center justify-center mt-10">
              {/* First LR Section */}
              <div
                className="relative w-[225px] h-[225px] flex-shrink-0"
                style={{ marginLeft: '-20px' }}
              >
                <svg
                  className="w-full h-full transform -rotate-90"
                  viewBox="0 0 223 223"
                >
                  <circle
                    cx="111.5"
                    cy="111.5"
                    r="100"
                    stroke="#DDF4FF"
                    strokeWidth="15"
                    fill="none"
                  />
                  <circle
                    cx="111.5"
                    cy="111.5"
                    r="100"
                    stroke="#0866FF"
                    strokeWidth="15"
                    fill="none"
                    strokeDasharray="471 628"
                    strokeLinecap="round"
                  />
                </svg>
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center leading-none">
                  <div className="text-[24px] font-normal text-[#020202] mb-[2px]">
                    LR
                  </div>
                  <div className="text-[64px] font-normal text-[#0866FF]">
                    -4
                  </div>
                  <div className="text-[13px] font-normal text-[#0866FF] mt-[4px]">
                    22 of 30
                  </div>
                </div>
              </div>

              {/* Second LR Section */}
              <div
                className="relative w-[225px] h-[225px] flex-shrink-0"
                style={{ marginLeft: '5px' }}
              >
                <svg
                  className="w-full h-full transform -rotate-90"
                  viewBox="0 0 223 223"
                >
                  <circle
                    cx="111.5"
                    cy="111.5"
                    r="100"
                    stroke="#DDF4FF"
                    strokeWidth="15"
                    fill="none"
                  />
                  <circle
                    cx="111.5"
                    cy="111.5"
                    r="100"
                    stroke="#0866FF"
                    strokeWidth="15"
                    fill="none"
                    strokeDasharray="471 628"
                    strokeLinecap="round"
                  />
                </svg>
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center leading-none">
                  <div className="text-[24px] font-normal text-[#020202] mb-[2px] relative">
                    LR
                  </div>
                  <div className="text-[64px] font-normal text-[#0866FF]">
                    -2
                  </div>
                  <div className="text-[13px] font-normal text-[#0866FF] mt-[4px]">
                    22 of 30
                  </div>
                </div>
              </div>

              {/* Section Card - Now in Same Row */}
              <div className="flex-1 max-w-2xl">
                <SectionCard />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-[20px] md:mt-[30px] lg:mt-[60px]">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center flex-wrap gap-[8px] my-[30px]">
            <FilterItem dropdown={false} filter="Date & Time" />
            <FilterItem dropdown={true} filter="Amount" />
            <FilterItem dropdown={false} filter="Date & Time" />
            <FilterItem dropdown={false} filter="Date & Time" />
            <FilterItem dropdown={false} filter="Date & Time" />
            <div className="text-[#0866FF] text-[14px] font-semibold cursor-pointer hover:text-[#0831ff] px-[8px]">
              Clear Filter
            </div>
          </div>

          <div>
            <div className="overflow-x-auto">
              {table === 'Sections' && <Table />}
              {table === 'Questions' && <Question />}
              {table === 'Tests' && <Tests />}
            </div>
            <div className="px-[40px] py-[22px] flex items-center justify-between">
              <div className="text-[#787878] dark:text-white">
                Viewing 1-20 of 90 results
              </div>
              <div className="flex items-center gap-[13px]">
                <div className="border border-[#D9DEE4] cursor-pointer text-[#D9DEE4] dark:border-[#787878] dark:text-[#787878] rounded-[7px] p-[10px]">
                  Previous
                </div>
                <div className="border border-[#787878] cursor-pointer text-black dark:text-white dark:border-white rounded-[7px] p-[10px]">
                  Next
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-[20px] md:mt-[30px] lg:mt-[60px]">
        <div className="max-w-6xl mx-auto">
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
    </div>
  )
}

export default SectionResultsPage
