import { Link } from "react-router-dom";
import "./Menu.css";
function Menu(){

    return( <nav>
        <div> <Link to="/home">Home</Link></div>
        <div> <Link to="/intro">Intro</Link></div>
        <div> <Link to="/var">Var</Link></div>
      </nav>)
}

export default Menu