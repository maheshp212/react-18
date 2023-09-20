import { useState } from "react";
import "./expense-form.css";
function ExpenseForm(props){

                // Data Types in JavaScript
            // - primitive 
            //     - number
            //     - string
            //     - null
            //     - boolean
            //     - undefined

            // - non-primitve (very imp)
            //     - object
            //     - array

            //function ()

    // useState is a function which is returning an Array of 2 values which are string & function
    const [name, setName] = useState('');
    const [amount, setAmount] = useState('');
    const [date, setDate] = useState('');

    const nameHandler = (event)=>{
        //name = event.target.value;
        setName(event.target.value);
    }
    const amountHandler = (event) =>{
        setAmount(event.target.value)
    } 
    const dateHandler = (event) =>{
        setDate(event.target.value)
    } 

    const createHandler = () =>{
        const obj = {
            name:name,
            amount:amount,
            date:date
        }

        //passing data from child to parent
        props.onNewExense(obj);
        cancelHandler();
    }

    const cancelHandler = () =>{
        setName('')
        setAmount('');
        setDate('');
    }
    return (<div className="expense-form">
        <div className="form">
            <h2> Add New Expense</h2>
            `<div className="form-item"> <input type="text" placeholder="Name" value={name} onChange={nameHandler} /></div>`
            <div className="form-item"> <input type="number" placeholder="Amount" value={amount} onChange={amountHandler} /></div>
            <div className="form-item"> <input type="date" value={date} onChange={dateHandler} /></div>
            <div className="form-item"> <button onClick={createHandler}> Create Expense </button></div>
            <div className="form-item"> <button onClick={cancelHandler}> Cancel </button></div>
        </div>
    </div>)
}

export default ExpenseForm;