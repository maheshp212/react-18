import "./Intro.css";
import { useParams } from 'react-router-dom'

const Intro = (props) =>{
    const { iddds,name, p } = useParams()
    return <div> Intro COmoponent - {iddds} -{p} - {name} </div>
};

export default Intro 