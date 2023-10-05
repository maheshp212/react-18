import "./notfound.css"
import { Link } from "react-router-dom";
function Notfound(){
    return (<div className="not-container">
        <div className="title">Page not found</div>
        <div> <button><Link to="/"> Go to Home </Link></button> </div>
        </div>)
}

export default Notfound;