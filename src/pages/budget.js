import React, { useState } from "react";
import '../css/budget.css';
// import { useQuery, useMutation } from '@apollo/client';
// import { createUser, updateUser, users } from '../db/schemas/typeDefs';
// import { gql } from '../db/schemas/typeDefs';
import '../css/budget.css';

// function Budget() {
//   const [budget, setBudget] = useState(0);

//   const { loading, error, data } = useQuery(users);
//   const [createUser, { loading: mutationLoading, error: mutationError }] = useMutation(createUser);

//    const handleSubmit = (event) => {
//     event.preventDefault();

//     updateUser({ variables: { id: data.budget.id, amount: budget } });

// }};

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
      alert("Imagine having no budget");
      return;
    }
    setBalanceValue(tempAmount);
    setExpenditureValue(0);
    setExpensesList([]);
    setTotalAmount("");
  };

  const handleCheckAmountButtonClick = () => {
    if (!userAmount || !productTitle) {
      alert("I guess it too much to enter both a product name and an amount.");
      return;
    }
    const expense = parseInt(userAmount);
    const sum = expenditureValue + expense;
    const totalBalance = balanceValue - expense;
    if (totalBalance < 0) {
      alert("Let's try a little harder. . .");
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
    <div id="budget-tracker">
      <h1 id="budget-head" >Budget Tracker</h1>
      
      <div id="section-one">
      <label>
        Total Budget Amount:{" "}
        <input
          type="number"
          value={totalAmount}
          onChange={handleTotalAmountChange}
        />
      </label>
      <button id="setBudgetBttn" onClick={handleTotalAmountButtonClick}>Set Budget</button>
      <p>Balance: {balanceValue}</p>
      <p>Total Expenses: {expenditureValue}</p>
      </div>

      <div id="section-two">
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
      </div>

      <div id="section-three">
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
                <button onClick={() => handleEditButtonClick(index)}> Edit </button>
              </td>
              <td>
                <button onClick={() => handleDeleteButtonClick(index)}> Delete </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      </div>
    </div>
  );
}

export default BudgetTracker;