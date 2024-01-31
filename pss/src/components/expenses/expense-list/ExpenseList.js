import ExpenseItem from "../expense-item/ExpenseItem";
import "./ExpenseList.css";

const ExpenseList = (props) => {
  // const {expenses} = props;
  //{ expenses, name, age }
  const headers = { name: "Name", 
                    date: "Date",
                    amount: "Amount"
                };
  return (
    <div className="expenses">
      <ExpenseItem
        item={headers}
        customClass="header"
      />
      {props.expenses.map((item, index) => {
        return <ExpenseItem 
            key={`item-${index}`}
            item={item}
        />;
      })}
    </div>
  );
};

export default ExpenseList;
