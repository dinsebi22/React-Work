import React from "react";
import "./MealList.css";
import Card from "../../UI/Card/Card";
import Meal from "../meal/Meal";

const MealList = (props) => {
  const mealList = [
    {
      id: 1,
      mealName: "Sushi",
      price: 30.23,
      description: "Finest fish in the Sea",
    },
    {
      id: 2,
      mealName: "Burger",
      price: 22.11,
      description: "Beef Burger with everithing you need ",
    },
    {
      id: 3,
      mealName: "Hotdog",
      price: 5.03,
      description: "Steamy Hotdog",
    },
    {
      id: 4,
      mealName: "Soup",
      price: 7.89,
      description: "Grannys Chicken Soup",
    },
    {
      id: 5,
      mealName: "Cake",
      price: 12.11,
      description: "A Chocolate Explosion",
    },
  ];

  return (
    <Card>
      <div className="meal-list-container">
        {mealList.map((meal) => (
          <Meal key={meal.id} item={meal}></Meal>
        ))}
      </div>
    </Card>
  );
};

export default MealList;
