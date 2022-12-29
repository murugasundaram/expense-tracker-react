import '../css/ExpenseStyle.css';

const ExpenseFilter = (props) => {

    const yearArray = [2022, 2021, 2020, 2019, 2018];

    const changeSelectHandler = (event) => {
        props.onChangeFilter(event.target.value)
    }

    return (
        <div className='expenses-filter'>
            <div className="expenses-filter__control">
                <label>Please select a year</label>
                <select value={props.selectedYear} onChange={changeSelectHandler}>
                    {yearArray.map((year, key) => <option key={key} value={year}>{year}</option>)}
                </select>
            </div>
        </div>
    )
}

export default ExpenseFilter;