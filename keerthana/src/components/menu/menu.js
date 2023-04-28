import { NavLink } from "react-router-dom";
function Menu(){
 return <nav>
 <div class="nav-item"> <NavLink to="/home"> Home</NavLink></div>
 <div class="nav-item"> <NavLink to="/intro"> Intro</NavLink> </div>
 <div class="nav-item"> <NavLink to="/var"> Var</NavLink> </div>
 <div class="nav-item"> <NavLink to="/expenses"> Expenses</NavLink> </div>
</nav>
}
export default Menu;