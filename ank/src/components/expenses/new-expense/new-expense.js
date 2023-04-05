import {useState} from 'react';
import './new-expense.css'
function NewExpense(props){

    const [name, setName] = useState('');
    const [amount, setAmount] = useState('');
    const [day, setDay] = useState('');

    // this will change the value of the `name` variable
    const nameHandler = (event) =>{
        // name = event.target.value;// this line will not re-load the template
        setName(event.target.value) // this will re-load the template with new/ updated varibale values 
    }
    // this will change the value of the `day` variable
    const dayHandler = (event) =>{
        setDay(event.target.value)
    }

    // this will change the value of the `amount` variable
    const amountHandler = (event) =>{
        setAmount(event.target.value)
    }
    const createHandler = () =>{

        let obj = {
            name : name,
            amount: amount,
            date: day
        }

        // passing data from child to parent
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

// onclick 
// (click)
// onClick
// useState()