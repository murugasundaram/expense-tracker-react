import React, { useState } from "react";
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {
    const [formShowClass, setFormShowClass] = useState('d-none')
    const [btnShowClass, setBtnShowClass] = useState('')

    const handleNewExpense = (exp) => {
        props.onNewExpense(exp)
        setFormShowClass('d-none')
        setBtnShowClass('')
    }

    const clickButtonAddExp = () => {
        setFormShowClass('')
        setBtnShowClass('d-none')
    }

    return (
        <div className="new-expense">
            <ExpenseForm formShowClass={formShowClass} onCreateNewExpense={handleNewExpense} />
            <button className={btnShowClass} onClick={clickButtonAddExp}>Add new Expense</button>
        </div>
    )
}

export default NewExpense;