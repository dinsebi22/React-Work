import AvailableMeals from "./AvailableMeals";
import MealsSummary from "./MealsSummary";
import React from "react";

const Meals = () => {
  return (
    <React.Fragment>
      <MealsSummary></MealsSummary>
      <AvailableMeals></AvailableMeals>
    </React.Fragment>
  );
};

export default Meals;
