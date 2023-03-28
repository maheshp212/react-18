import ExpenseItem from "../expense-item/expense-item";

function ExpensesList(props){
    return  <>
    {props.name}
        {props.expenseitems.map((expense, index)=>{
            return  <ExpenseItem key={'item-'+index} item={expense} />
        })}
        </>
}

export default ExpensesList;