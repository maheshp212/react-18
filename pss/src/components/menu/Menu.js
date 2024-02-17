import { Link, NavLink } from "react-router-dom";
import "./Menu.css";

const Menu = () =>{
    return <nav>
    {/* <div><Link to="/home">Home</Link></div>
    <div><Link to="/intro"> Intro </Link></div>
    <div><Link to="/variablesss"> Var </Link></div>
    <div><Link to="/expenses"> Expenses </Link></div>
    <div><Link to="/apis"> Api's </Link></div>
    <div><Link to="/context"> Context </Link></div>
    <div><Link to="/boot"> bootstrap </Link></div>
    <div><Link to="/redux"> Redux </Link></div> */}

    <div><NavLink activeClassName="active" to="/">Home</NavLink></div>
    <div><NavLink activeClassName="active" to="/intro"> Intro </NavLink></div>
    <div><NavLink activeClassName="active" to="/variablesss"> Var </NavLink></div>
    <div><NavLink activeClassName="active" to="/expenses"> Expenses </NavLink></div>
    <div><NavLink activeClassName="active" to="/apis"> Api's </NavLink></div>
    <div><NavLink activeClassName="active" to="/context"> Context </NavLink></div>
    <div><NavLink activeClassName="active" to="/boot"> bootstrap </NavLink></div>
    <div><NavLink activeClassName="active" to="/redux"> Redux </NavLink></div>
    <div><NavLink activeClassName="active" to="/pranathi"> Pranathi </NavLink></div>
    <div><NavLink activeClassName="active" to="/ref"> Ref </NavLink></div>
    <div><NavLink activeClassName="active" to="/memo"> Memo </NavLink></div>
    <div><NavLink activeClassName="active" to="/reducer"> Reducer </NavLink></div>

  </nav>
}

export default Menu