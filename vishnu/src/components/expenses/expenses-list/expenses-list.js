import ExpenseItem from "../expense-item/expense-item";

function Expenseslist(props) {
  // let data = props.list;
  let headerData = {name: "Name", date: "Date", amount: "Amount" };
  return (
    <div>
      <div className="expenses-list">
        <ExpenseItem isHeader={true} item={headerData}/>

        {props.list.length &&
          props.list.map((item) => {
            return <ExpenseItem item={item} />;
          })}
      </div>
    </div>
  );
}

export default Expenseslist;
