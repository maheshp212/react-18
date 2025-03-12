
import Expenseitem from "../expense-item/Expenseitem";
import "./ExpensesList.css"
function Expenseslist({list, name}){
// function Expenseslist(props){

    // let {name , list} = props;
    // let name = props.nameeeeeeeeeeee
    // let list  = props.list
    return <div> 
            {name}
            <div className="expenses-list">
                {list.map((item, index) =>{
                    return <Expenseitem expense={item}/>;
                })}
            </div>
    </div>
}
export default Expenseslist;