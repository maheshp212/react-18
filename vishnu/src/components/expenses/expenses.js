import { useState } from "react";
import ExpenseForm from "./expense-form/expense-form";
import Expenseslist from "./expenses-list/expenses-list";
import "./expenses.css";
function Expenses() {
  let data = [
    { date: "2023-03-22", name: "Car Insurance", amount: 5000 },
    { date: "2023-06-12", name: "Bike Insurance", amount: 2000 },
    { date: "2022-02-14", name: "Home Loan", amount: 45000 },
    { date: "2022-03-01", name: "Cooker", amount: 1500 },
    { date: "2023-11-24", name: "Electircity", amount: 300 },
    { date: "2021-10-22", name: "Groceries", amount: 3400 },
    { date: "2021-03-18", name: "Rent", amount: 35000 },
    { date: "2021-12-16", name: "Furniture", amount: 55000 },
  ];

  const [list, setList] = useState(data);

  const newExpenseHandler = (obj) =>{
    setList((prevObj) => {return [...prevObj, obj]})

  }
  return (
    <div>
      <ExpenseForm onNewExense={newExpenseHandler} />
      <Expenseslist list= {list}/>



       {/* <div className="expense-item">
      <div className="expense-name">{data[0].name}</div>
      <div className="expense-date">{data[0].date}</div>
      <div className="expense-amount">{data[0].amount}</div>
    </div>
    <div className="expense-item">
      <div className="expense-name">{data[1].name}</div>
      <div className="expense-date">{data[1].date}</div>
      <div className="expense-amount">{data[1].amount}</div>
    </div>
    <div className="expense-item">
      <div className="expense-name">{data[2].name}</div>
      <div className="expense-date">{data[2].date}</div>
      <div className="expense-amount">{data[2].amount}</div>
    </div>
    <div className="expense-item">
      <div className="expense-name">{data[3].name}</div>
      <div className="expense-date">{data[3].date}</div>
      <div className="expense-amount">{data[3].amount}</div>
    </div>
    <div className="expense-item">
      <div className="expense-name">{data[4].name}</div>
      <div className="expense-date">{data[4].date}</div>
      <div className="expense-amount">{data[4].amount}</div>
    </div>
    <div className="expense-item">
      <div className="expense-name">{data[5].name}</div>
      <div className="expense-date">{data[5].date}</div>
      <div className="expense-amount">{data[5].amount}</div>
    </div>
    <div className="expense-item">
      <div className="expense-name">{data[6].name}</div>
      <div className="expense-date">{data[6].date}</div>
      <div className="expense-amount">{data[6].amount}</div>
    </div>
    <div className="expense-item">
      <div className="expense-name">{data[7].name}</div>
      <div className="expense-date">{data[7].date}</div>
      <div className="expense-amount">Rs. {data[7].amount}</div>
    </div> */}
    </div>
  );
}

export default Expenses;
