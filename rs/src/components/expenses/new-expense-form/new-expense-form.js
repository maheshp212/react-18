import './new-expense-form.css';
import { useEffect, useState } from 'react';
import styled from 'styled-components';
const NewExpenseForm = (props) =>{
  const [name, setName] = useState('');
  const [amount, setAmount] = useState('');
  const [date, setDate] = useState('');
  const [isNameDirty, setIsNameDirty] = useState(false);
  const [isNameTouched, setIsNameTouched] = useState(false);
  const [isNameValid, setIsNameValid] = useState(true);
  const [formSubmitted, setFormSubmitted] = useState(false);

  useEffect(()=>{
    // let text = "Mahesh$1234";
    let pattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#$@!%&*?])[A-Za-z\d#$@!%&*?]{8,30}$/;
    //let result = pattern.test(text);

    if(name.length === 0){
      setIsNameValid(false);
    }  if(!pattern.test(name)){
      setIsNameValid(false);
    } else {
      setIsNameValid(true);
    }
  },[name])
  const nameHandler = (e)=>{
    setName(e.target.value);
    setIsNameDirty(true);
  }
const nameValidHandler = ()=>{
  setIsNameTouched(true);
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
    setFormSubmitted(true);
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

  const ExpenseForm = styled.div`
  background-color: #c85c8e;
  padding: 10px;
  border-radius: 10px;
  text-align: center;
  color: white;
  font-size: 16px;
  `
  //when to show errors
  // -- while typing
  // -- when moved to next field
  // -- when you submit the form
    return(<ExpenseForm>
      <form onSubmit={buttonHandler}>
        <div>
          <label>Name</label>
          {/* minLength="3" required pattern='[A-Z][0-9]*' */}
          <input type="text" name="name"  value={name} maxLength="6" onChange={nameHandler} onBlur={nameValidHandler}/>
          {/* {isNameDirty && !isNameValid && (<p className='error'> the name is empty</p>)} */}
          {formSubmitted && !isNameValid && (<p className='error'> the name is empty</p>)}
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
    </ExpenseForm>)
}

export default NewExpenseForm;

