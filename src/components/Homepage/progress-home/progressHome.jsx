"use client"
import { Progress } from "@/components/ui/progress";
import * as React from "react";

const ProgressHome = ({ progress, color }) => {

    return (
        <div className=" w-full gap-[39px] flex items-center">
            <div className={`h-[40px] ${color} ${progress} rounded-[8px]`} ></div>
            <div className="flex items-center">
                <span className="text-black text-[24px] dark:text-white font-normal">{progress.split("[")[1].split("]")[0]}</span>
            </div>
        </div>
    );
}

export default ProgressHome;
