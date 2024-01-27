import "./Expenses.css";
import ExpenseList from "./expense-list/ExpenseList";
import NewExpense from "./new-expense/NewExpense";

const Expenses = () => {
  let data = [
    { date: "2024-01-12", name: "Car Insurance", amount: 5000 },
    { date: "2023-11-22", name: "Bike Insurance", amount: 2500 },
    { date: "2023-06-16", name: "TV", amount: 55000 },
    { date: "2023-02-11", name: "Washing Maching", amount: 15000 },
    { date: "2022-09-12", name: "Groceries", amount: 500 },
    { date: "2022-07-12", name: "Fridge", amount: 45500 },
  ];
  return (
    <div>
        <NewExpense/>
        <ExpenseList expenses={data} name="psss" age="23"/>






      {/*<div className="expenses">
        <div className="expense-item header">
          <div className="expense-name">Name</div>
          <div className="expense-date">Date</div>
          <div className="expense-amount">Amount</div>
        </div>
         <div className="expense-item">
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
      </div>*/}
    </div>
  );
};

export default Expenses;
