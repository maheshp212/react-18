// import { useMemo, useState } from "react";

// const Memo = () =>{

//     const [counter, setCounter] = useState(0);


//     const [number, setNumber] = useState(0);
//     const squaredNum = useMemo(()=>{
//         return squareNum(number)
//     }, [number]);

//     const onChangeHandler = (e) => {
//         setNumber(e.target.value);
//     }

//     const counterHandler = () => {
//         setCounter(counter+1)
//     }


//     return <>
//         <h1> Welcome to Memo</h1>
//         <h1> Memoization - if we give same value to that function, it will not execute the logic again, but gives the old computed value</h1>

//         <input
//             type="number"
//             placeholder="Enter a number"
//             value={number}
//             onChange={onChangeHandler}
//         />

//         <div>OUTPUT: {squaredNum}</div>

//         <button onClick={counterHandler}> counter ++ </button>
//         <div> Counter: {counter}</div>

    
//     </>
// }

// function squareNum(number) {
//     console.log('squaring will be done!');
//     return Math.pow(number,2);
// }


import { useState, useMemo } from "react";

const Memo = () => {
  const [count, setCount] = useState(0);
  const [todos, setTodos] = useState([]);
  const calculation = useMemo(() => expensiveCalculation(count), [count]);
//    const calculation = expensiveCalculation(count);

  const increment = () => {
    setCount((c) => c + 1);
  };
  const addTodo = () => {
    setTodos((t) => [...t, "New Todo"]);
  };

  return (
    <div>
      <div>
        <h2>My Todos</h2>
        {todos.map((todo, index) => {
          return <p key={index}>{todo}</p>;
        })}
        <button onClick={addTodo}>Add Todo</button>
      </div>
      <hr />
      <div>
        Count: {count}
        <button onClick={increment}>+</button>
        <h2>Expensive Calculation</h2>
        {calculation}
      </div>
    </div>
  );
};

const expensiveCalculation = (num) => {
  console.log("Calculating...");
  for (let i = 0; i < 1000000000; i++) {
    num += 1;
  }
  return num;
};
export default Memo;