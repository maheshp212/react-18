import { Link } from 'react-router-dom';
import './nav.css';
function Nav(){

    return(<nav>
        <div className='menu-item'><Link to="/home">Home</Link></div>
        <div className='menu-item'><Link to="/intro">Intro</Link></div>
        <div className='menu-item'><Link to="/var">Variables</Link></div>
      </nav>)
}
export default Nav;