import ExpenseItem from "../expense-item/expense-item";

function ExpensesList(props){
    // this is passing data from parent to child

    return  <div className="expense-list-container">
    <div className="expense-list">
        {props.expenseitems.length && props.expenseitems.map((expense, index)=>{
            return  <ExpenseItem key={'item-'+index} item={expense} />
        })}

        {(props.expenseitems.length == 0) && <div><h1>No Records Found</h1></div>}
        </div>
        </div>
}

export default ExpensesList;
