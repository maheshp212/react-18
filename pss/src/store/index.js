// import { createStore} from "react-redux";
import { configureStore } from '@reduxjs/toolkit';
let initialState = {
    counter: 0,
   };
const counterReducer = (state = initialState, action) =>{
    if(action.type === "increment"){
        return {counter: state.counter+1}
    }
    if(action.type === "decrement") {
        return{counter: state.counter-1}
    }
}

// const store = createStore(counterReducer);
const store = configureStore({ 
    reducer: counterReducer,
    preloadedState: initialState,
})
export default store;