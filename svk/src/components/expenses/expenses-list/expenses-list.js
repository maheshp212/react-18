import './expenses-list.css';
import ExpensesItem from "../expenses-item/expenses-item";

function ExpensesList(props) {
  return (
    <div className="expenses-list ">
      <div className="expense-item heading ">
        <div className="expense-name">Name</div>
        <div className="expense-date">Date</div>
        <div className="expense-amount">Amount</div>
      </div>
      {props.data.map((item, index) => {
        return <ExpensesItem key={'item-'+index} item={item} />;
      })}
    </div>
  );
}

export default ExpensesList;
