export default function ScoreHeader() {
  return (
    <div className="">
      {/* Row 1: Links + Real Mode */}
      <div className="flex items-center justify-between">
        {/* Left links */}
        <div className="flex space-x-28">
          <div className="underline text-black font-medium text-[18px]">
            Actual Score
          </div>
          <div className="underline text-black font-medium text-[18px]">
            Review Score
          </div>
          <div className="underline text-black font-medium text-[18px]">
            Results by Section
          </div>
        </div>

        {/* Real Mode (aligned with links) */}
        <div className="text-[#4C45F4] text-[16px] font-normal">
          Real Mode - 4 Sections (Experimental) - 35 Mins
        </div>
      </div>

      {/* Row 2: Completed (below Real Mode, right aligned) */}
      <div className="flex justify-end mt-1">
        <div className="text-[#787878] text-[16px] font-normal">
          Completed 23 days ago at 3:54pm ET on 4/15/21
        </div>
      </div>
    </div>
  )
}
