import { NewExpenseForm } from '../NewExpenseForm/NewExpenseForm';
import './NewExpense.css';
export const NewExpense = props => {
    return (
        <div className='new-expense'>
            <NewExpenseForm />
        </div>
    )
}