import ExpenseItem from "../expense-item/expense-item";

function ExpensesList(props){

//   const expenses = props.expenses;
  
  const {expenses, name} = props;
  console.log(props)
  return <>
        {expenses.map((expenseItem)=>{
            return <ExpenseItem expense={expenseItem}/>
        })}
    </>
}
export default ExpensesList

