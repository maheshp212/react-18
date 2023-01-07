import ExpenseDate from "../expense-date/expense-date";
import "./expense-item.css";
const ExpenseItem = (props) => {
  return (
    <div className="expense-item">
        <ExpenseDate date={props?.date}/>
        <div className="expense-name">{props?.title} </div>
        <div className="expense-amount">{props?.price}</div>
    </div>
  );
};
export default ExpenseItem;
