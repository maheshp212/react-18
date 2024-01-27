import "./NewExpense.css";

const NewExpense = () =>{

    return <div className="new-expense"> 
        <div className="form">
            <h1>New Expense</h1>
            <div className="form-item"> <input type="text" placeholder="name"/></div>
            <div className="form-item"> <input type="date"/></div>
            <div className="form-item"> <input type="number" placeholder="amount"/></div>
            <div className="form-item"> <button> Create Expense </button></div>
            <div className="form-item"> <button> Reset Form </button></div>
        </div>
        </div>
}

export default NewExpense;