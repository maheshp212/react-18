import { useSelector } from "react-redux";
import "./Intro.css";
function Intro(){
    const counter = useSelector((state) => (!!state?.counter ? state?.counter : 0));

    return( <footer>  Intro component == {counter   } </footer>)
}

export default Intro;