import ExpenseItem from "../expense-item/expense-item";

function Expenseslist(props) {
  // let data = props.list;
  let headerData = {name: "Name", date: "Date", amount: "Amount" };
  const deleteHandler = (id) =>{
    props.onDeleteItem(id);
  }
  return (
    <div>
      <div className="expenses-list">
        <ExpenseItem isHeader={true} onDelete={deleteHandler} item={headerData}/>

        {props.list.length &&
          props.list.map((item,index) => {
            return <ExpenseItem 
              item={item} 
              id={index} 
              onDelete={deleteHandler} 
              key={`list-`+index} 
            />;
          })}
      </div>
    </div>
  );
}

export default Expenseslist;
