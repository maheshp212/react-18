import { Link } from "react-router-dom";
import "./Menu.css";
function Menu(){

    return( <nav>
        <div> <Link to="/home">Home</Link></div>
        <div> <Link to="/intro">Intro</Link></div>
        <div> <Link to="/var">Var</Link></div>
        <div> <Link to="/expenses">Expenses</Link></div>
        <div> <Link to="/apis">Apis</Link></div>
        <div> <Link to="/watch/p/1234">Watch</Link></div>
        <div> <Link to="/phone/p/12e43r3454">phone</Link></div>
        <div> <Link to="/shore/p/233">shoe</Link></div>
        <div> <Link to="/buy-used-cars/hyderabad/maruti-suzuki/baleno/alpha-petrol-uppal-2017/19027547">Car1</Link></div>
        <div> <Link to="/buy-used-cars/hyderabad/maruti-suzuki/wagon-r-12/vxi-amt-uppal-2019/19477039">Car 2</Link></div>
        <div> <Link to="/chetan">Chetan</Link></div>
        <div> <Link to="/context">Context</Link></div>
      </nav>)
}

export default Menu