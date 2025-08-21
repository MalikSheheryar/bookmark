import { cn } from "@/lib/utils";

export const GreenProgress = ({
    percentage = 0,
    title,
    size = 120,
    strokeWidth = 12,
    className,
    color = "stroke-emerald-400",
    showSegments = true
}) => {
    // Calculate SVG parameters
    const radius = (size - strokeWidth) / 2;
    const circumference = radius * 2 * Math.PI;
    const strokeDashoffset = circumference - (percentage / 100) * circumference;

    // Calculate segment lines (8 segments)
    const segments = Array.from({ length: 8 }, (_, i) => {
        const angle = (i * 360) / 8;
        const radian = (angle * Math.PI) / 180;
        const x1 = size / 2 + (radius - strokeWidth) * Math.cos(radian);
        const y1 = size / 2 + (radius - strokeWidth) * Math.sin(radian);
        const x2 = size / 2 + (radius + strokeWidth) * Math.cos(radian);
        const y2 = size / 2 + (radius + strokeWidth) * Math.sin(radian);
        return { x1, y1, x2, y2 };
    });

    return (
        <div className={cn("relative inline-flex items-center justify-center", className)}>
            <svg
                width={size}
                height={size}
                viewBox={`0 0 ${size} ${size}`}
                className="transform -rotate-90"
            >
                {/* Background circle */}
                <circle
                    cx={size / 2}
                    cy={size / 2}
                    r={radius}
                    className="stroke-gray-200/20"
                    strokeWidth={strokeWidth}
                    fill="none"
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

                {/* Segment lines */}
                {showSegments && segments.map((segment, index) => (
                    <line
                        key={index}
                        x1={segment.x1}
                        y1={segment.y1}
                        x2={segment.x2}
                        y2={segment.y2}
                        stroke="black"
                        strokeWidth="2"
                        className="opacity-50"
                    />
                ))}

                {/* Center cross lines */}
                <line
                    x1={size / 2}
                    y1={0}
                    x2={size / 2}
                    y2={size}
                    stroke="black"
                    strokeWidth="1"
                    className="opacity-30"
                />
                <line
                    x1={0}
                    y1={size / 2}
                    x2={size}
                    y2={size / 2}
                    stroke="black"
                    strokeWidth="1"
                    className="opacity-30"
                />
            </svg>

            {/* Center content */}
            <div className="absolute flex flex-col items-center justify-center">
                <div className="flex items-baseline">
                    <span className="text-2xl font-medium">T</span>
                    <span className="text-xl font-medium">2</span>
                </div>
                {title && <span className="text-sm text-muted-foreground mt-1">{title}</span>}
            </div>
        </div>
    );
};
