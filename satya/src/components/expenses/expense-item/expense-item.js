function ExpenseItem(props){
    const {expense} = props
    return <div className="expense-item">
    <div className="expense-item-name">{expense.name}</div>
    <div className="expense-item-date">{expense.date}</div>
    <div className="expense-item-amount">$ {expense.amount}</div>
</div>
}
export default ExpenseItem;