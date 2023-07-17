import { useState } from "react";
import ExpensesForm from "./expenses-form/expenses-form";
import ExpensesList from "./expenses-list/expenses-list";
import "./expenses.css";
import ExpenseFilter from "./expense-filter/expense-filter";
function Expenses() {
  let data = [
    { date: "2023-12-24", name: "car Insurance", amount: 5000 },
    { date: "2022-11-14", name: "Bike Insurance", amount: 3000 },
    { date: "2021-12-12", name: "Petrol", amount: 700 },
    { date: "2023-07-07", name: "Groceries", amount: 1200 },
    { date: "2023-05-12", name: "House Emi", amount: 15000 },
    { date: "2023-06-13", name: "Internet", amount: 7500 },
    { date: "2022-11-27", name: "Misc", amount: 2300 },
  ];
  const [expenses, setExpenses] = useState(data); // full list
  const [filteredList, setFilteredList] = useState(data);  // filtered data
  
  
  const addNew = (obj) =>{
    console.log(obj);
    setExpenses((curVal)=>{
        return [...curVal, obj]
    });
    setFilteredList((curVal)=>{
      return [...curVal, obj]
    });

    // setExpenses((curVal)=>{
    //     curVal.push(obj); // object
    //     return curVal; // array
    //     //return [...curVal, obj]
    // })
    //expenses.push(obj);
  }

  const filterValues = (year) =>{

    if(year === 'all'){
      setFilteredList(expenses);
    } else{
      let list = expenses.filter(item =>{
        let date = new Date(item.date);
        return (date.getFullYear() == year);
      });
      
      setFilteredList(list);
    }

  }
  return (
    <div className="expenses">
      <ExpensesForm onCreate={addNew}/>
      <ExpenseFilter onChangeFilter={filterValues}></ExpenseFilter>
      <ExpensesList data={filteredList}/>
    </div>
  );
}

export default Expenses;
