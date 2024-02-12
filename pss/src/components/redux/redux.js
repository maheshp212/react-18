import { useDispatch, useSelector } from "react-redux"

const Redux = () =>{
    
    const  counter = useSelector(state => !!state?.counter ? state.counter : 0);
    const dispatch = useDispatch()
    
    const incHandler = () =>{
        dispatch({type:'increment'});
    }
    const decHandler = () =>{
        dispatch({type:'decrement'});
    }
    return <div>
        im Redux -{counter} <br/>
        <button onClick={incHandler}>Increment</button> <br/>
        <button onClick={decHandler}>Decrement</button> <br/>

        {/* Redux Life Cycle Image */}
        {/* https://redux.js.org/assets/images/ReduxDataFlowDiagram-49fa8c3968371d9ef6f2a1486bd40a26.gif */}
    
        {/* to fetch the data from store 
        strore -> veiw -> useSelector

        to change the value in the store
        view -> dispatch(action) -> reducer (change the value) -> store */}
    </div>
    
}

export default Redux;