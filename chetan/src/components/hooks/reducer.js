import { useReducer, useState } from "react";

function cartReducer(state, action) {
    switch(action.type){
        case 'add' :
            return [...state, action.payload];
        case 'remove':
            return state.filter(item => item.id !== action.payload.id);
        default:
            return state;
    }
}

const Reducer = () =>{

    const [cart, dispatch] = useReducer(cartReducer, []);
    const [counter, setCounter] = useState(1);

    const addItem = (item) =>{
        setCounter(counter+1);
        dispatch({type:'add', payload: item});

    }
    const removeItem = (item) =>{
        dispatch({type:'remove', payload: item})
    }
    return <> 

    <h2>Shopping Cart</h2>
    <ul>
        {cart.map ((item)=>{
            return (<li key={item.id}>
                {item.name} - ${item.price}
                <button onClick={() => removeItem(item)}>Remove</button>
            </li>)
        })}
    </ul>
    
    <button onClick={()=> addItem({id:counter, name:'Item' + counter, price: 9.99})}>Add Item</button>
    </>
}

export default Reducer;