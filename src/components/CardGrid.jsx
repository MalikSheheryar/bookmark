'use client'

import { useState } from 'react'
import triangleIndicator from '@/assets/icons/triangle-indicator.svg'
import Image from 'next/image'
import check from '@/assets/icons/check.svg'
import cross from '@/assets/icons/cross.svg'

export default function CardGrid() {
  const [selected, setSelected] = useState(0)

  // Updated with 20 total questions, no skipped
  const sections = Array(4).fill({
    title: 'Reading',
    subtitle: 'Comprehension',
    correct: 12,
    wrong: 8,
    skipped: 0,
    total: 20,
  })

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 pt-10">
      {sections.map((s, index) => {
        const isSelected = index === selected
        const percentage = Math.round((s.correct / s.total) * 100)

        return (
          <div
            key={index}
            onClick={() => setSelected(index)}
            className={`w-[275px] h-[330px] relative cursor-pointer transition-all
              ${
                isSelected
                  ? 'bg-gradient-to-b from-[#E6FFFF] to-[#FFFFFF] border border-[#4C45F4]'
                  : 'bg-[#FBF6FF]'
              }
              rounded-none mx-auto flex items-center justify-center
            `}
            style={{ boxShadow: '0px 4px 26px rgba(0,0,0,0.08)' }}
          >
            {/* Centered wrapper */}
            <div className="flex flex-col items-start justify-start">
              {/* Title */}
              <div className="mb-5">
                <div className="text-[#858FDD] text-[16px] font-medium leading-tight">
                  {s.title}
                </div>
                <div className="text-[#858FDD] text-[16px] font-medium leading-tight">
                  {s.subtitle}
                </div>
              </div>

              {/* RC Circle + Score */}
              <div className="flex items-center mb-5">
                <div className="w-[60px] h-[60px] rounded-full bg-[#E1EFFE] border border-[#0866FF] flex items-center justify-center">
                  <span className="text-[#020202] font-normal text-[18px]">
                    RC
                  </span>
                </div>
                <div className="ml-3 text-left">
                  <div className="text-[16px] font-semibold text-[#020202]">
                    {s.correct}/{s.total}
                  </div>
                  <div className="text-[13px] text-[#787878]">
                    {percentage}% Correct
                  </div>
                </div>
              </div>

              {/* Icons row */}
              <div className="flex items-center gap-3 mb-4">
                {/* Correct Icon */}
                <div className="flex items-center justify-center gap-1 px-2 py-1 rounded-full border bg-white">
                  <Image
                    src={check || '/placeholder.svg'}
                    alt="Correct"
                    width={20}
                    height={20}
                  />
                  <span className="text-green-600 font-medium text-xs">
                    {s.correct}
                  </span>
                </div>

                {/* Wrong Icon */}
                <div
                  className={`flex items-center justify-center gap-1 px-2 py-1 rounded-full border ${
                    isSelected ? 'bg-transparent' : 'bg-white'
                  }`}
                >
                  <Image
                    src={cross || '/placeholder.svg'}
                    alt="Wrong"
                    width={20}
                    height={20}
                  />
                  <span className="text-red-500 font-medium text-xs">
                    {s.wrong}
                  </span>
                </div>

                {/* Skipped Radio */}
                <div
                  className={`flex items-center gap-1.5 px-2.5 py-1.5 rounded-full border ${
                    isSelected ? 'bg-transparent' : 'bg-white'
                  } cursor-pointer`}
                  onClick={() => setSelected(index)}
                >
                  <div className="w-[20.65px] h-[20.65px] border border-[#787878] rounded-full flex items-center justify-center">
                    {isSelected && <div className="w-2 h-2 bg-[#494949]" />}
                  </div>
                  <span className="text-[#787878] font-medium text-sm">
                    {s.skipped}
                  </span>
                </div>
              </div>

              {/* Answer blocks */}
              <div className="flex flex-wrap w-[200px] ">
                {Array.from({ length: s.total }).map((_, i) => (
                  <div
                    key={i}
                    className={`w-[23px] h-[23px] mr-[2px] mb-[2px] ${
                      i < s.correct ? 'bg-[#6FDC95]' : 'bg-[#E96F6F]'
                    }`}
                  />
                ))}
              </div>
            </div>

            {/* Indicator */}
            {isSelected && (
              <div className="absolute -bottom-[47px] left-0 right-0 flex justify-center z-10">
                <Image
                  src={triangleIndicator || '/placeholder.svg'}
                  alt="Selected indicator"
                  width={300}
                  height={50}
                  className="max-w-[280px]"
                />
              </div>
            )}
          </div>
        )
      })}
    </div>
  )
}
