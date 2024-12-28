# Loan EMI Calculator

A React application for calculating Equated Monthly Installments (EMI) for various types of loans, including Home Loans, Car Loans, and Personal Loans. This app allows users to input loan details such as principal amount, annual interest rate, and loan tenure, and provides detailed information including monthly EMI, total interest payable, total principal, and total amount payable.

---

## Working Demo: 


## Features

- Calculate EMIs for Home Loans, Car Loans, and Personal Loans.
- Detailed breakdown of:
    - Monthly EMI
    - Total Interest Payable
    - Total Principal
    - Total Amount Payable
- Customizable interest rates for different loan types.
- Easy integration with React for dynamic user input and result display.

---

## Getting Started

Follow these steps to set up and run the project.

### Prerequisites

- [Node.js](https://nodejs.org/) installed (v14+ recommended)
- Basic knowledge of React and JavaScript

---

### Installation

1. Clone this repository:
   ```bash
   git clone https://github.com/your-username/loan-emi-calculator.git
   cd loan-emi-calculator
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm start
   ```

---

## Usage

### Loan Calculation

The app uses the following formula to calculate EMI:

\[
EMI = \frac{P \times R \times (1 + R)^N}{(1 + R)^N - 1}
\]

Where:
- \( P \): Loan principal amount
- \( R \): Monthly interest rate (\( \text{Annual Rate} / 12 / 100 \))
- \( N \): Loan tenure in months

### Function Breakdown

#### `calculateLoanDetails`

A utility function that calculates loan details based on the given input.

**Parameters**:
- `principal`: The loan principal amount (e.g., 500000 for 5 lakhs).
- `annualRate`: Annual interest rate in percentage (e.g., 8.5 for 8.5%).
- `tenureYears`: Loan tenure in years (e.g., 20 for 20 years).

**Returns**:
An object containing:
- `monthlyEMI`: Fixed monthly installment.
- `totalPrincipal`: Initial loan amount.
- `totalInterest`: Total interest payable over the loan tenure.
- `totalAmount`: Total amount payable (Principal + Interest).

**Example**:
```javascript
const loanDetails = calculateLoanDetails(5000000, 8.5, 20);
console.log(loanDetails);
```

---

## Project Structure

```
loan-emi-calculator/
├── src/
│   ├── components/         # React components
│   ├── utils/              # Utility functions (e.g., loan calculations)
│   ├── App.js              # Main app component
│   └── index.js            # Entry point
├── public/                 # Static assets
├── package.json            # Project metadata and dependencies
└── README.md               # Project documentation
```

---

## Future Enhancements

- Add support for variable interest rates.
- Display an amortization schedule (breakdown of monthly principal and interest payments).
- Add support for more loan types.
- Integrate a database for storing loan details for user sessions.

---

## Contributing

Contributions are welcome! To contribute:
1. Fork the repository.
2. Create a new branch for your feature or bug fix.
3. Submit a pull request.

---

## Acknowledgements

- Formula reference from [Wikipedia - EMI](https://en.wikipedia.org/wiki/Equated_monthly_installment).


