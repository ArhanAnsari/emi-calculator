import { Card, CardContent } from "@/components/ui/card.tsx";
import { Chart } from "@/components/wrapper/Chart.tsx";
import { FieldInput } from "@/components/wrapper/FieldInput.tsx";
import { Result } from "@/components/wrapper/Result";
import { useCalculator } from "@/hooks/useCaluclator.ts";

export const Calculator = () => {
  const { value, result, chartData, onChange } = useCalculator();

  return (
    <Card>
      <CardContent className="p-6 lg:p-10 flex flex-wrap">
        <div className="w-full lg:w-3/5">
          <div className="grid gap-16">
            <FieldInput
              value={value.amount}
              label="Loan Amount"
              maxNumber={100000000}
              onChange={onChange("amount")}
            />

            <FieldInput
              value={value.roi}
              label="Rate of interest (Per Annum)"
              maxNumber={30}
              step={0.1}
              onChange={onChange("roi")}
            />

            <FieldInput
              value={value.tenure}
              label="Loan Tenure"
              maxNumber={35}
              onChange={onChange("tenure")}
            />
          </div>
          <Result result={result} />
        </div>
        <div className="w-full lg:w-2/5 order-1 lg:order-2">
          <Chart data={chartData} />
        </div>
      </CardContent>
    </Card>
  );
};
