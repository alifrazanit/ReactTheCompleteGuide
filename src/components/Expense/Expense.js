import React, { useState } from "react";

import { ExpenseItem } from './ExpenseItem/ExpenseItem';
import { ExpenseFilter } from './ExpenseFilter/ExpenseFilter';

import './Expense.css';

export const Expense = props => {
    const [filteredYear, setFilteredYear] = useState('2020')
    const filteredExpenses = props.items.filter(expense => {
        return new Date(expense.date).getFullYear().toString() === filteredYear
    })

    const onChangeFilterHandler = year => {
        setFilteredYear(year)
    }

    let expenseContent = <p>No Expense</p>;
    if (filteredExpenses.length >= 1) {
        expenseContent = filteredExpenses.map((expense) => (
            <ExpenseItem
                key={expense.id}
                date={expense.date}
                title={expense.title}
                amount={expense.amount}
            />
        ))
    }

    return (
        <div className='expenses'>
            <ExpenseFilter onChangeFilter={onChangeFilterHandler} selected={filteredYear} />
            {expenseContent}
        </div>
    )
}

