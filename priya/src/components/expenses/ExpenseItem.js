import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate'
import Card from '../ui/card';
function ExpenseItem(props) {
  // {props.date.toISOString()}
  return (
    <Card className='expense-item' >
      <div className="expense-item__date">
        <ExpenseDate
        expenseDate={props.date}/> 
      </div>
      <div className="expense-item__description">
        <div className='expense-item__name'>{props.title}</div>
        <div className="expense-item__amount">Rs. {props.amount}</div>
      </div>
    </Card>
  );
}

export default ExpenseItem;
