import { Link } from 'react-router-dom';
import './menu.css';
const Menu = () =>{
    return <nav>
        <ul>
            <li><Link to="/">Landing</Link></li>
            <li><Link to="/home">Home</Link></li>
            <li><Link to="/expenses">Expenses</Link></li>
            <li><Link to="/forms">Forms</Link></li>
            <li><Link to="/api">API</Link></li>
            <li><Link to="/redux">Redux</Link></li>
            <li><Link to="/dinesh">Dinesh</Link></li>
        </ul>
    </nav>
}
export default Menu;