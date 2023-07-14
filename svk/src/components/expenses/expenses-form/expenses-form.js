import { useState } from 'react';
import './expenses-form.css';
function ExpensesForm(props){
    const [name, setName] = useState(''); 
    const [amount, setAmount] = useState('');
    const [date, setDate] = useState('');

    const nameHandler = (e)=>{
        setName(e.target.value)
    }
    const submitHandler = () =>{
        let obj = {
            name:name,
            amount: amount,
            date:date
        };
        // let obj2 = {name,amount,date};
        props.onCreate(obj);
        clearData();

    }

    const clearData = ()=>{
        setName('');
        setAmount('');
        setDate('');
    }
    return <div className='expenses-form'>
        <div className='form-container'>
            <div><h2> Expenses Form </h2></div>
            <div> <input type='text' placeholder='Name' value={name} onChange={nameHandler}/></div>
            <div> <input type='number' placeholder='Amount' value={amount} onChange={({target})=>setAmount(target.value)}/></div>
            <div> <input type='date' value={date} onChange={(e)=>setDate(e.target.value)}/></div>
            <div> <button onClick={submitHandler}>Submit</button></div>

            {/* {name} -- {amount} -- {date} */}
        </div>
    </div>
}

export default ExpensesForm;