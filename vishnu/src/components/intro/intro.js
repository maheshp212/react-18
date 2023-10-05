import {useParams} from "react-router-dom"

function Intro(){
    const {name, id} = useParams()
    return (<div> Intro COmponent -- {name} -- {id}</div>)
}

export default Intro;