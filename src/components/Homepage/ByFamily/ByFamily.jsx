import Image from "next/image";
import progressDiffculty from '@/assets/icons/dificulty-progress.svg';
import FamilyProgress from "@/assets/icons/family-progress.svg"
import Bar from "./Bar";
import Implication from "./Implication";

const ByFamily = () => {
    return (
        <div>
            <h1 className="font-[500] text-4xl dark:text-white">By Family</h1>
            <div className="border-b border-black dark:border-white mt-4"></div>
            <Implication />
            <Implication />
            <Implication />

        </div>
    )
}
export default ByFamily;