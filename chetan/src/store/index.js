import { configureStore } from "@reduxjs/toolkit";

import 'bootstrap/dist/css/bootstrap.min.css';

let initalState = {
    counter : 0
};

const conuterReducer  = (state = initalState, action) =>{
    if(action.type === 'increment'){
        return {counter : state.counter+1}
    }
    if(action.type === 'decrement'){
        return {counter : state.counter -1}
    }
}

const store = configureStore({
    reducer: conuterReducer,
    preloadedState: initalState
})

export default store;