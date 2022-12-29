import ExpenseItem from "./components/ExpenseItem";
import Card from "./components/Card";
import NewExpense from "./components/NewExpense";
import ExpenseFilter from "./components/ExpenseFilter";
import React, { useState } from "react";

const App = () => {
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

  const [selectedYear, setSelectedYear] = useState('2021');

  const filterChangeHandler = (selYear) => {
    console.log('cming', selYear)
    setSelectedYear(selYear)
  }

  return (
    <div>
      <NewExpense />
      <Card className="expenses">
        <ExpenseFilter selectedYear={selectedYear} onChangeFilter={filterChangeHandler} />
        {expenses.map((exp, key) => <ExpenseItem title={exp.title} price={exp.price} date={exp.date} key={key} />)}
      </Card>
    </div>
  );
}

export default App;
