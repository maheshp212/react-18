function ExpenseItem (p){
    return <div className='expense-item'>
    <div className='expense-name'>{p.item.name}**</div>
    <div className='expense-date'>{p.item.date}</div>
    <div className='expense-amount'>{p.item.amount}</div>
</div>
}
export default ExpenseItem;