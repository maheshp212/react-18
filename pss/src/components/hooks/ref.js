import { useRef } from "react";

const Ref = () =>{

    const inputRef = useRef();

    const handleClick = () =>{
        inputRef.current.focus();
    }
    return <div>

        <input type="text" ref={inputRef}/>

        <button onClick={handleClick}>click me</button>
    </div>
}
export default Ref;