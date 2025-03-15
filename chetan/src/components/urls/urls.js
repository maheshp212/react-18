import { useParams } from "react-router-dom";
import "./urls.css";
function Urls(){

    const {names, id} = useParams();
    return( <div>  Urls component == {names} == {id}</div>)
}

export default Urls;