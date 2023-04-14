import {useSelector, useDispatch} from 'react-redux';
const Redux = () =>{

    const counter = useSelector(state => state.counter);
    const dispatch = useDispatch()

    const incHandler = () =>{
        dispatch({type:'increment'})
    }
    const decHandler = () =>{
        dispatch({type:'decrement'})
    }
    return <div> im Redux - {counter}
        <button onClick={incHandler}> increment</button>
        <button onClick={decHandler}> decrement</button>




        {/* (to fetch the data from store)
        store -> view-> useSelector


        (to change the value in the store)
        view -> dispatch (action) -> reducer (change the value) -> store  */}
     </div>
}

export default Redux;