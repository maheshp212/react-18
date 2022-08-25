import Card from '../ui/card';
import ExpenseItem from './ExpenseItem';
import './Expenses.css'
const Expenses = (props) => {
    const expenseList = props.items
    return(
        <Card className="expenses">
            <ExpenseItem title={expenseList[0].title} amount={expenseList[0].amount} date={expenseList[0].date} /> 
            <ExpenseItem title={expenseList[1].title} amount={expenseList[1].amount} date={expenseList[1].date} /> 
            <ExpenseItem title={expenseList[2].title} amount={expenseList[2].amount} date={expenseList[2].date} /> 
            <ExpenseItem title={expenseList[3].title} amount={expenseList[3].amount} date={expenseList[3].date} /> 
            <ExpenseItem title={expenseList[4].title} amount={expenseList[4].amount} date={expenseList[4].date} /> 
            <ExpenseItem title={expenseList[5].title} amount={expenseList[5].amount} date={expenseList[5].date} />
        </Card>
    )
}
export default Expenses;