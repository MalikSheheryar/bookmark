import Image from "next/image"
import Button from "../Stats/Button"
import WatchButtons from "@/assets/icons/watch-button.svg"
import { Youtube } from "lucide-react"

const MonthSection = () => {
    return (
        <div>
            <div className="flex flex-col lg:flex-row lg:justify-between gap-[20px] lg:items-center">
                <div className="flex gap-4 ">
                    <h1 className="font-bold text-2xl">November</h1>
                    <p className="font-medium text-2xl">2023</p>
                </div>
                <div className="border-b-2 border-[#494949] w-[50%] hidden lg:block mx-[29px]" ></div>
                <div className='flex flex-col lg:flex-row lg:justify-between flex-wrap' >
                    <div className='flex gap-[9px] flex-wrap' >
                        <Button Title="Today" blue={true} />
                        <Button Title="Bookmarked" blue={false} />
                    </div>
                </div>
            </div>
            <div className="flex flex-col md:flex-row gap-4 mt-10">
                <div className="flex flex-col rounded-full bg-[#FF3B30] text-white w-[120px] md:w-[160px] h-[120px] md:h-[100px] lg:h-[125px] items-center justify-center text-center">
                    <p className="text-[18px] mb-[-15px]">WED</p>
                    <p className="text-[48px] mt-[-2px]">10</p>
                </div>
                <div className=" w-full border dark:border-white p-4 rounded-lg space-y-4">
                    <div className="flex flex-col lg:flex-row lg:justify-between gap-[15px] lg:gap-[37px]">
                        <div className="flex-col">
                            <h1 className="text-lg font-medium">Lecture: Game of the day</h1>
                            <p className="text-xl font-normal">10:30 PM - 11:30 PM </p>
                            <p className="text-sm font-normal">Duration: 1 hour</p>
                        </div>
                        <div className="mt-4">
                            <p className="text-sm text-[#494949] font-normal">Section</p>
                            <button className="bg-[#494949] text-white rounded-md px-4 py-1">LR</button>
                        </div>
                        <div>
                            <Image className="block dark:hidden w-[128px]" src={WatchButtons} />
                            <div className="hidden dark:block" >
                                <div className=" flex items-center rounded-[8px] border border-white px-[18px] py-[12px] font-semibold" >
                                    <Youtube size={20} className="mr-2" />
                                    Watch
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="border dark:border-white"></div>
                    <div className="flex  flex-col lg:flex-row lg:justify-between gap-[15px] lg:gap-[37px]">
                        <div className="flex-col">
                            <h1 className="text-lg font-medium">Lecture: Game of the day</h1>
                            <p className="text-xl font-normal">10:30 PM - 11:30 PM </p>
                            <p className="text-sm font-normal">Duration: 1 hour</p>
                        </div>
                        <div className="mt-4">
                            <p className="text-sm text-[#494949] font-normal">Section</p>
                            <button className="bg-[#494949] text-white rounded-md px-4 py-1">LR</button>
                        </div>
                        <div>
                            <Image className="block dark:hidden w-[128px]" src={WatchButtons} />
                            <div className="hidden dark:block" >
                                <div className=" flex items-center rounded-[8px] border border-white px-[18px] py-[12px] font-semibold" >
                                    <Youtube size={20} className="mr-2" />
                                    Watch
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            <div
                className="flex flex-col md:flex-row gap-4 mt-10">
                <div className="flex flex-col rounded-lg border dark:border-white p-6 items-center justify-center text-center">
                    <p className="text-4xl text-orange-600">WED</p>
                    <p className="text-4xl text-black dark:text-white">12</p>
                </div>
                <div className="border dark:border-white w-full flex p-4 gap-[15px] lg:gap-[37px]  flex-col lg:flex-row lg:justify-between rounded-lg">
                    <div className="flex-col">
                        <h1 className="text-lg font-medium">Lecture: Game of the day</h1>
                        <p className="text-xl font-normal">10:30 PM - 11:30 PM </p>
                        <p className="text-sm font-normal">Duration: 1 hour</p>
                    </div>
                    <div className="mt-4">
                        <p className="text-sm text-[#494949] font-normal">Section</p>
                        <button className="bg-[#494949] text-white rounded-md px-4 py-1">LR</button>
                    </div>
                    <div>
                        <Image className="block dark:hidden w-[128px]" src={WatchButtons} />
                        <div className="hidden dark:block" >
                            <div className=" flex items-center rounded-[8px] border border-white px-[18px] py-[12px] font-semibold" >
                                <Youtube size={20} className="mr-2" />
                                Watch
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default MonthSection