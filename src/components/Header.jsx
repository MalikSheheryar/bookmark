import Image from 'next/image'
import ScreenShot from '@/assets/icons/ScreenShot.svg'

export default function Header() {
  return (
    <div className="flex items-center justify-between mb-10 py-4">
      {/* Title */}
      <h1 className="font-semibold text-lg rounded-lg p-2 bg-[#ECEEF1] border border-[#E3E3E3]">
        <span className="text-[#0866FF]">PrepTest 139</span>
        <span className="text-[#5B6170]"> - June 2013.</span>
      </h1>

      {/* Action Buttons */}
      <div className="flex items-center gap-4">
        {/* Screenshot Button */}
        <button className="flex items-center gap-2 px-4 py-2 font-poppins font-semibold text-black cursor-pointer bg-white border border-[#BFBFBF] rounded-[12px] text-[18px]">
          <span>ScreenShot</span>
          <Image
            src={ScreenShot} // 👈 place file inside public/icons/
            alt="Screenshot"
            width={26}
            height={26}
            className="w-[25.5px] h-[25.5px]"
          />
        </button>

        {/* History Button */}
        <button className="px-4 py-2 font-poppins font-semibold text-black cursor-pointer bg-white border border-[#BFBFBF] rounded-[12px] text-[18px]">
          Exit to History
        </button>

        {/* Dashboard Button */}
        <button className="px-4 py-2 font-poppins font-semibold text-black cursor-pointer bg-white border border-[#BFBFBF] rounded-[12px] text-[18px]">
          Exit to Dashboard
        </button>
      </div>
    </div>
  )
}
