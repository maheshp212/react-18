import './App.css';
import Expenses from './components/expenses/Expenses'
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
      <Expenses items={expenseList} > </Expenses>
    </div>
  );
}

export default App;
