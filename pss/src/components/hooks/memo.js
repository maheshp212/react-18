
import { useState, useMemo } from "react";

const Memo = () => {
    const [counter, setCounter] = useState(0);


    const [number, setNumber] = useState(0);
    const squaredNum = useMemo(() => {
        return squareNum(number);
    }, [number]);
    
 
    const onChangeHandler = (e) => {
        setNumber(e.target.value);
    };
 
    const counterHander = () => {
        setCounter(counter + 1);
    };
    return (
        <div className="App">
            <h1>Welcome to Use Memo</h1>
            <h1>Memoization - if we give same value to that fuction it will not execute the logic but gives the old value</h1>
            <input
                type="number"
                placeholder="Enter a number"
                value={number}
                onChange={onChangeHandler}>
            </input>
 
            <div>OUTPUT: {squaredNum}</div>
            <button onClick={counterHander}>
                Counter ++
            </button>
            <div>Counter : {counter}</div>
        </div>
    );
}
 
// Function to square the value
function squareNum(number) {
    console.log("Squaring will be done!");
    return Math.pow(number, 2);
}

export default Memo