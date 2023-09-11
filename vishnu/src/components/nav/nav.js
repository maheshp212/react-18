
import { Link } from "react-router-dom";
import "./nav.css";
function Nav(){

    return (<nav>
        <div><Link to="/home"> Home </Link></div>
        <div><Link to="/intro"> Intro </Link></div>
        <div><Link to="/var"> Variables </Link></div>
      </nav>)

}
export default Nav;