import './expenses.css';
import ExpensesList from './expenses-list/expenses-list';
import NewExpense from './new-expense/new-expense'
import { useState } from 'react';
function Expenses(){
    let data = [
        {date:'2023-03-22', name:'car Insurance', amount:5000},
        {date:'2022-04-17', name:'bike Insurance', amount:2000},
        {date:'2023-05-11', name:'AC', amount:35000},
        {date:'2022-01-05', name:'TV', amount:45000},
        {date:'2021-03-12', name:'Groceries', amount:500},
        {date:'2023-02-18', name:'Furniture', amount:125000},
    ]
    const [expenses, setExpenses] = useState(data);
    const newRecord = (obj) => {
        setExpenses((prevState) =>{
            return [...prevState, obj];
        });
    }
    return <> 
        <NewExpense onCreate={newRecord}/>
        Filter 
          <ExpensesList expenseitems={expenses} name="'mahesh'"/>
            
{/*            

            <div className='expense-item'>
                <div className='expense-name'>{data[0].name}</div>
                <div className='expense-date'>{data[0].date}</div>
                <div className='expense-amount'>{data[0].amount}</div>
            </div>
            <div className='expense-item'>
                <div className='expense-name'>{data[1].name}</div>
                <div className='expense-date'>{data[1].date}</div>
                <div className='expense-amount'>{data[1].amount}</div>
            </div>
            <div className='expense-item'>
                <div className='expense-name'>{data[2].name}</div>
                <div className='expense-date'>{data[2].date}</div>
                <div className='expense-amount'>{data[2].amount}</div>
            </div>
            <div className='expense-item'>
                <div className='expense-name'>{data[3].name}</div>
                <div className='expense-date'>{data[3].date}</div>
                <div className='expense-amount'>{data[3].amount}</div>
            </div>
            <div className='expense-item'>
                <div className='expense-name'>{data[4].name}</div>
                <div className='expense-date'>{data[4].date}</div>
                <div className='expense-amount'>{data[4].amount}</div>
            </div>
            <div className='expense-item'>
                <div className='expense-name'>{data[5].name}</div>
                <div className='expense-date'>{data[5].date}</div>
                <div className='expense-amount'>{data[5].amount}</div>
            </div> */}
        </>
}

export default Expenses

// <> </>-- fragment