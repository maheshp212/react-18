
import { Link,NavLink } from "react-router-dom";
import "./nav.css";
function Nav(){

    return (<nav>
        {/* <div><Link to="/"> Home </Link></div>
        <div><Link to="/intro"> Intro </Link></div>
        <div><Link to="/var"> Variables </Link></div>
        <div><Link to="/expenses"> Expenses </Link></div>
        <div><Link to="/apis"> API's </Link></div>
        <div><Link to="/vishnu"> Vishnu </Link></div> */}




        <div><NavLink activeClassName="active" to="/"> Home </NavLink></div>
        <div><NavLink activeClassName="active" to="/intro"> Intro </NavLink></div>
        <div><NavLink activeClassName="active" to="/var"> Variables </NavLink></div>
        <div><NavLink activeClassName="active" to="/expenses"> Expenses </NavLink></div>
        <div><NavLink activeClassName="active" to="/apis"> API's </NavLink></div>
        <div><NavLink activeClassName="active" to="/vishnu"> Vishnu </NavLink></div>
      </nav>)

}
export default Nav;