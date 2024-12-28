import { formatCurrency } from "@/lib/utils.ts";

type Props = {
  label: string;
  value: string;
};

export const ResultItem = ({ label, value }: Props) => (
  <div className="flex items-center justify-between">
    <p>{label}</p>
    <p className="text-xl">&#8377;{formatCurrency(value)}</p>
  </div>
);
