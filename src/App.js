import NewExpense from "./components/NewExpense";
import React, { useState } from "react";
import Expense from "./components/Expense";

const expenses = [
  {
    title : 'Car Insurance',
    date : new Date(2022, 12, 12),
    price: 251
  },
  {
    title : 'Food with friends',
    date : new Date(2021, 6, 10),
    price: 430
  },
  {
    title : 'Chocolate and snacks',
    date : new Date(2022, 1, 3),
    price: 15
  }
];

const App = () => {
 
  const [allExpenses, setAllExpenses] = useState(expenses)

  const handleNewExpense = (newExp) => {
    setAllExpenses((prevExpenses) => {
      return [newExp, ...prevExpenses];
    });
  }

  return (
    <div>
      <NewExpense onNewExpense={handleNewExpense} />
      <Expense items={allExpenses} />
    </div>
  );
}

export default App;
