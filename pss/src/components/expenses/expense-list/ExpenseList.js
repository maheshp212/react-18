import ExpenseItem from "../expense-item/ExpenseItem";
import "./ExpenseList.css";

const ExpenseList = ({ expenses, name, age }) => {
  // const {expenses} = props;
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
      {expenses.map((item, index) => {
        return <ExpenseItem 
            key={`item-${index}`}
            item={item}
        />;
      })}
    </div>
  );
};

export default ExpenseList;
