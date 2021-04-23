import React, { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {
  const [addNewExpense, setAddNewExpense] = useState(false);

  const handelFormSubmit = (eventData) => {
    const expenseData = {
      id: Math.random().toString(),
      ...eventData,
    };
    setAddNewExpense(false);
    props.handelNewExpense(expenseData);
  };

  if (!addNewExpense) {
    return (
      <div className="new-expense">
        <button onClick={() => setAddNewExpense(true)}>
          <h3>Add New Expense</h3>
        </button>
      </div>
    );
  }

  return (
    <div className="new-expense">
      <ExpenseForm
        cancelAdd={() => setAddNewExpense(false)}
        onAddExpense={handelFormSubmit}
      />
    </div>
  );
};

export default NewExpense;
