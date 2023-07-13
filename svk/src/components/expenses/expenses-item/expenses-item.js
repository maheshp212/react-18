function ExpensesItem(props){
    return <div className='expense-item'>
    <div className='expense-name'>{props.eitem?.name}</div>
    <div className='expense-date'>{props.eitem?.date}</div>
    <div className='expense-amount'>{props.eitem?.amount}</div>
</div>
}

export default ExpensesItem;