import { useState } from 'react';
import ExpenseList from './expense-list/expense-list';
import './expenses.css';
import NewExpense from './new-expense.js/new-expense';
function Expenses(){

    let data = [
        {date: '2023-03-22', name: 'car', amount: 123000},
        {date: '2021-09-01', name: 'bike insuarnac ', amount: 3000},
        {date: '2020-12-12', name: 'AC', amount: 23000},
        {date: '2020-12-17', name: 'fridge', amount: 25000},
        {date: '2021-07-23', name: 'TV', amount: 13000},
        {date: '2023-05-31', name: 'Groceris', amount: 2300},
    ];

    const [expenses,setExpenses] = useState(data);

    const newExpense = (obj) =>{
        console.log(obj);

        // expenses.push(obj);
        // setExpenses(expenses);

        setExpenses((prev) => {
            // prev -- array of objects
            // obj -- object
            return [...prev, obj];
        })
    }
    return <div>
        <NewExpense onCreate={newExpense}/>
        <ExpenseList list = {expenses}/>
    </div>
}
export default Expenses
