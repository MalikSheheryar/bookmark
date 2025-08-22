import check from '@/assets/icons/check.svg'
import cross from '@/assets/icons/cross.svg'
import Image from 'next/image'

export default function SectionCard() {
  const sectionData = {
    title: 'Reading',
    subtitle: 'Comprehension',
    correct: 12,
    wrong: 8,
    skipped: 8,
    total: 28,
  }

  const percentage = Math.round((sectionData.correct / sectionData.total) * 100)
  const wrongPercentage = Math.round(
    (sectionData.wrong / sectionData.total) * 100
  )
  const skippedPercentage = Math.round(
    (sectionData.skipped / sectionData.total) * 100
  )

  return (
    <div
      className="bg-gradient-to-b from-[#E6FFFF] to-[#FFFFFF] border border-[#4C45F4] py-5 flex justify-center items-center px-10 ml-5"
      style={{
        width: '675px',
        height: '215px',
        boxShadow: '0px 4px 26px rgba(0,0,0,0.06)',
      }}
    >
      {/* Wrapper to center content */}
      <div className="flex gap-8 h-full w-full">
        {/* Left Side - Title, RC Circle, Score and Answer Blocks */}
        <div className="flex flex-col justify-between">
          {/* Title */}
          <div className="">
            <div className="text-[#858FDD] text-[18px] font-medium leading-tight">
              {sectionData.title} {sectionData.subtitle}
            </div>
          </div>

          {/* RC Circle and Score */}
          <div className="flex items-center gap-3 ">
            <div className="w-[60px] h-[60px] rounded-full bg-[#E1EFFE] border border-[#0866FF] flex items-center justify-center">
              <span className="text-[#020202] font-normal text-[18px]">RC</span>
            </div>
            <div>
              <div className="text-[16px] font-semibold text-[#020202]">
                {sectionData.correct}/{sectionData.total}
              </div>
              <div className="text-[13px] text-[#787878]">
                {percentage}% Correct
              </div>
            </div>
          </div>

          {/* Answer blocks - 8 per row */}
          <div className="flex flex-col gap-[2px]">
            {Array.from({ length: 3 }).map((_, rowIndex) => (
              <div key={rowIndex} className="flex gap-[2px]">
                {Array.from({ length: 8 }).map((_, colIndex) => {
                  const tileIndex = rowIndex * 8 + colIndex
                  if (tileIndex >= 20) return null

                  let bgColor = 'bg-gray-300'
                  if (tileIndex < sectionData.correct) {
                    bgColor = 'bg-[#6FDC95]'
                  } else if (
                    tileIndex <
                    sectionData.correct + sectionData.wrong
                  ) {
                    bgColor = 'bg-[#E96F6F]'
                  }

                  return (
                    <div
                      key={tileIndex}
                      className={`w-[23px] h-[23px] ${bgColor}`}
                    />
                  )
                })}
              </div>
            ))}
          </div>
        </div>

        {/* Right Side - Vertical Stats with Progress Bars */}
        <div
          className="flex-1 flex flex-col justify-center font-[Poppins]"
          style={{ marginLeft: '10px' }}
        >
          <div className="space-y-8">
            {/* Correct Stats */}
            <div className="flex items-center gap-4">
              <div className="flex items-center justify-center gap-1 px-2 py-1 rounded-full border bg-white min-w-[60px]">
                <Image src={check} alt="Correct" width={20} height={20} />
                <span className="font-semibold text-sm text-[#6FDC95]">
                  {sectionData.correct}
                </span>
              </div>

              <div className="flex items-center gap-3">
                <div
                  className="w-[173px] h-[24px] rounded-[8px]"
                  style={{ backgroundColor: '#6FDC95' }}
                />
                <span className="text-sm font-semibold text-[#020202] ml-2.5">
                  {percentage}%
                </span>
              </div>
            </div>

            {/* Wrong Stats */}
            <div className="flex items-center gap-4">
              <div className="flex items-center justify-center gap-1 px-2 py-1 rounded-full border bg-white min-w-[60px]">
                <Image src={cross} alt="Wrong" width={20} height={20} />
                <span className="font-semibold text-sm text-[#EA6F6E]">
                  {sectionData.wrong}
                </span>
              </div>

              <div className="flex items-center gap-3">
                <div
                  className="w-[25.6px] h-[24px] rounded-[8px]"
                  style={{ backgroundColor: '#EA6F6E' }}
                />
                <span className="text-sm font-semibold text-[#020202] ml-2.5">
                  {wrongPercentage}%
                </span>
              </div>
            </div>

            {/* Skipped Stats */}
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-full border bg-white min-w-[60px]">
                <div className="w-[20.65px] h-[20.65px] border border-[#787878] rounded-full flex items-center justify-center">
                  <div className="w-2 h-2 bg-[#494949]" />
                </div>
                <span className="font-semibold text-sm text-[#787878]">
                  {sectionData.skipped}
                </span>
              </div>

              <div className="flex items-center gap-3">
                <div
                  className="w-[8px] h-[24px] rounded-[8px]"
                  style={{ backgroundColor: '#D6D6D6' }}
                />
                <span className="text-sm font-semibold text-[#020202] ml-2.5">
                  {skippedPercentage}%
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
