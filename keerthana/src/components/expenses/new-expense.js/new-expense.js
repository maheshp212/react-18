import { useState } from "react";

function NewExpense(props){
    const [fname, setName] = useState('');
    const [amount, setAmount] = useState('');
    const [date, setDate] = useState('');

    const nameHandler = (event) =>{
        setName(event.target.value);
    }
    const amountHandler = (event) =>{
        setAmount(event.target.value);
    }
    var dateHandler = (event) =>{
        setDate(event.target.value);
    }

    let submitHandler = () =>{
        let obj = {
            name: fname,
            date:date,
            amount: amount
        }

        props.onCreate(obj);
    }
    return <div className="new-expense">
        <div className="form">
            <h1>Add New Expense</h1>
            <div className="form-item"><input type="text" placeholder="name" value={fname} onChange={nameHandler}/>  </div> {fname}
            <div className="form-item"><input type="number" placeholder="amount" value={amount} onChange={amountHandler}/>  </div>
            <div className="form-item"><input type="date" value={date} onChange={dateHandler}/>  </div>
            <div className="form-item"><button onClick={submitHandler}> Create </button> </div>
        </div>

    </div>
}
export default NewExpense;