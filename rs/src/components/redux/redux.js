import { useDispatch, useSelector } from "react-redux";

const Redux = () =>{
    const counter = useSelector(state => state.counter);
    const dispatch = useDispatch();

    
    const incHandler = ()=>{
        dispatch({type: 'increment'});
    }
    const decHandler = () =>{
        dispatch({type: 'decrement'});
    }
    return (
        <div>
            Im Redux  - {counter}

            <button onClick={incHandler}> Inc</button>
            <button onClick={decHandler}> Dec</button>
        </div>
    )
}

export default Redux;