import { NewExpenseForm } from '../newExpenseForm/NewExpenseForm';
import './NewExpense.css';
export const NewExpense = props => {
    return(
        <div className='new-expense'>
            <NewExpenseForm />
        </div>
    )
}