import IconButton from "@/components/Buttons/IconButton"
import Calendar from '@/assets/icons/Calendar-Icon.svg'
import { ModeToggle } from "@/components/Buttons/ModeToggle"

const StartSection = () => {
    return (
        <div className="flex md:justify-between w-full " >
            <div className="text-[15px] md:text-[20px] absolute md:sticky top-[-60px] md:top-[-80px] max-w-[60%] font-semibold text-[#A6A3A3]" >Here you can track all of your key stats and access key features.</div>
            <div className='flex flex-wrap items-center mt-[20px] self-end gap-[20px]' >
                <IconButton title="Full Test" />
                <IconButton source={Calendar} title="Section" />
                <IconButton title="Start Drilling" />
            </div>
        </div>
    )
}

export default StartSection