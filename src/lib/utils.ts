import { StateType } from "@/types";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function calculateLoanDetails({ amount, roi, tenure }: StateType) {
  // Step 1: Calculate Monthly Interest Rate
  const monthlyRate = roi / 12 / 100;

  // Step 2: Calculate Loan Tenure in Months
  const tenureMonths = tenure * 12;

  // Step 3: Calculate EMI using the formula
  const emi =
    (amount * monthlyRate * Math.pow(1 + monthlyRate, tenureMonths)) /
    (Math.pow(1 + monthlyRate, tenureMonths) - 1);

  // Step 4: Calculate Total Payment (EMI * number of months)
  const totalAmount = emi * tenureMonths;

  // Step 5: Calculate Total Interest (Total Amount - Principal)
  const totalInterest = totalAmount - amount;

  // Step 6: Return details
  return {
    monthlyEMI: emi.toFixed(2), // Monthly EMI
    totalPrincipal: amount.toFixed(2), // Total Principal Amount
    totalInterest: totalInterest.toFixed(2), // Total Interest Payable
    totalAmount: totalAmount.toFixed(2), // Total Amount Payable (Principal + Interest)
  };
}

export const formatCurrency = (amount: string) => {
  return new Intl.NumberFormat("en-IN", {
    currencySign: "standard",
    currency: "INR",
  }).format(parseInt(amount, 10));
};
