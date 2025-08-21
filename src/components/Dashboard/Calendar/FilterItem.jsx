import { CirclePlus } from "lucide-react"
import { SelectedFilter } from "./SelectedFilter"
import FilterDialog from "./FilterDialog"

const FilterItem = ({ dropdown, filter }) => {
    return (
        <div className={`min-h-[29px] max-h-[29px] min-w-auto  flex items-center rounded-full px-[8px] border ${!dropdown ? 'border-dashed' : 'border-solid'} border-gray-500 `} >
            <div className={`h-fit flex items-center ${dropdown ? 'border-r-[1px] border-gray-300 pr-[8px]' : " "}`} >
                <FilterDialog dropdown={dropdown} />
                {/* <CirclePlus className={`text-[#787878] transform pr-[4px] ${dropdown ? "rotate-45 translate-[2px]" : "translate-[1px] "} `} size={18} /> */}
                <span className="text-[14px] text-[#787878]" >{filter}</span>
            </div>
            {dropdown && <SelectedFilter />}
        </div>
    )
}

export default FilterItem