import { Plus } from "lucide-react"

const StartNewSection = () => {
    return (
        <div>
            <div className="flex justify-between flex-col md:flex-row" >
                <div className='text-[#A6A3A3] pt-[10px] dark:text-[#A6A3A3] font-medium text-[16px] md:text-[20px] max-w-[373px] pl-[3px] leading-[130%]' >
                    Here you can track all of your key stats and access key features.
                </div>

                <div className="w-fit cursor-pointer self-end mt-[20px] py-[12px] px-[20px] text-[16px] lg:text-[20px] font-semibold border border-[#BFBFBF] dark:border-white rounded-[12px] text-black dark:text-white flex items-center">
                    <Plus className="mr-[10px] text-[18.19px]" />
                    <span>Start New Section</span>
                </div>
            </div>
            <div className="flex justify-center items-center md:justify-between flex-col md:flex-row mt-[25px] lg:mt-[38px]  bg-[#F5F6F8] dark:bg-[#272727] rounded-[10px] py-[10px] px-[14px]" >
                <div className="text-[#374151] dark:text-[#D1D5DB]" >
                    <span className="font-semibold mr-[14px]"  >Recomendation</span>
                    Block fraudsters - without affecting your legitimate customers-by validating IDs
                </div>
                <div className="text-[#0866FF] font-semibold" >
                    Try Strip Identity
                </div>
            </div>
        </div>
    )
}

export default StartNewSection