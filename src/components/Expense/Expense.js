import React, { useState } from "react";

import { ExpenseFilter } from './ExpenseFilter/ExpenseFilter';
import { ExpenseList } from "./ExpenseList/ExpenseList";

import './Expense.css';

export const Expense = props => {
    const [filteredYear, setFilteredYear] = useState('2020')
    const filteredExpenses = props.items.filter(expense => {
        return new Date(expense.date).getFullYear().toString() === filteredYear
    })

    const onChangeFilterHandler = year => {
        setFilteredYear(year)
    }

    return (
        <div className='expenses'>
            <ExpenseFilter onChangeFilter={onChangeFilterHandler} selected={filteredYear} />
            <ExpenseList items={filteredExpenses}/>
        </div>
    )
}

