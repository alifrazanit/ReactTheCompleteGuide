import './ExpenseList.css';
import { ExpenseItem } from '../ExpenseItem/ExpenseItem';
export const ExpenseList = props => {
    if (props.items.length === 0) {
        return <h2 className='expenses-list__fallback'>Found no Expense</h2>
    }
    return (
        <ul className='expenses-list'>
            {props.items.map((expense) => (
                <ExpenseItem
                    key={expense.id}
                    date={expense.date}
                    title={expense.title}
                    amount={expense.amount}
                />
            ))}
        </ul>
    );
}