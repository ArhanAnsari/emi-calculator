import { Input } from "@/components/ui/input.tsx";
import { Slider } from "@/components/ui/slider.tsx";
import { ChangeEvent } from "react";

type Props = {
  label: string;
  maxNumber: number;
  value: number;
  step?: number;
  onChange: (value: number) => void;
};

export const FieldInput = ({
  label,
  maxNumber,
  value,
  step = 1,
  onChange,
}: Props) => {
  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    onChange(value ? parseInt(value, 10) : 0);
  };

  const handleSliderChange = (value: number[]) => {
    onChange(value[0]);
  };

  return (
    <div>
      <div className="flex flex-wrap items-center justify-between mb-5">
        <p>{label}</p>
        <Input
          type="number"
          className="w-80"
          value={value}
          onChange={handleInputChange}
        />
      </div>
      <Slider
        value={[value]}
        max={maxNumber}
        step={step}
        min={0}
        onValueChange={handleSliderChange}
      />
    </div>
  );
};
