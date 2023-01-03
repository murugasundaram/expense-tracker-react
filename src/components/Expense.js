import ExpenseItem from "./ExpenseItem";
import Card from "./Card"
import ExpenseFilter from "./ExpenseFilter";
import React, { useState } from "react";

const Expense = (props) => {
    const [selectedYear, setSelectedYear] = useState('All');

    const filterChangeHandler = (selYear) => {
        setSelectedYear(selYear)
    }

    const resultItems = props.items.filter((item) => {
        if(selectedYear.toString() === 'All') {
            return true
        }
        
        return item.date.getFullYear().toString() === selectedYear
    });

    return (
        <Card className="expenses">
            <ExpenseFilter selectedYear={selectedYear} onChangeFilter={filterChangeHandler} />
            {resultItems.map((exp, key) => <ExpenseItem title={exp.title} price={exp.price} date={exp.date} key={key} />)}
        </Card>
    );
}

export default Expense;