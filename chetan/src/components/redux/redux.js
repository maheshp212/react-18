
import { useDispatch, useSelector } from "react-redux"

function Redux (){
    const counter = useSelector((state) => (!!state?.counter ? state?.counter : 0));
    const dispatch = useDispatch();

    const incHandler = () =>{
        dispatch({type :'increment'})
    }
    const decHandler = () =>{
        dispatch({type :'decrement'})
    }


    return <>
    <div> reduxt component couter value = {counter}</div>
    <button onClick={incHandler}> Increment</button>
    <button onClick={decHandler}> Decrement</button>
    </>
}
export default Redux

//{mainstate?.country?.stte?.distr?.city?.taluka } ?- optional chaining