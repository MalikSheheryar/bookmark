import { ModeToggle } from '@/components/Buttons/ModeToggle'
import { Search } from 'lucide-react'


const Header = ({ Title }) => {

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
            <div className={`flex items-center md:flex-row gap-[20px] lg:gap-[30px] xl:gap-[42px]`} >
                {/* input  */}
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

                {/* Mode switcher //**Light and Dark Mode**\\ */}

                <div className='flex gap-[5px] absolute top-0 md:relative md:gap-[15px] items-center ' >
                    <div className='text-[#494949] dark:text-white text-sm md:text-md' >Dark Mode</div>
                    <ModeToggle />
                </div>

            </div>
        </div>
    )
}

export default Header



//     <div className='flex items-center ' >
//         <IconButton source={CalendarCheck} title="Today" />
//         <IconButton source={Calendar} title="Select" />
//         <IconButton source={Slider} title="Filter" count={'12'} />
//     </div>

{/* <IconButton title="Create" count={'+'} /> : null */ }
