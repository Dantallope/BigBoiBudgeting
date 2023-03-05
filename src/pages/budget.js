import React, { useState } from "react";
import '../src/css/budget.css';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle, faExclamationCircle } from "@fortawesome/free-solid-svg-icons";

function BudgetTracker() {
  const [budget, setBudget] = useState(0);
  const [productTitle, setProductTitle] = useState("");
  const [productCost, setProductCost] = useState("");
  const [expenses, setExpenses] = useState([]);
  const [error, setError] = useState("");

  const handleBudgetChange = (event) => {
    const amount = parseInt(event.target.value);
    if (isNaN(amount) || amount < 0) {
      setError("You call this a  Do better.");
    } else {
      setBudget(amount);
      setError("");
    }
  };

  const handleProductTitleChange = (event) => {
    setProductTitle(event.target.value);
  };

  const handleProductCostChange = (event) => {
    setProductCost(parseInt(event.target.value));
  };

  const handleCheckAmount = () => {
    if (productTitle.trim() === "") {
      setError("Values cannot be empty");
      return;
    }
    if (isNaN(productCost) || productCost <= 0) {
      setError("Value cannot be empty or negative");
      return;
    }
    const newExpenses = [...expenses, { title: productTitle, cost: productCost }];
    setExpenses(newExpenses);
    setProductTitle("");
    setProductCost("");
    setError("");
  };

  const totalExpenses = expenses.reduce((total, expense) => total + expense.cost, 0);
  const balance = budget - totalExpenses;

  return (
    <div className="wrapper">
      <div className="container">
        <div className="sub-container">
          {/* Budget */}
          <div className="total-amount-container">
            <h3>Budget</h3>
            <p className={`hide error ${error && "show"}`}>{error}</p>
            <input
              type="number"
              id="total-amount"
              placeholder="Enter Total Amount"
              onChange={handleBudgetChange}
              value={budget}
            />
            <button className="submit" id="total-amount-button">
              Set Budget
            </button>
          </div>
          {/* Expenditure */}
          <div className="user-amount-container">
            <h3>Expenses</h3>
            <p className={`hide error ${error && "show"}`}>{error}</p>
            <input
              type="text"
              className="product-title"
              id="product-title"
              placeholder="Enter Title of Product"
              onChange={handleProductTitleChange}
              value={productTitle}
            />
            <input
              type="number"
              id="user-amount"
              placeholder="Enter Cost of Product"
              onChange={handleProductCostChange}
              value={productCost}
            />
            <button className="submit" id="check-amount" onClick={handleCheckAmount}>
              <FontAwesomeIcon icon={faCheckCircle} />
            </button>
          </div>
        </div>
        {/* Output */}
        <div className="output-container flex-space">
          <div>
            <p>Total Budget</p>
            <span id="amount">{budget}</span>
          </div>
          <div>
            <p>Expenses</p>
            <span id="expenditure-value">{totalExpenses}</span>
          </div>
          <div>
            <p>Balance</p>
            <span id="balance-amount">{balance}</span>
          </div>
        </div>
      </div>
      {/* List */}
      <div className="list">
          <h3>Expense List</h3>
          <div className="list-container" id="list">
        </div>
      </div>
    </div>
  )
}
          

export default BudgetTracker;