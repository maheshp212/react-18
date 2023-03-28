import {useState} from 'react';
import './new-expense.css'
function NewExpense(props){

    const [name, setName] = useState('');
    const [amount, setAmount] = useState('');
    const [day, setDay] = useState('');

    const nameHandler = (event) =>{
        setName(event.target.value)
    }
    const dayHandler = (event) =>{
        setDay(event.target.value)
    }
    const amountHandler = (event) =>{
        setAmount(event.target.value)
    }
    const createHandler = () =>{

        let obj = {
            name : name,
            amount: amount,
            date: day
        }
        props.onCreate(obj);
        cancelHandler();
    }
    const cancelHandler = () =>{
        setName('')
        setAmount('');
        setDay('');
    }
    return <div className="new-expense">
        <div className='form'>
        <h2>Add New Expense</h2>

            <div className='form-item'> <input type="text"  placeholder='Name' value={name} onChange={nameHandler} /> </div>
            <div  className='form-item'> <input type="number" placeholder='Amount'  value={amount} onChange={amountHandler} /> </div>
            <div  className='form-item'> <input type="date"  value={day} onChange={dayHandler} /> </div>
            <div  className='form-item'> <button onClick={createHandler}> Create Expense </button> </div>
            <div  className='form-item'> <button onClick={cancelHandler}> Cancel </button> </div>
            
        </div>
    </div>
}

export default NewExpense