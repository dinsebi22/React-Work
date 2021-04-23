import Card from "../UI/Card";
import React, { useState } from "react";
import ExpensesFilter from "../ExpenseFilter/ExpensesFilter";
import "./Expenses.css";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("2021");
  const [filteredExpenses, setFilteredExpenses] = useState(props.data);

  const onFilterChange = (filterChangeEvent) => {
    setFilteredExpenses(
      props.data.filter(
        (filteredElement) =>
          filteredElement.expenseDate.getFullYear().toString() ===
          filterChangeEvent
      )
    );
    setFilteredYear(filterChangeEvent);
  };

  console.log(
    "In Expenses.js ",
    filteredYear,
    "Filtered Expenses:",
    filteredExpenses
  );

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter selected={filteredYear} handleFilter={onFilterChange} />
        <ExpensesChart expenses={filteredExpenses}></ExpensesChart>
        <ExpensesList items={filteredExpenses} />
      </Card>
    </div>
  );
};

export default Expenses;
