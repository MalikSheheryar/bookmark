import IconButton from '@/components/Buttons/IconButton'
import { Search } from 'lucide-react'


const HeaderDashboard = ({ Title }) => {

    return (
        <div className='flex justify-between ' >
            {/* title of the header //**username**\\ */}
            <div className=' w-fit h-fit' >
                <div className=' text-[48px]  md:text-[54px] font-bold leading-[44px] '>
                    <div className='relative w-fit' >
                        Hi {Title}
                        <div className='lg:w-[11px] w-[12px] h-[11px]  bg-btn rounded-full absolute bottom-1  right-[-12px]'></div>
                    </div>
                </div>
            </div>
            <div className="flex flex-col gap-[20px]" >
                {/* input  */}
                <div className='flex items-end md:items-center flex-col md:flex-row justify-end gap-[20px]' >
                    <div className='relative w-fit'>
                        <div className='absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 dark:text-white'>
                            <Search size={20} />
                        </div>
                        <input
                            type="text"
                            placeholder="Search..."
                            className='pl-10 pr-4 py-2 w-[125px] sm:w-[180px] md:w-[200px] xl:w-auto rounded-lg bg-[#F7F8FA] dark:bg-[#272727] dark:text-white dark:placeholder:text-white outline-none'
                        />
                    </div>
                    <div className='md:w-[140px]' >
                        <IconButton title="Create" count={'+'} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HeaderDashboard