export type StateType = {
  amount: number;
  roi: number;
  tenure: number;
};

export type ResultType = {
  monthlyEMI: string;
  totalPrincipal: string;
  totalInterest: string;
  totalAmount: string;
};

export type ChartDataType = {
  name: string;
  value: number;
  fill: string;
};
