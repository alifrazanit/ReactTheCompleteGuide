import { NewExpenseForm } from '../NewExpenseForm/NewExpenseForm';
import './NewExpense.css';
export const NewExpense = props => {
    const onSaveExpanseHandler = eexpenseDataEntered => {
        const expenseData = {
            id: Math.random().toString(),
            ...eexpenseDataEntered
        }
        props.onSaveExpanse(expenseData)
    }
    return (
        <div className='new-expense'>
            <NewExpenseForm onSaveExpanse={onSaveExpanseHandler}/>
        </div>
    )
}