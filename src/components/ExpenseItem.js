import '../css/ExpenseStyle.css';
import Card from './Card';

function ExpenseItem(props) {

    const month = props.date.toLocaleString('en-US', { month: 'long' });
    const day = props.date.toLocaleString('en-US', { day: '2-digit' });
    const year = props.date.getFullYear();

    return (
        <Card className='expense-item'>
            <div className='expense-date'>
                <div className='expense-date__year'>{ month }</div>
                <div className='expense-date__month'>{ year }</div>
                <div className='expense-date__day'>{ day }</div>
            </div>
            <div className='expense-item__description'>
                <h2>{ props.title }</h2>
                <div className='expense-item__price'>$ { props.price }</div>
            </div>
        </Card>
    )
}

export default ExpenseItem;