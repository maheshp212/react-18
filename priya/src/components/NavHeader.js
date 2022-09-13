import {NavLink, Link} from 'react-router-dom';
import './NavHeader.css';
const NavHeader = ()=>{
    
    return <nav >
        <ul>
            <li> <NavLink to="/welcome" activeClassName='active'> Welcome</NavLink></li>
            <li> <NavLink to="/quoting" activeClassName='active'> Quotes</NavLink></li>
            <li> <NavLink to="/products" activeClassName='active'> Products</NavLink></li>
            <li> <NavLink to="/form-validations" activeClassName='active'> Form Validations</NavLink></li>
        </ul>
    </nav>
}

export default NavHeader;