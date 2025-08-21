"use client"

import { Bar, BarChart, CartesianGrid, LabelList, XAxis, YAxis } from "recharts"

import {
    Card,
    CardContent,
    CardHeader,
} from "@/components/ui/card"
import {
    ChartContainer,
    ChartTooltip,
    ChartTooltipContent,
} from "@/components/ui/chart"
import Button from "./Button"

// Chart data with progress values
const chartData = [
    { month: "Ass", progres: 42, backgorund: "red" },
    { month: "Con", progres: 0, backgorund: 'greem' },
    { month: "Pri", progres: 70, backgorund: 'yellow' },
    { month: "Par", progres: 41, backgorund: 'orange' },
    { month: "Fla", progres: 60, backgorund: 'red' },
    { month: "Dis", progres: 81, backgorund: 'blue' },
    { month: "Dis", progres: 43, backgorund: 'purple' },
    { month: "Dis", progres: 83, backgorund: 'yellow' },
]

const chartConfig = {
    desktop: {
        label: "Desktop",
        color: "hsl(var(--chart-1))",
    },
}

export function ChartProgress() {
    return (
        <Card className='shadow-none dark:border-white overflow-x-auto' >
            <CardHeader>
                <div className="flex justify-between flex-wrap mb-[36px] gap-[20px]">
                    <div className="flex gap-[9px] flex-wrap">
                        <Button Title="All" blue={true} />
                        <Button Title="1 Month" blue={false} />
                        <Button Title="15 Days" blue={false} />
                        <Button Title="1 Week" blue={false} />
                    </div>
                    <div className="flex gap-[9px] flex-wrap">
                        <Button Title="Argument" blue={true} />
                        <Button Title="Reading" blue={false} />
                    </div>
                </div>
            </CardHeader>
            <CardContent>
                <ChartContainer config={chartConfig} className="w-auto h-[300px]">
                    <BarChart
                        accessibilityLayer
                        data={chartData}
                        margin={{
                            top: 20,
                        }}

                        height={300} // Fixed height of the chart
                    >
                        <CartesianGrid vertical={false} />
                        <XAxis
                            dataKey="month"
                            tickLine={false}
                            tickMargin={10}
                            axisLine={false}
                            tickFormatter={(value) => value.slice(0, 3)} // Shorten month names
                        />
                        {/* Y Axis with Custom Tick Values */}
                        <YAxis
                            ticks={[0, 20, 40, 60, 80, 100]} // Custom tick marks from 0 to 100
                            tickLine={false}
                            tickMargin={10}
                            axisLine={false}
                            tickFormatter={(value) => `${value}`}
                            domain={[0, 100]} // Y-axis goes from 0 to 100%
                            interval="preserveStartEnd" // Ensure all ticks are shown
                        />
                        <ChartTooltip
                            cursor={false}
                            content={<ChartTooltipContent hideLabel />}
                        />
                        <Bar
                            dataKey="progres" // Use 'progres' directly
                            barSize={45} // Adjust the width of the bars to 45px
                            fill="#4C45FA" // Progress color, will set green/blue based on progress
                            radius={8}
                            isAnimationActive={true} // Animation for bar drawing
                            background={{ fill: "#A1EBC7" }} // Light blue background color for the bars
                        >
                            <LabelList
                                position="top"
                                offset={12}
                                className="fill-foreground"
                                fontSize={12}
                                valueAccessor={(data) => `${data.progres}%`} // Add percentage to each bar
                            />
                        </Bar>
                    </BarChart>
                </ChartContainer>
            </CardContent>
        </Card>
    );
}

