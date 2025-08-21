import Bar from '../ByFamily/Bar';

const ByDifficulty = () => {
    return (
        <div className='mt-[70px]' >
            <div className="font-[500] text-[34px] mb-[10px] dark:text-white">By Difficulty</div>
            <div className="border-b border-black dark:border-white"></div>

            <div className="mt-[40px] space-y-[20px]">
                <div className="flex flex-col md:flex-row items-start md:items-center gap-[10px] md:gap-[40px] md:justify-between">
                    <button className="border mb-[10px] md:mb-0 border-red-400 rounded-md w-[137px] py-[2.5px] text-red-600 font-normal">High</button>
                    <Bar />
                </div>
                <div className="flex flex-col items-start md:items-center  gap-[10px] md:gap-[40px] md:flex-row md:justify-between">
                    <button className="border mb-[10px] md:mb-0 border-yellow-400 rounded-md w-[137px] py-[2.5px] text-yellow-600 font-normal">Medium</button>
                    <Bar />

                </div>
                <div className="flex items-start md:items-center  gap-[10px] md:gap-[40px] flex-col md:flex-row md:justify-between">
                    <button className="border mb-[10px] md:mb-0 border-green-400 rounded-md w-[137px] py-[2.5px] text-green-600 font-normal">Low</button>
                    <Bar />

                </div>
            </div>
        </div>
    )
}
export default ByDifficulty;