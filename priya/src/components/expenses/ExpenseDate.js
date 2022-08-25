import './ExpenseDate.css'
const ExpenseDate = (props)=>{
    const month = props.expenseDate.toLocaleString('en-us',{month:'long'});
    const day = props.expenseDate.toLocaleString('en-us',{day:'2-digit'});
    const year = props.expenseDate.getFullYear();
  
    return (<div className="expense-date">
        <div>{month}</div>
        <div>{day}</div>
        <div>{year}</div>
    </div>)
}
export default ExpenseDate;