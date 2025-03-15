import { useParams } from "react-router-dom";
import "./urls2.css";
function Urls2(){

    const {city,brand,model,typeAreaYear, id} = useParams();
    return( <div>  Urls2 component == {city}  == {brand} -- {model} -- {typeAreaYear}== {id}</div>)
}

export default Urls2;