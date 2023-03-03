import React from 'react';
import '../src/css/budget.css';

function SpendingOverview(props) {
  // Sample data
  const expenses = [
    { type: 'Cash', amount: 1000 },
    { type: 'Credit', amount: 500 },
    { type: 'Loan', amount: 200 },
  ];
  const investments = [
    { type: 'Stocks', amount: 10000 },
    { type: 'Bonds', amount: 5000 },
  ];

  // Calculate totals
  const totalExpenses = expenses.reduce((total, expense) => total + expense.amount, 0);
  const totalInvestments = investments.reduce((total, investment) => total + investment.amount, 0);
  const totalCash = props.cash - totalExpenses;
  const totalCredit = props.credit - totalExpenses;
  const totalLoans = props.loans;

  return (
    <div>
      <h2>Spending Overview</h2>
      <p>Total Monthly Spending: {totalExpenses}</p>
      <p>Total Cash: {totalCash}</p>
      <p>Total Credit: {totalCredit}</p>
      <p>Total Loans: {totalLoans}</p>
      <p>Total Investments: {totalInvestments}</p>
    </div>
  );
}

export default SpendingOverview;