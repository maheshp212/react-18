import ExpensesForm from "./expenses-form/expenses-form";
import ExpensesList from "./expenses-list/expenses-list";
import "./expenses.css";
function Expenses() {
  let data = [
    { date: "2023-12-24", name: "car Insurance", amount: 5000 },
    { date: "2022-11-14", name: "Bike Insurance", amount: 3000 },
    { date: "2021-12-12", name: "Petrol", amount: 700 },
    { date: "2023-07-07", name: "Groceries", amount: 1200 },
    { date: "2023-05-12", name: "House Emi", amount: 15000 },
    { date: "2023-06-13", name: "Internet", amount: 7500 },
    { date: "2022-11-27", name: "Misc", amount: 2300 },
  ];
  return (
    <div className="expenses">
      <ExpensesForm />
      <ExpensesList data={data}/>
    </div>
  );
}

export default Expenses;
