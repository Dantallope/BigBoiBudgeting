import React, { useState } from "react";
import '../src/css/budget.css';


function BudgetTracker() {
  const [totalAmount, setTotalAmount] = useState("");
  const [userAmount, setUserAmount] = useState("");
  const [productTitle, setProductTitle] = useState("");
  const [expenditureValue, setExpenditureValue] = useState(0);
  const [balanceValue, setBalanceValue] = useState(0);
  const [expensesList, setExpensesList] = useState([]);

  const handleTotalAmountChange = (event) => {
    setTotalAmount(event.target.value);
  };

  const handleUserAmountChange = (event) => {
    setUserAmount(event.target.value);
  };

  const handleProductTitleChange = (event) => {
    setProductTitle(event.target.value);
  };

  const handleTotalAmountButtonClick = () => {
    const tempAmount = parseInt(totalAmount);
    if (isNaN(tempAmount) || tempAmount < 0) {
      alert("Please enter a valid budget amount.");
      return;
    }
    setBalanceValue(tempAmount);
    setExpenditureValue(0);
    setExpensesList([]);
    setTotalAmount("");
  };

  const handleCheckAmountButtonClick = () => {
    if (!userAmount || !productTitle) {
      alert("Please enter a product name and an amount.");
      return;
    }
    const expense = parseInt(userAmount);
    const sum = expenditureValue + expense;
    const totalBalance = balanceValue - expense;
    if (totalBalance < 0) {
      alert("You have exceeded your budget!");
      return;
    }
    setBalanceValue(totalBalance);
    setExpenditureValue(sum);
    setExpensesList([
      ...expensesList,
      { productTitle: productTitle, amount: expense },
    ]);
    setProductTitle("");
    setUserAmount("");
  };

  const handleEditButtonClick = (index) => {
    const expense = expensesList[index];
    setProductTitle(expense.productTitle);
    setUserAmount(expense.amount);
    setExpensesList([
      ...expensesList.slice(0, index),
      ...expensesList.slice(index + 1),
    ]);
    setBalanceValue(balanceValue + expense.amount);
    setExpenditureValue(expenditureValue - expense.amount);
  };

  const handleDeleteButtonClick = (index) => {
    const expense = expensesList[index];
    setExpensesList([
      ...expensesList.slice(0, index),
      ...expensesList.slice(index + 1),
    ]);
    setBalanceValue(balanceValue + expense.amount);
    setExpenditureValue(expenditureValue - expense.amount);
  };

  return (
    <div>
      <h1>Budget Tracker</h1>
      <label>
        Total Budget Amount:{" "}
        <input
          type="number"
          value={totalAmount}
          onChange={handleTotalAmountChange}
        />
      </label>
      <button onClick={handleTotalAmountButtonClick}>Set Budget</button>
      <p>Balance: {balanceValue}</p>
      <p>Expenditure: {expenditureValue}</p>
      <label>
        Product Name:{" "}
        <input
          type="text"
          value={productTitle}
          onChange={handleProductTitleChange}
        />
      </label>
      <label>
        Amount:{" "}
        <input
          type="number"
          value={userAmount}
          onChange={handleUserAmountChange}
        />
      </label>
      <button onClick={handleCheckAmountButtonClick}>Add Expense</button>
      <h2>Expenses List</h2>

      <table>
        <thead>
          <tr>
            <th>Product Name</th>
            <th>Amount</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {expensesList.map((expense, index) => (
            <tr key={index}>
              <td>{expense.productTitle}</td>
              <td>{expense.amount}</td>

              <td>
                <button onClick={() => handleEditButtonClick(index)}>
                  Edit </button>
              </td>
              <td>
                <button onClick={() => handleDeleteButtonClick(index)}>
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default BudgetTracker;