import './Expense.css';
import { ExpenseItem } from "../expenseItem/ExpenseItem";
import { Card } from '../../card/Card';
export const Expense = props => {
    return (
        <Card className='expenses'>
            <ExpenseItem
                id={props.data[0].id}
                title={props.data[0].title}
                amount={props.data[0].amount}
                date={props.data[0].date}
            />
        </Card>
    )
}