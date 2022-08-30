import ExpenseItem from "./ExpenseItem";
import './ExpensesList.css'
const ExpenseList = (props) => {
    if(props.items.length ==0){
        return (<div className="not-found">No Data Found</div>);
    } else {
        return props.items.map((item, index) => {
            return (
              <ExpenseItem
                key={index}
                title={item.title}
                amount={item.amount}
                date={item.date}
              />
            );
          });
    
    }
}
export default ExpenseList;