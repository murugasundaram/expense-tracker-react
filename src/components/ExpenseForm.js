import React, { useState } from "react"

const ExpenseForm = () => {

    const [expTitle, setExpTitle] = useState('')
    const [expPrice, setExpPrice] = useState('')
    const [expDate, setExpDate] = useState('')


    const handleFormSubmit = (event) => {
        event.preventDefault()

        const newExpense = {
            title : expTitle,
            price : expPrice,
            date : expDate
        }

        setExpTitle('')
        setExpPrice('')
        setExpDate('')

        console.log('clicked', newExpense)
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
        <form onSubmit={handleFormSubmit}>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Title</label>
                    <input data-type="title" value={expTitle} type="text" onChange={handleFormChange} />
                </div>
                <div className="new-expense__control">
                    <label>Price</label>
                    <input data-type="price" value={expPrice} type="number" min="0" step="100" onChange={handleFormChange} />
                </div>
                <div className="new-expense__control">
                    <label>Date</label>
                    <input data-type="date" value={expDate} type="date" min="2019-01-01" max="2022-12-31" onChange={handleFormChange} />
                </div>
            </div>
            <div className="new-expense__actions">
                <button type="submit">Add Expense</button>
            </div>
        </form>
    )
}

export default ExpenseForm;