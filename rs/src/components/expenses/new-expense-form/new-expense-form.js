import './new-expense-form.css';
import { useState } from 'react';
const NewExpenseForm = (props) =>{
  const [name, setName] = useState('');
  const [amount, setAmount] = useState('');
  const [date, setDate] = useState('');
  const nameHandler = (e)=>{
    setName(e.target.value);
  }
  const amountHandler = (e)=>{
    setAmount(e.target.value);
  }
  const dateHandler = (e)=>{
    setDate(e.target.value);
  }
  const buttonHandler = (e) =>{
    //let obj = {name,date,amount}
    //let obj3 = {name:name,date:date,amount:amount}
    e.preventDefault(); // it will stop the default behaviour of the form / element
    let obj = {
      name :name,
      date : new Date(date),
      amount: amount
    }
    props.onCreate(obj);
    setAmount('');
    setDate('');
    setName('');
  }
    return(<div className="new-expense-form">
      <form onSubmit={buttonHandler}>
        <div>
          <label>Name</label>
          <input type="text" name="name" value={name} onChange={nameHandler} />
        </div>
        <div>
        <label>Amount</label>
          <input type="text" name="amount" value={amount} onChange={amountHandler} />
        </div>
        <div>
        <label>Date</label>
          <input type="date" name="date" value={date} onChange={dateHandler} />
        </div>
        <div>
          <button >Create</button>
        </div>
        </form>
    </div>)
}

export default NewExpenseForm;

