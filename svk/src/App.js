



import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router';
import Home from './components/home/home';
import Intro from './components/intro/intro';
import Variables from './components/variables/variables';
import Expenses from './components/expenses/expenses';
import { Link } from 'react-router-dom';

function App() {
  return (
    <div className="App">
     <header className="header">
      <div className="title">SV Project</div>
    </header>
    <nav className="menu">
      <div><Link to="/home">Home </Link></div>
      <div><Link to="/intro">Intro </Link></div>
      <div><Link to="/varrrrrrrrrrrrrr">variables </Link></div>
      <div><Link to="/expneses">Expenses </Link></div>
    </nav>
    <main className="container">
      <Routes>
        <Route path='/home' element={<Home/>}/>
        <Route path='/intro' element={<Intro/>}/>
        <Route path='/varrrrrrrrrrrrrr' element={<Variables/>}/>
        <Route path='/expenses' element={<Expenses/>}/>
      </Routes>


    </main>
    <footer className="footer">&copy; copyrights SV 2023</footer>
    </div>
  );
}

export default App;
