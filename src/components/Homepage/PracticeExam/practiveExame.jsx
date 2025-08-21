import { CircularProgress } from "@/components/Dashboard/Stats/CircleProgress";
import ProgressHome from "../progress-home/progressHome";
import Image from "next/image";
import scoreDistribution from '@/assets/icons/score-distribute.svg'
const PracticeExame = () => {
    return (
        <div className="">
            {/* Header Section */}
            <div className="flex flex-wrap justify-between items-start gap-6">
                <div className="w-full sm:w-auto">
                    <h1 className="font-medium text-[34px] text-center md:text-start dark:text-white">Practice Exam 1 (Dec 2014)</h1>
                </div>
                <div className="flex-col justify-center items-center md:justify-end text-center md:text-right md:items-end w-full sm:w-auto">
                    <p className="text-[#0866FF] font-normal text-[20px]">View Answers & Explanation</p>
                    <p className="text-[#787878] font-normal">Completed 23 days ago at 3:54pm ET on 4/15/21</p>
                </div>
            </div>

            {/* Main Content Section */}
            <div className="mt-[48px] flex flex-col lg:flex-row items-center flex-wrap  gap-[80px]">
                {/* Circular Progress Section */}
                <div className="flex justify-center  justify-selft-center items-center ">
                    <div className="w-full ">
                        <CircularProgress
                            percentage={75}
                            title="Progress"
                            size={223}
                            bgColor=""
                            color="stroke-[#0866FF]"
                            strokeWidth={21}
                        />
                    </div>
                </div>

                {/* Progress Bars and Information */}
                <div className="w-full lg:w-[calc(50%-10px)] flex flex-col gap-[48px]">
                    <div className="flex justify-between dark:text-white w-full gap-[39px]">
                        <p className="flex gap-2 dark:text-white text-[24px]">Correct <span className="font-bold">75</span></p>
                        <ProgressHome color="bg-[#6ADD95]" progress="w-[71%]" />
                    </div>
                    <div className="flex justify-between dark:text-white w-full gap-[39px]">
                        <p className="flex gap-2 dark:text-white text-[24px]">Correct <span className="font-bold">75</span></p>
                        <ProgressHome color="bg-[#E96F6F]" progress="w-[35%]" />
                    </div>
                    <div className="flex justify-between dark:text-white w-full gap-[39px]">
                        <p className="flex gap-2 dark:text-white text-[24px]">Correct <span className="font-bold">75</span></p>
                        <ProgressHome color="bg-[#CECFD2]" progress="w-[19%]" />
                    </div>
                </div>
            </div>
            <div className="mt-[80px]">
                <Image src={scoreDistribution} alt="" className="w-full" />
            </div>

        </div>
    );
}

export default PracticeExame;
