import logo from './logo.svg';
import './App.css';
import Header from './components/header/header';
import Nav from './components/nav/nav';
import Main from './components/main/main';
import Footer from './components/footer/footer';
import Expenses from './components/expenses/expenses';

function App() {
  return (
    <div >
      <Header/>
      <Nav/>
      <Main/>
      <Footer/>
    </div>
  );
}

export default App;
