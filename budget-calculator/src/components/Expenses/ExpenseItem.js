import React, { useState } from "react";
import Card from "../UI/Card";
import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css";

const ExpenseItem = (props) => {
  const [itemType] = useState(props.item.itemType);

  return (
    <li>
      <Card className="expense-item">
        <ExpenseDate date={props.item.expenseDate}></ExpenseDate>

        <div className="expense-item__description">
          <h2> {itemType} </h2>
          <div className="expense-item__price">{props.item.price}$</div>
        </div>
      </Card>
    </li>
  );
};

export default ExpenseItem;
