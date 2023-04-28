import { useState } from 'react';
import './NewExpenseForm.css';

export const NewExpenseForm = props => {
    const [title, setTitle] = useState(props.title);
    const [amount, setAmount] = useState(props.amount);
    const [date, setDate] = useState(props.date);
    const onChangeTitle = e => {
        setTitle(e.target.value);
    }
    const onChangeAmount = e => {
        setAmount(e.target.value);
    }
    const onChangeDate = e => {
        setDate(e.target.value);
    }
    const onSubmitHandler = e => {
        e.preventDefault();
        const expanseData = {
            title: title,
            amount: amount,
            date: new Date(date)
        }
        setTitle('');
        setAmount('');
        setDate('');
        props.onSaveExpanse(expanseData)
    }

    return (
        <form onSubmit={onSubmitHandler}>
            <div className='new-expense__controls'>
                <div className='new-expense__control'>
                    <label>Title</label>
                    <input type='text' onChange={onChangeTitle} value={title}/>
                </div>
                <div className='new-expense__control'>
                    <label>Amount</label>
                    <input type='number' min="0.01" step="0.01"  onChange={onChangeAmount} value={amount}/>
                </div>
                <div className='new-expense__control'>
                    <label>Date</label>
                    <input type='date' min="2019-01-01" max="2023-12-31" onChange={onChangeDate} value={date}/>
                </div>
            </div>
            <div className='new-expense__actions'>
                <button type='submit'>Add Expense</button>
            </div>
        </form>
    )
}