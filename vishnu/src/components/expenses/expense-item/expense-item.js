function ExpenseItem(props) {

  const deleteHandler = () => {
    props.onDelete(props.id);
  } 
  return (
    <div className={props.isHeader ? "expense-item header" : "expense-item"}>
      <div className="expense-name">{props.item.name}</div>
      <div className="expense-date">{props.item.date}</div>
      <div className="expense-amount">Rs. {props.item.amount}</div>
      {!props.isHeader && <div className="expense-amount"><button onClick={deleteHandler}> Delete </button></div>}
      {props.isHeader && <div className="expense-amount">Actions</div>}
    </div>
  );
}

export default ExpenseItem;
