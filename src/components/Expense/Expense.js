import React, { useState } from "react";

import { ExpenseItem } from './ExpenseItem/ExpenseItem';
import { ExpenseFilter } from './ExpenseFilter/ExpenseFilter';

import './Expense.css';

export const Expense = props => {
    const [filteredYear, setFilteredYear] = useState('2020')
    const onChangeFilterHandler = year => {
        setFilteredYear(year)
    }
    return (
        <div className='expenses'>
            <ExpenseFilter onChangeFilter={onChangeFilterHandler} selected={filteredYear} />
            {props.expenses.map((expense) => (
                <ExpenseItem
                    key={expense.id}
                    date={expense.date}
                    title={expense.title}
                    amount={expense.amount}
                />
            ))}
        </div>
    )
}