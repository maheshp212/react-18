import './menu.css';
import { Link } from 'react-router-dom';

function Menu(){
    return <nav className="menu">
    <div><Link to="/home">Home </Link></div>
    <div><Link to="/intro">Intro </Link></div>
    <div><Link to="/varrrrrrrrrrrrrr">variables </Link></div>
    <div><Link to="/expenses">Expenses </Link></div>
    <div><Link to="/apis">Apis </Link></div>
  </nav>
}

export default Menu;