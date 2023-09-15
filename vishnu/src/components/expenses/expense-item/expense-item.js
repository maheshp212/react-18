function ExpenseItem(props) {
  return (
    <div className={props.isHeader ? "expense-item header" : "expense-item"}>
      <div className="expense-name">{props.item.name}</div>
      <div className="expense-date">{props.item.date}</div>
      <div className="expense-amount">Rs. {props.item.amount}</div>
    </div>
  );
}

export default ExpenseItem;
