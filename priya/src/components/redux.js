import { useSelector, useDispatch } from "react-redux"

const Redux = ()=>{

  const counter = useSelector(state => state.counter);
  const dispatch = useDispatch();

  const incrementHandler = () =>{
    dispatch({type:'increment'})
  }

  const decrementHandler = ()=>{
    dispatch({type:'decrement'})

  }
    return <div >
      <h2>Redux - {counter} </h2>

      <button onClick={incrementHandler}> Increment</button>
      <button onClick={decrementHandler}> Decrement</button>
    </div>
}

export default Redux;