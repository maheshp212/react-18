import './ExpenseForm.css'
import { useState } from 'react';
const ExpenseForm = (props)=>{

    const [entertedTitle, setEnteredTitle] = useState('');
    const [entertedAmount, setEnteredAmount] = useState('');
    const [entertedDate, setEnteredDate] = useState('');
    // const [userInput, setUserInput] = useState({
    //     entertedTitle :'',
    //     entertedAmount:'',
    //     entertedDate: '',
    // });

    const titleChangeHandler = (event)=>{
         setEnteredTitle(event.target.value);
        //setUserInput({...userInput, entertedTitle: event.target.value});

        // setUserInput((prevState)=>{
        //     return {
        //         ...prevState,
        //         entertedTitle: event.target.value
        //     }
        // })
        // console.log(userInput);
    }
    const amountChangeHandler = (event)=>{
        setEnteredAmount(event.target.value);
        // setUserInput({...userInput,entertedAmount: event.target.value})
        // console.log(userInput);
    }
    const dateChangeHandler = (event)=>{
        //console.log(event.target.value)
        setEnteredDate(event.target.value);
        // setUserInput({...userInput, entertedDate: new Date(event.target.value)})
        // console.log(userInput);
    }
    const submitHandler = (event)=>{
        event.preventDefault();
        const expenseData = {
            title: entertedTitle,
            amount : entertedAmount,
            date : new Date(entertedDate)
        }

        setEnteredTitle('');
        setEnteredAmount('');
        setEnteredDate('');

        props.onSaveExpensesData(expenseData);

    }
    return <form onSubmit={submitHandler}>
        <div>
            <label> Title</label>
            <div><input type="text" value={entertedTitle} onChange={titleChangeHandler} /></div>
        </div>
        <div>
            <label> Amount</label>
            <div><input type="number" value={entertedAmount} onChange={amountChangeHandler}/></div>
        </div>
        <div>
            <label> Date</label>
            <div><input type="date" value={entertedDate} onChange={dateChangeHandler}/></div>
        </div>
        <div>
            <button >Create</button>
        </div>
    </form>
}

export default ExpenseForm