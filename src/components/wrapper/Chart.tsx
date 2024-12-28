import { ChartDataType } from "@/types";
import { Pie, PieChart } from "recharts";

import {
  ChartConfig,
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

const chartConfig = {
  principal: {
    label: "Principal",
    color: "hsl(var(--chart-1))",
  },
  interest: {
    label: "Interest",
    color: "hsl(var(--chart-2))",
  },
} satisfies ChartConfig;

type Props = {
  data: ChartDataType[];
};

export const Chart = ({ data }: Props) => {
  return (
    <ChartContainer
      config={chartConfig}
      className="mx-auto aspect-square min-h-[250px]"
    >
      <PieChart height={250} width={250}>
        <ChartTooltip
          cursor={false}
          content={<ChartTooltipContent hideLabel />}
        />
        <Pie
          data={data}
          dataKey="value"
          nameKey="name"
          innerRadius={100}
          strokeWidth={5}
        />
        <ChartLegend
          content={<ChartLegendContent nameKey="name" />}
          className="-translate-y-2 flex-wrap gap-2 [&>*]:basis-1/4 [&>*]:justify-center"
        />
      </PieChart>
    </ChartContainer>
  );
};
