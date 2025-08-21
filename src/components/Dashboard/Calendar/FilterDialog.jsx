import { Checkbox } from "@/components/ui/checkbox"
import {
    Dialog,
    DialogContent,
    DialogTrigger,
} from "@/components/ui/dialog"
import { CirclePlus } from "lucide-react"

const FilterDialog = ({ dropdown }) => {
    return (
        <Dialog>
            <DialogTrigger>
                <CirclePlus className={`cursor-pointer text-[#787878] transform pr-[4px] ${dropdown ? "rotate-45 translate-[2px]" : "md:translate-[1px]"} `} size={18} />
            </DialogTrigger>
            <DialogContent className='border-[1px]  border-gray-300 w-full md:w-[298px]' >
                <div className="text-[20px] font-semibold" >Filter by Status</div>
                <div className="flex items-center gap-[9px]" >
                    <Checkbox id="refund" />
                    <label htmlFor="refund" className="text-[14px] font-normal leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">Partially Refunded</label>
                </div>
                <div className="flex items-center gap-[9px]" >
                    <Checkbox id="pending" />
                    <label htmlFor="pending" className="text-[14px] font-normal leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">Pending</label>
                </div>
                <div className="flex items-center gap-[9px]" >
                    <Checkbox id="Succeded" />
                    <label htmlFor="Succeded" className="text-[14px] font-normal leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">Succeded</label>
                </div>
                <div className="flex items-center gap-[9px]" >
                    <Checkbox id="Uncaptured" />
                    <label htmlFor="Uncaptured" className="text-[14px] font-normal leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">Uncaptured</label>
                </div>
                <div className="flex items-center gap-[9px]" >
                    <Checkbox id="Waiting" />
                    <label htmlFor="Waiting" className="text-[14px] font-normal leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">Waiting on funding</label>
                </div>

                {/* Triggered dialog to close the dialog on //**Apply**\\ button */}
                <DialogTrigger>
                    <div className="bg-[#0866FF] cursor-pointer rounded-[9px] py-[8px] w-full text-white text-[14px] font-semibold text-center" >Apply</div>
                </DialogTrigger>

            </DialogContent>
        </Dialog>

    )
}

export default FilterDialog  