import React, { useState } from "react"

const ExpenseForm = (props) => {

    const [expTitle, setExpTitle] = useState('')
    const [expPrice, setExpPrice] = useState('')
    const [expDate, setExpDate] = useState('')


    const handleFormSubmit = (event) => {
        event.preventDefault()

        const newExpense = {
            title : expTitle,
            price : expPrice,
            date : new Date(expDate)
        }

        setExpTitle('')
        setExpPrice('')
        setExpDate('')

        props.onCreateNewExpense(newExpense)
    }

    const handleFormChange = (event) => {
        if(event.target.dataset.type === 'title') {
            setExpTitle(event.target.value)
        } else if(event.target.dataset.type === 'price') {
            setExpPrice(event.target.value)
        } else {
            setExpDate(event.target.value)
        }
    }

    return (
        <form onSubmit={handleFormSubmit} className={props.formShowClass}>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Title</label>
                    <input required data-type="title" value={expTitle} type="text" onChange={handleFormChange} />
                </div>
                <div className="new-expense__control">
                    <label>Price</label>
                    <input required data-type="price" value={expPrice} type="number" min="0" step="100" onChange={handleFormChange} />
                </div>
                <div className="new-expense__control">
                    <label>Date</label>
                    <input required data-type="date" value={expDate} type="date" min="2019-01-01" max="2022-12-31" onChange={handleFormChange} />
                </div>
            </div>
            <div className="new-expense__actions">
                <button type="submit">Save</button>
            </div>
        </form>
    )
}

export default ExpenseForm;