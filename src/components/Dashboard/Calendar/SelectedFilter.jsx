"use client"

import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"

export function SelectedFilter({ onValueChange, defaultValue }) {
    // Define the amount options
    const amountOptions = [
        "More than $1.00",
        "More than $5.00",
        "More than $10.00",
        "More than $20.00",
        "More than $50.00",
        "More than $100.00",
    ]

    return (
        <Select onValueChange={onValueChange} defaultValue={defaultValue || amountOptions[0]}>
            <SelectTrigger className="w-full dark:bg-transparent  py-0 my-0 border-0 outline-0 ring-0 shadow-none !placeholder:text-[#4C45F4] placeholder:font-semibold font-semibold text-[#0866FF]">
                <SelectValue placeholder="More than $1.00" />
            </SelectTrigger>
            <SelectContent>
                <SelectGroup>
                    {amountOptions.map((option) => (
                        <SelectItem key={option} value={option}>
                            {option}
                        </SelectItem>
                    ))}
                </SelectGroup>
            </SelectContent>
        </Select>
    )
}
