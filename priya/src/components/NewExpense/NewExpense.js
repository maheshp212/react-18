import ExpenseForm from './ExpenseForm'
import './NewExpense.css'
const NewExpense = (props)=>{

    const saveExpensesDataHandler = (expenseItem) =>{
        const expense = {
            ...expenseItem,
            id: Math.random().toString()
        }
        props.onAddExpense(expense);
    }
    return <div className='expense-form'>
        <ExpenseForm onSaveExpensesData ={saveExpensesDataHandler} />
    </div>
}

export default NewExpense