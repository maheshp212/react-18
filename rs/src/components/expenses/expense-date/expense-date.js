import './expense-date.css';
const ExpenseDate = (props) =>{
    return(<div className="expense-date">
    <div className="expense-month">
      {props?.date?.toLocaleString("en-us", { month: "long" })}{" "}
    </div>
    <div className="expense-day">
      {props?.date?.toLocaleString("en-us", { day: "2-digit" })}{" "}
    </div>
    <div className="expense-year">{props?.date?.getFullYear()} </div>
    </div>)
}

export default ExpenseDate;

