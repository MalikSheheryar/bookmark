// import { cn } from "@/lib/utils";


// export const RCprogress = ({
//     percentage,
//     size = 120,
//     strokeWidth = 8,
//     className,
//     color
// }) => {
//     // Calculate SVG parameters
//     const radius = (size - strokeWidth) / 2;
//     const circumference = radius * 2 * Math.PI;
//     const strokeDashoffset = circumference - (percentage / 100) * circumference;

//     return (
//         <div className={cn("relative inline-flex items-center justify-center", className)}>
//             <svg
//                 width={size}
//                 height={size}
//                 viewBox={`0 0 ${size} ${size}`}
//                 className="transform rotate-[135deg]"
//             >
//                 {/* Background circle */}
//                 <circle
//                     cx={size / 2}
//                     cy={size / 2}
//                     r={radius}
//                     className="stroke-[#DDF4FF]"
//                     strokeWidth={strokeWidth}
//                     fill="none"
//                 />
//                 {/* Progress circle */}
//                 <circle
//                     cx={size / 2}
//                     cy={size / 2}
//                     r={radius}
//                     className={`${color} transition-all  duration-300 ease-in-out`}
//                     strokeWidth={strokeWidth}
//                     fill="none"
//                     strokeLinecap="round"
//                     style={{
//                         strokeDasharray: circumference,
//                         strokeDashoffset: strokeDashoffset,
//                     }}
//                 />
//             </svg>

//             {/* Center content */}
//             <div className="absolute flex flex-col h-fit text-[23px] font-normal items-center justify-center">
//                 RC
//                 <span className="text-[#0866FF] text-[37px] mt-[-20px] pt-0 " >10</span>
//             </div>
//         </div>
//     );
// };

import { cn } from "@/lib/utils";

export const RCprogress = ({
    percentage,
    size = 120,
    strokeWidth = 8,
    className,
    color,
    backgroundArcPercentage = 75
}) => {
    // Calculate SVG parameters
    const radius = (size - strokeWidth) / 2;
    const circumference = radius * 2 * Math.PI;
    const strokeDashoffset = circumference - (percentage / 100) * circumference;

    // Calculate background arc parameters
    const backgroundArcLength = (backgroundArcPercentage / 100) * circumference;
    const backgroundArcGap = circumference - backgroundArcLength;

    return (
        <div className={cn("relative inline-flex items-center justify-center", className)}>
            <svg
                width={size}
                height={size}
                viewBox={`0 0 ${size} ${size}`}
                className="transform rotate-[135deg]"
            >
                {/* Partial background arc */}
                <circle
                    cx={size / 2}
                    cy={size / 2}
                    r={radius}
                    className="stroke-[#DDF4FF]"
                    strokeWidth={strokeWidth}
                    fill="none"
                    strokeLinecap="round"
                    style={{
                        strokeDasharray: `${backgroundArcLength} ${backgroundArcGap}`,
                    }}
                />
                {/* Progress circle */}
                <circle
                    cx={size / 2}
                    cy={size / 2}
                    r={radius}
                    className={`${color} transition-all duration-300 ease-in-out`}
                    strokeWidth={strokeWidth}
                    fill="none"
                    strokeLinecap="round"
                    style={{
                        strokeDasharray: circumference,
                        strokeDashoffset: strokeDashoffset,
                    }}
                />
            </svg>

            {/* Center content */}
            <div className="absolute flex flex-col h-fit text-[23px] font-normal items-center justify-center">
                RC
                <span className="text-[#0866FF] text-[37px] mt-[-20px] pt-0 " >172</span>
            </div>
        </div>
    );
};
