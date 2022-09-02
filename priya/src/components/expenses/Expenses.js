import { useState } from "react";
import Card from "../ui/card";
import ExpenseFilter from "./ExpenseFilter";
import ExpenseList from "./ExpensesList";
import "./Expenses.css";
const Expenses = (props) => {
  const expenseList = props.items;
  const [filterYear, setFilteredYear] = useState("2020");

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const filteredExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filterYear;
  });
//   console.log(filteredExpenses);
//   let filteredContent = <p>No Data Founds</p>;

//   if(filteredExpenses.length > 0) {
//     filteredContent = filteredExpenses.map((item, index) => {
//         return (
//           <ExpenseItem
//             key={index}
//             title={item.title}
//             amount={item.amount}
//             date={item.date}
//           />
//         );
//       });
//   }

  return (
    <Card className="expenses">
      <ExpenseFilter
        selected={filterYear}
        onchangeFilter={filterChangeHandler}
      />
      <ExpenseList items={expenseList} />
      {/* {filteredContent} */}
      {/* {filteredExpenses.length == 0  &&  <p>No Data Found</p>}
      
      {filteredExpenses.length > 0  && filteredExpenses.map((item, index) => {
          return (
            <ExpenseItem
              key={index}
              title={item.title}
              amount={item.amount}
              date={item.date}
            />
          );
        })} */}


      {/* {filteredExpenses.length == 0 ? (
        <p>No Data Found</p>
      ) : (
        filteredExpenses.map((item, index) => {
          return (
            <ExpenseItem
              key={index}
              title={item.title}
              amount={item.amount}
              date={item.date}
            />
          );
        })
      )} */}

      {/* <ExpenseItem title={expenseList[0].title} amount={expenseList[0].amount} date={expenseList[0].date} /> 
            <ExpenseItem title={expenseList[1].title} amount={expenseList[1].amount} date={expenseList[1].date} /> 
            <ExpenseItem title={expenseList[2].title} amount={expenseList[2].amount} date={expenseList[2].date} /> 
            <ExpenseItem title={expenseList[3].title} amount={expenseList[3].amount} date={expenseList[3].date} /> 
            <ExpenseItem title={expenseList[4].title} amount={expenseList[4].amount} date={expenseList[4].date} /> 
            <ExpenseItem title={expenseList[5].title} amount={expenseList[5].amount} date={expenseList[5].date} /> */}
    </Card>
  );
};
export default Expenses;
