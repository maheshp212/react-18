import { useState } from "react";
import "./NewExpense.css";

const NewExpense = (props) =>{

    // const arr = useState('');
    // var name = arr[0];
    // var setName = arr[1];
    const [name, setName] = useState('');

    const [date, setDate] = useState('');
    const [amount, setAmount] = useState('');
    const nameHandler = (e) =>{
        setName(e.target.value);
    }
    const dateHandler = (e) =>{
        setDate(e.target.value);
    }

    const amountHandler = (e) =>{
        setAmount(e.target.value);
    }
    const create = () =>{
        // var obj = {
        //     name:name,
        //     date:date,
        //     amount:amount
        // }
        var obj = {name, date, amount}
        // console.log(obj);
        props.addExepense(obj);
    }
    const reset = () =>{
        setName('');
        setDate('');
        setAmount('');
    }
    return <div className="new-expense"> 
        <div className="form">
            <h1>New Expense</h1>
            <div className="form-item"> 
                <input type="text" placeholder="name" value={name} onChange={nameHandler}/> 
            </div>
            <div className="form-item"> <input type="date" value={date} onChange={dateHandler}/></div>
            <div className="form-item"> <input type="number" placeholder="amount" value={amount} onChange={amountHandler}/></div>
            <div className="form-item"> <button onClick={create}> Create Expense </button></div>
            <div className="form-item"> <button onClick={reset}> Reset Form </button></div>
        </div>
        </div>
}

export default NewExpense;