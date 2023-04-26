import { ExpenseItem } from '../ExpenseItem/ExpenseItem';
import './Expense.css';
import React from "react";
export const Expense = props => {
    return (
        <div className='expenses'>
            <ExpenseItem
                date={props.expenses[0].date}
                title={props.expenses[0].title}
                amount={props.expenses[0].amount}
            />
        </div>
    )
}