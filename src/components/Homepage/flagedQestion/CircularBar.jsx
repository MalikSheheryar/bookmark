
const CircularProgressBar = ({ data }) => {
    const radius = 40;
    const circumference = 2 * Math.PI * radius;

    // Calculate the angle for each segment
    let startAngle = -90; // Start from the top

    return (
        <div className="relative w-[250px] h-[250px]">
            <svg className="w-full h-full" viewBox="0 0 100 100">
                {/* Background circle */}
                <circle
                    cx="50"
                    cy="50"
                    r={radius}
                    fill="none"
                    stroke="#f0f0f0"
                    strokeWidth="10"
                    className="opacity-20 dark:opacity-0"
                />

                {/* Segments */}
                {Object.entries(data).map(([key, value], index) => {
                    const segmentAngle = (value / 100) * 360;
                    const endAngle = startAngle + segmentAngle;

                    // Calculate start and end points
                    const startX = 50 + radius * Math.cos((startAngle * Math.PI) / 180);
                    const startY = 50 + radius * Math.sin((startAngle * Math.PI) / 180);
                    const endX = 50 + radius * Math.cos((endAngle * Math.PI) / 180);
                    const endY = 50 + radius * Math.sin((endAngle * Math.PI) / 180);

                    // Determine if the arc should be drawn the long way around
                    const largeArcFlag = segmentAngle > 180 ? 1 : 0;

                    // Colors based on key
                    const colors = {
                        correct: "#E96F6F",
                        inappropriate: "#6ADD95",
                        incorrect: "#CECFD2"
                    };

                    const path = `
                        M 50 50
                        L ${startX} ${startY}
                        A ${radius} ${radius} 0 ${largeArcFlag} 1 ${endX} ${endY}
                        Z
                    `;

                    // Update start angle for next segment
                    startAngle = endAngle;

                    return (
                        <path
                            key={key}
                            d={path}
                            fill={colors[key]}
                            stroke={colors[key]}
                            strokeWidth="1"
                            className="transition-all duration-500 ease-in-out"
                        />
                    );
                })}

                {/* Inner circle (white/transparent) */}
                <circle
                    cx="50"
                    cy="50"
                    r="30"
                    fill="white"
                    className="dark:fill-black"
                />
            </svg>
        </div>
    );
};

export default CircularProgressBar;
