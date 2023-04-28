import { ExpenseDate } from '../ExpenseDate/ExpenseDate';
import './ExpenseItem.css';
import { Card }from '../Card/Card';
import { useState } from 'react';

export const ExpenseItem = props => {
    const [title, setTile] = useState('');

    const changeTitle = e => {
        setTile('zzzz')
    }
    return (
        <Card className='expense-item'>
            <ExpenseDate date={props.date}/>
            <div className='expense-item__description'>
                <h2>{title}</h2>
                <div className='expense-item__price'>${props.amount}</div>
            </div>
            <button onClick={changeTitle}>Change</button>
        </Card>
    )
}