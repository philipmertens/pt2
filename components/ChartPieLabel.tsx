"use client"
import { Label, Pie, PieChart, Sector } from "recharts"
import { ChartConfig, ChartContainer } from "@/components/ui/chart"
import { motion } from "framer-motion"
import { PieSectorDataItem } from "recharts/types/polar/Pie"
import { useState } from "react"
import { useMediaQuery } from "react-responsive"

const chartData = [
  { stock: "ASML", allocation: 26, fill: "var(--chart-1)" },
  { stock: "Alibaba", allocation: 21, fill: "var(--chart-2)" },
  { stock: "Nike", allocation: 13, fill: "var(--chart-3)" },
  { stock: "Baidu", allocation: 9, fill: "var(--chart-4)" },
  { stock: "United Health", allocation: 9, fill: "var(--chart-5)" },

  { stock: "Hims & Hers", allocation: 7.7, fill: "var(--chart-1)" },
  { stock: "Block", allocation: 7.7, fill: "var(--chart-2)" },
  { stock: "BYD", allocation: 7.6, fill: "var(--chart-3)" },
  { stock: "Bitcoin", allocation: 3, fill: "var(--chart-5)" },
  { stock: "Novo Nordisk", allocation: 1.7, fill: "var(--chart-4)" }
]

const chartConfig = Object.fromEntries(
  chartData.map((item) => [
    item.stock,
    {
      label: item.stock
        .split(" ")
        .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
        .join(" "),
      color: item.fill,
    },
  ])
) satisfies ChartConfig


export function ChartPieLabel() {
  const [activeIndex, setActiveIndex] = useState<number | undefined>(undefined)
  const activeItem = activeIndex !== undefined ? chartData[activeIndex] : undefined
  const isMobile = useMediaQuery({ maxWidth: 768 })
  return (
    <section className="py-12 md:py-20 px-4 max-w-7xl mx-auto">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-3xl md:text-4xl font-bold mb-8 md:mb-12 text-center text-gray-800 dark:text-white"
      >
        My Portfolio
      </motion.h2>
      <ChartContainer
        config={chartConfig}
        className="
                [&_.recharts-pie-label-text]:fill-foreground
                [&_.recharts-pie-label-text]:text-lg
                [&_.recharts-pie-label-text]:select-none
                [&_.recharts-pie-label-line]:-z-10
                mx-auto aspect-square max-h-[800px]
                pb-0 w-full "
      >
        <PieChart>
          <Pie
            data={chartData}
            dataKey="allocation"
            innerRadius={isMobile ? 85 : 180}
            outerRadius={isMobile ? 170 : 350}
            strokeWidth={5}
            onMouseEnter={(_, index) => setActiveIndex(index)}
            onMouseLeave={() => setActiveIndex(undefined)}
            activeIndex={activeIndex}
            activeShape={({ outerRadius = 0, ...props }: PieSectorDataItem) => (
              <Sector {...props} outerRadius={outerRadius + 8} />
            )}
          >
            <Label
              content={({ viewBox }) => {
                if (!viewBox || !("cx" in viewBox) || !("cy" in viewBox))
                  return null
                const { cx, cy } = viewBox
                return (
                  <text
                    x={cx}
                    y={cy}
                    textAnchor="middle"
                    dominantBaseline="middle"
                  >
                    <tspan
                      x={cx}
                      y={cy}
                      className={`fill-foreground font-semibold ${isMobile ? "text-base" : "text-2xl"}`}
                    >
                      {activeItem ? activeItem.stock : "Portfolio"}
                    </tspan>
                    <tspan
                      x={cx}
                      y={cy ? cy + 26 : 0}
                      className={`fill-muted-foreground ${isMobile ? "text-xs" : "text-lg"}`}
                    >
                      {activeItem
                        ? `${activeItem.allocation}%`
                        : "100%"}
                    </tspan>
                  </text>
                )
              }}
            />
          </Pie>
        </PieChart>
      </ChartContainer>
    </section>
  )
}
