import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate'
import Card from '../ui/card';
import {useState} from 'react';

const ExpenseItem = (props) => {
  // const [title, setTitle] =  useState(props.title);
  // const [num, setNum] =  useState(0);
  
  // const clickHandler = () =>{
  //   setTitle('updated !!' + num );
  //   setNum(num + 1);
  //   console.log(title);
  // }
  return (
    <Card className='expense-item' >
      <div className="expense-item__date">
        <ExpenseDate
        expenseDate={props.date}/> 
      </div>
      <div className="expense-item__description">
        <div className='expense-item__name'>{props.title}</div>
        <div className="expense-item__amount">Rs. {props.amount}</div>
        {/* <button onClick={clickHandler}>Change Title</button> */}
      </div>
    </Card>
  );
}

export default ExpenseItem;
