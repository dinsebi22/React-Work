import React, { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  const [enteredExpenseType, setEnteredExpenseType] = useState("");
  const [enteredExpenseAmount, setEnteredExpenseAmount] = useState("");
  const [enteredExpenseDate, setEnteredExpenseDate] = useState("");

  const expenseTypeChangeHandler = (event) => {
    setEnteredExpenseType(event.target.value);
  };

  const expenseAmountChangeHandler = (event) => {
    setEnteredExpenseAmount(event.target.value);
  };

  const expenseDateChangeHandler = (event) => {
    setEnteredExpenseDate(event.target.value);
  };

  const handleCalcelAddExpense = () => {
    props.cancelAdd();
  };

  const submitHandler = (event) => {
    event.preventDefault();
    const newExpenseData = {
      itemType: enteredExpenseType,
      price: enteredExpenseAmount,
      expenseDate: new Date(enteredExpenseDate),
    };

    setEnteredExpenseType("");
    setEnteredExpenseAmount("");
    setEnteredExpenseDate("");

    props.onAddExpense(newExpenseData);
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Expense Type</label>
          <input
            type="text"
            value={enteredExpenseType}
            onChange={expenseTypeChangeHandler}
          />
        </div>

        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={enteredExpenseAmount}
            onChange={expenseAmountChangeHandler}
          />
        </div>

        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2010-01-01"
            max="2022-12-31"
            value={enteredExpenseDate}
            onChange={expenseDateChangeHandler}
          />
        </div>
      </div>

      <div className="new-expense__actions">
        <button type="button" onClick={handleCalcelAddExpense}>
          Cancel
        </button>
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
