import './App.css';
import ExpenseItem from './components/ExpenseItem';
function App() {
  // JSX - Java Script XML
  const expenseList = [
    { title: 'new Tv', amount: 4000, date: new Date(2022,6,23)},
    { title: 'Sofa', amount: 2100, date: new Date(2021,7,15)},
    { title: 'AC', amount: 3500, date: new Date(2022,3,19)},
    { title: 'Vaccum', amount: 200, date: new Date(2032,1,12)},
    { title: 'Fridge', amount: 4400, date: new Date(2062,8,5)},
    { title: 'Home Decor', amount: 30, date: new Date(2062,3,1)},
  ]
  return (
    <div className="App">
      <h2> This is React App...</h2>
      <ExpenseItem 
        title={expenseList[0].title}
        amount={expenseList[0].amount}
        date={expenseList[0].date} /> 
      <ExpenseItem title={expenseList[1].title} amount={expenseList[1].amount} date={expenseList[1].date} /> 
      <ExpenseItem title={expenseList[2].title} amount={expenseList[2].amount} date={expenseList[2].date} /> 
      <ExpenseItem title={expenseList[3].title} amount={expenseList[3].amount} date={expenseList[3].date} /> 
      <ExpenseItem title={expenseList[4].title} amount={expenseList[4].amount} date={expenseList[4].date} /> 
      <ExpenseItem title={expenseList[5].title} amount={expenseList[5].amount} date={expenseList[5].date} /> 
    </div>
  );
}

export default App;
