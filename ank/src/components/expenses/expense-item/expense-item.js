function ExpenseItem (props){
    return <div className='expense-item'>
    <div className='expense-name'>{props.item.name}**</div>
    <div className='expense-date'>{props.item.date}</div>
    <div className='expense-amount'>{props.item.amount}</div>
</div>
}
export default ExpenseItem;