import { Link, NavLink  } from 'react-router-dom';
import './nav.css';
function Nav(){

    return(<nav>
        {/* <div className='menu-item'><Link to="/">Home</Link></div>
        <div className='menu-item'><Link to="/intro">Intro</Link></div>
        <div className='menu-item'><Link to="/var">Variables</Link></div>
        <div className='menu-item'><Link to="/expenses">Expenses</Link></div>
        <div className='menu-item'><Link to="/apis">Api's</Link></div>
        <div className='menu-item'><Link to="/mahesh">Mahesh</Link></div>
        <div className='menu-item'><Link to="/someone">someone</Link></div> */}

        <div className='menu-item'><NavLink activeClassName="active" to="/">Home</NavLink></div>
        <div className='menu-item'><NavLink activeClassName="active" to="/intro">Intro</NavLink></div>
        <div className='menu-item'><NavLink activeClassName="active" to="/var">Variables</NavLink></div>
        <div className='menu-item'><NavLink activeClassName="active" to="/expenses">Expenses</NavLink></div>
        <div className='menu-item'><NavLink activeClassName="active" to="/apis">Api's</NavLink></div>
        <div className='menu-item'><NavLink activeClassName="active" to="/mahesh">Mahesh</NavLink></div>
        <div className='menu-item'><NavLink activeClassName="active" to="/someone">someone</NavLink></div>
        <div className='menu-item'><NavLink activeClassName="active" to="/context-provider">context provider</NavLink></div>
        <div className='menu-item'><NavLink activeClassName="active" to="/redux">redux</NavLink></div>
      </nav>)
}
export default Nav;