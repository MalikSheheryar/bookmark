import Image from "next/image";
import FlaggedProgress from '@/assets/icons/flgeedprogress.svg';
import flaggedCircle from '@/assets/icons/flaggedCircle.svg';
import Bar from "../ByFamily/Bar";
import CircularProgressBar from "./CircularBar";

const FlaggedQuestions = () => {
    const data = {
        correct: 25,
        inappropriate: 55,
        incorrect: 20
    };
    return (
        <>
            <div className="flex flex-col lg:flex-row gap-[60px]">
                {/* Left Column */}
                <div className="w-full dark:text-white">
                    <div className="font-medium text-[34px] mb-[10px] dark:text-white">Flagged Questions</div>
                    <div className="border-b border-black dark:border-white"></div>
                    <div className="my-[30px] flex flex-wrap justify-center md:justify-start gap-[30px] items-center">
                        <div className="flex gap-[12px] items-center" >
                            <div className="w-[22px] h-[22px] bg-[#6ADD95] rounded-full"></div>
                            <p>Correct</p>
                        </div>
                        <div className="flex gap-[12px] items-center" >
                            <div className="w-[22px] h-[22px] bg-[#CECFD2] rounded-full"></div>
                            <p>Inappropriate</p>
                        </div>
                        <div className="flex gap-[12px] items-center" >
                            <div className="w-[22px] h-[22px] bg-[#E96F6F] rounded-full"></div>
                            <p>Incorrect</p>
                        </div>
                    </div>
                    <Bar />
                </div>

                {/* Right Column */}
                <div className="w-full dark:text-white">
                    <h1 className="font-medium text-[34px] mb-[10px] dark:text-white">Flagged Questions</h1>
                    <div className="border-b border-black dark:border-white"></div>
                    <div className="my-[30px] flex flex-wrap justify-center md:justify-start gap-[30px] items-center">
                        <div className="flex gap-[12px] items-center" >
                            <div className="w-[22px] h-[22px] bg-[#6ADD95] rounded-full"></div>
                            <p>Correct</p>
                        </div>
                        <div className="flex gap-[12px] items-center" >
                            <div className="w-[22px] h-[22px] bg-[#CECFD2] rounded-full"></div>
                            <p>Inappropriate</p>
                        </div>
                        <div className="flex gap-[12px] items-center" >
                            <div className="w-[22px] h-[22px] bg-[#E96F6F] rounded-full"></div>
                            <p>Incorrect</p>
                        </div>
                    </div>
                    <div className="flex justify-center">
                        <CircularProgressBar data={data} />
                    </div>
                </div>
            </div>
        </>
    );
};

export default FlaggedQuestions;
