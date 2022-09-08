import {NavLink, Link} from 'react-router-dom';

const Products = ()=>{
    return <div >
        This is products page
        <ul>
            <li><NavLink to="/products/p1" > Proudct 1</NavLink></li>
            <li><NavLink to="/products/p2" > Proudct 2</NavLink></li>
            <li><NavLink to="/products/p3" > Proudct 3</NavLink></li>
        </ul>
    </div>
}

export default Products;