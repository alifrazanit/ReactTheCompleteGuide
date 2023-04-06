import './ExpenseItem.css';
import { useState } from 'react';
import { ExpenseDate } from '../expenseDate/ExpenseDate';
export const ExpenseItem = (props) => {
    const [title, setTitle] = useState(props.title);
    
    const changeTitle = e => {
        setTitle('xxxxx')
    }
    return (
        <div className='expense-item'>
            <ExpenseDate date={props.date}/>
            <div className='expense-item__description'>
                <h2>{title}</h2>
                <div className='expense-item__price'>Rp. {props.amount}</div>
            </div>
            <button onClick={changeTitle}>Click Me</button>
        </div>
    )
}