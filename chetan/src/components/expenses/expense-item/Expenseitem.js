
import "./Expenseitem.css"
function Expenseitem({expense}){
    return <div className="expense">
    <div className="date">{expense.date}</div>
    <div className="name">{expense.name}</div>
    <div className="amount">{expense.amount}</div>
</div>
}
export default Expenseitem;