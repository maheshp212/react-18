
import { useState } from "react";
import CreateExpense from "./create-expense/create-expense";
import Expenseslist from "./expenses-list/ExpensesList";
import "./Expenses.css"
function Expenses(){

    let data =  [
        {date:'2023-03-12', name: 'Car Insurance' , amount: 5000},
        {date:'2024-03-13', name: 'Bike Insurance' , amount: 2000},
        {date:'2024-04-22', name: 'Fridge' , amount: 35000},
        {date:'2024-09-19', name: 'AC' , amount: 45000},
        {date:'2025-01-16', name: 'Sofa' , amount: 15000},
        {date:'2025-02-21', name: 'washing machine' , amount: 50000},
    ]

    const [expenses , setExpenses] = useState(data);
    const newExpenseItem = (obj) =>{
        console.log('new expense item came ' + obj)
        // data.push(obj);
        setExpenses((prevstate) => [...prevstate, obj])
    }
    //<> </> fragment  
    return <> 
            <CreateExpense createExpense={newExpenseItem}/>
            <Expenseslist list={expenses} name="chetan" />
    </>
}
export default Expenses;