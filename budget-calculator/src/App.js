import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
import { useState } from "react";

const App = () => {
  const [expenses, setExpenses] = useState([
    {
      id: "e1",
      itemType: "Toilet Paper",
      price: 94.12,
      expenseDate: new Date(2020, 7, 14),
    },
    {
      id: "e2",
      itemType: "New TV",
      price: 799.49,
      expenseDate: new Date(2021, 2, 12),
    },
    {
      id: "e3",
      itemType: "Car Insurance",
      price: 294.67,
      expenseDate: new Date(2021, 2, 28),
    },
    {
      id: "e4",
      itemType: "New Desk (Wooden)",
      price: 450,
      expenseDate: new Date(2021, 5, 12),
    },
  ]);

  const addExpense = (newExpenseData) => {
    setExpenses((prevExpenses) => [newExpenseData, ...prevExpenses]);
  };

  console.log("App.js ", expenses);

  return (
    <div>
      <NewExpense handelNewExpense={addExpense} />

      <Expenses data={expenses}></Expenses>
    </div>
  );
};

export default App;
