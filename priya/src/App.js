import './App.css';
import Expenses from './components/expenses/Expenses'
import NewExpense from './components/NewExpense/NewExpense';
import { useState } from 'react';

const App = ()=> {
  // JSX - Java Script XML
  const expenseList = [
    { title: 'new Tv', amount: 4000, date: new Date(2022,6,23)},
    { title: 'Sofa', amount: 2100, date: new Date(2021,7,15)},
    { title: 'AC', amount: 3500, date: new Date(2022,3,19)},
    { title: 'Vaccum', amount: 200, date: new Date(2019,1,12)},
    { title: 'Fridge', amount: 4400, date: new Date(2019,8,5)},
    { title: 'Home Decor', amount: 30, date: new Date(2018,3,1)},
  ];

  const [expenses, setExpenses] = useState(expenseList);

  const addExpenseHandler = (newItem) => {
    setExpenses((prevState)=>{ return [...prevState, newItem]})
  }
  return (
    <div className="App">
      <h2>Expenses</h2>
      <NewExpense onAddExpense = {addExpenseHandler}/>
      <Expenses items={expenses} > </Expenses>
    </div>
  );
}

export default App;
