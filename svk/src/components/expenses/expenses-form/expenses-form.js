import './expenses-form.css';
function ExpensesForm(){
    return <div className='expenses-form'>
        <div className='form-container'>
            <div><h2> Expenses Form </h2></div>
            <div> <input type='text' placeholder='Name'/></div>
            <div> <input type='number' placeholder='Amount'/></div>
            <div> <input type='date' /></div>
            <div> <button>Submit</button></div>
        </div>
    </div>
}

export default ExpensesForm;