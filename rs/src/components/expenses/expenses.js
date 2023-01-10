import { useState } from 'react';
import ExpenseFilter from './expense-filter/expense-filter';
import ExpenseItem from './expense-item/expense-item';
import './expenses.css'
const  Expenses = ()=>{
    //use state;
    const expensesList = [
        {date: new Date('2023-10-12'), name: 'Car Insurance', amount: 3000},
        {date: new Date('2022-10-12'), name: 'Bike Insurance', amount: 500},
        {date: new Date('2021-10-12'), name: 'Lorry Insurance', amount: 1000},
        {date: new Date('2022-09-12'), name: 'Vegetables', amount: 300},
        {date: new Date('2023-10-13'), name: 'clothes', amount: 2300},
        {date: new Date('2023-11-15'), name: 'Kirana', amount: 700},
        {date: new Date('2021-09-12'), name: 'Fuel', amount: 2000},
    ];

    const [filterYear, setFilterYear] = useState("");
    const [filteredList, setFilteredList] = useState(expensesList);

    const changeFilterHander = (year) =>{
        setFilterYear(year);
        if(year === 'all'){
            setFilteredList(expensesList);
        } else {
            let list =  expensesList.filter((item)=>{
                return (item.date.getFullYear() == year);
              });
            setFilteredList(list);
        }
    }
    
    return (
    <div className='expense-container'>
        <h2> Im Expenses</h2>
        <ExpenseFilter filterYear={filterYear} onChangeFilter={changeFilterHander}/>
        {filteredList.map((expense, index)=>{
            return (        
            <ExpenseItem key={index}
                date = {expense.date}
                title={expense.name}
                price={expense.amount}
            />
             )
        })}
        {!filteredList.length && (<div className='no-data'> No Data Found</div>)}
        {/* <ExpenseItem
            date = {expensesList[0]?.date}
            title={expensesList[0].name}
            price={expensesList[0].amount}
        />
        <ExpenseItem
            date = {expensesList[1]?.date}
            title={expensesList[1].name}
            price={expensesList[1].amount}
        />
        <ExpenseItem
            date = {expensesList[2]?.date}
            title={expensesList[2].name}
            price={expensesList[2].amount}
        />
        <ExpenseItem
            date = {expensesList[3]?.date}
            title={expensesList[3].name}
            price={expensesList[3].amount}
        />
        <ExpenseItem
            date = {expensesList[4]?.date}
            title={expensesList[4].name}
            price={expensesList[4].amount}
        /> */}

    </div>);
}
export default Expenses;