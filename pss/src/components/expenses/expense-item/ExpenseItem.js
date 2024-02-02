const ExpenseItem = ({ item, customClass='' }) => {
  return (

    // `expense-item ${customClass}`
    // "expense-item" + customClass
    <div className={`expense-item ${customClass}`}>
      <div className="expense-name">{item.name}</div>
      <div className="expense-date">{item.date}</div>
      <div className="expense-amount">{item.amount}</div>
    </div>
  );
};

export default ExpenseItem;
