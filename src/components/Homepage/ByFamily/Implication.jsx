import Bar from './Bar'

const Implication = () => {
    return (
        <div className="w-full">
            <div className="flex flex-col gap-[10px] md:gap-[40px] md:items-center md:flex-row justify-between mt-[40px] w-full">
                <p className="text-[24px] font-semibold min-w-fit pr-[40px]">Implications</p>
                <div className="w-full">
                    <Bar />
                </div>
            </div>
            <div className="flex gap-[10px] md:gap-[40px]  items-start md:items-center flex-col md:flex-row justify-between my-[10px] w-full">
                <p className="text-[24px] min-w-[200px] text-start font-normal ml-[40px]">Medium</p>
                <div className="w-full md:pl-[20px] " >
                    <Bar />
                </div>
            </div>
            <div className="flex gap-[10px] md:gap-[40px]  items-start md:items-center flex-col md:flex-row justify-between my-[10px] w-full">
                <p className="text-[24px] min-w-[200px] text-start font-normal ml-[40px]">Low</p>
                <div className="w-full md:pl-[20px] " >
                    <Bar />
                </div>
            </div>
            <div className="flex gap-[10px] md:gap-[40px]  items-start md:items-center flex-col md:flex-row justify-between my-[10px] w-full">
                <p className="text-[24px] min-w-[200px] text-start font-normal ml-[40px]">Medium</p>
                <div className="w-full md:pl-[20px] " >
                    <Bar />
                </div>
            </div>
            <div className="flex gap-[10px] md:gap-[40px]  items-start md:items-center flex-col md:flex-row justify-between my-[10px] w-full">
                <p className="text-[24px] min-w-[200px] text-start font-normal ml-[40px]">Low</p>
                <div className="w-full md:pl-[20px] " >
                    <Bar />
                </div>
            </div>
        </div>
    )
}

export default Implication
