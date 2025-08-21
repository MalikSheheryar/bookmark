import Image from 'next/image'
import ScreenShot from '@/assets/icons/ScreenShot.svg'
import ScreenShotWhite from '@/assets/icons/ScreenShotWhite.png'

const HomeHeader = ({ title }) => {
    return (
        <div className='flex flex-wrap justify-end md:items-center md:justify-between my-[70px] gap-[20px] md:gap-0' >
            <div className='self-start' >
                <div className=' text-[48px]  md:text-[54px] font-bold leading-[44px] '>
                    <div className='relative w-fit' >
                        Hi {title}
                        <div className='lg:w-[11px] w-[12px] h-[11px]  bg-btn rounded-full absolute bottom-1  right-[-12px]'></div>
                    </div>
                </div>
                <div className='text-[#A6A3A3] text-[20px] font-semibold sm:max-w-[373px]' >Here you can track all of your key stats and access key features.</div>
            </div>
            <div className='text-[20px] cursor-pointer w-fit h-fit font-semibold flex items-center gap-[13px] px-[19px] py-[15px] rounded-[12px] border border-[#D6D6DB]' >
                ScreenShot
                <Image src={ScreenShotWhite} className='w-[36px] h-[36px] hidden dark:block' alt='Screen Shot icon' />
                <Image src={ScreenShot} className='w-full h-auto block dark:hidden' alt='Screen Shot icon' />
            </div>
        </div>
    )
}

export default HomeHeader