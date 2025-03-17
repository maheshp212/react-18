
import { useState } from "react";
import "./create-expense.css"
function CreateExpense(props){

    let [name, setName] = useState('')
    const [amount, setAmount] = useState('')
    const [date, setDate] = useState('')
    const nameHandler = (event) =>{
        setName(event.target.value);
    }
    const clear = () =>{
        setName('')
        setAmount('')
        setDate('')
    }
    const create = () =>{
        let obj = {name, amount, date}
        props.createExpense(obj)
        clear();
    }
    return <div className="create-expnese">
        <div className="form">
           <h2> Add new Expense</h2>
           <div className="form-item"> <input type="text" placeholder="name" value={name} onChange={nameHandler}/> </div> {name}
           <div className="form-item"> <input type="number" placeholder="Amount" value={amount} onChange={(e) => {setAmount(e.target.value)}}/> </div> {amount}
           <div className="form-item"> <input type="date" value={date} onChange={(event) => {setDate(event.target.value)}} /> </div>{date}
           <div className="form-item"> <button className="button" onClick={create}> Create</button> </div>
           <div className="form-item"> <button className="button" onClick={clear}> Clear</button> </div>
           </div> 
    </div>
}
export default CreateExpense;