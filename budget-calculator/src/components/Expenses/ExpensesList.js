import React from "react";
import ExpenseItem from "./ExpenseItem";

import "./ExpensesList.css";

const ExpensesList = (props) => {
  // Ternary Operator to determin the List of Expenses

  if (props.items.length === 0) {
    return <h2 className="expenses-list__fallback">No expenses Found</h2>;
  }

  return (
    <ul className="expenses-list">
      {props.items.map((expense) => (
        <ExpenseItem key={expense.id} item={expense} />
      ))}
    </ul>
  );
};

export default ExpensesList;
