import { Link } from "react-router-dom";
import "./Menu.css";

const Menu = () =>{
    return <nav>
    <div><Link to="/home">Home</Link></div>
    <div><Link to="/intro"> Intro </Link></div>
    <div><Link to="/variablesss"> Var </Link></div>
  </nav>
}

export default Menu