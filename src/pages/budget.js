import React from 'react';
import '../src/css/budget.css';

function BudgetTracker() {
  const [budget, setBudget] = useState(0);
  const [expenses, setExpenses] = useState([]);

  const addExpense = (event) => {
    event.preventDefault();
    const expenseName = event.target.elements.expenseName.value;
    const expenseAmount = event.target.elements.expenseAmount.value;
    const expenseCategory = event.target.elements.expenseCategory.value;
    setExpenses([...expenses, { name: expenseName, amount: expenseAmount, category: expenseCategory }]);
    event.target.reset();
  };

  const calculateTotalExpenses = () => {
    let total = 0;
    for (let i = 0; i < expenses.length; i++) {
      total += parseInt(expenses[i].amount);
    }
    return total;
  };

  const calculateBalance = () => {
    return budget - calculateTotalExpenses();
  };

  return (
    <div className="budget-tracker">
      <h1>Budget Tracker</h1>
      <form onSubmit={addExpense}>
        <label htmlFor="expenseName">Expense Name:</label>
        <input type="text" id="expenseName" name="expenseName" required />

        <label htmlFor="expenseAmount">Expense Amount:</label>
        <input type="number" id="expenseAmount" name="expenseAmount" required />

        <label htmlFor="expenseCategory">Expense Category:</label>
        <select id="expenseCategory" name="expenseCategory" required>
          <option value="">--Please choose a category--</option>
          <option value="food">Food</option>
          <option value="rent">Rent</option>
          <option value="utilities">Utilities</option>
          <option value="entertainment">Entertainment</option>
          <option value="other">Other</option>
        </select>

        <button type="submit">Add Expense</button>
      </form>

      <div className="expense-list">
        <h2>Expense List</h2>
        <ul>
          {expenses.map((expense, index) => (
            <li key={index}>
              {expense.name} - ${expense.amount} ({expense.category})
            </li>
          ))}
        </ul>
      </div>

      <div className="budget-summary">
        <h2>Budget Summary</h2>
        <p>Total Budget: ${budget}</p>
        <p>Total Expenses: ${calculateTotalExpenses()}</p>
        <p>Balance: ${calculateBalance()}</p>
      </div>
    </div>
  );
}

export default BudgetTracker;