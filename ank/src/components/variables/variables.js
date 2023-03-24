import './variables.css';
function Variables(){

    let fname = 'ank'; //string
    let age = 34; // number
    let user = { // object
        name: 'react',
        exp : 5,
    }
    let interest = null; // null
    let undf; // undefined
    let gender = true; // boolean
    let fruits = ['kiwi', 'melon', 'berry']; // array

    let a = 2;
    let b = 3;
    return(<div> this is variables component


        <pre>
            {fname} <br/> <br/>

            {age} <br/> <br/>

            {JSON.stringify(user)} <br/><br/>
            {user.name}<br/><br/>
            {user.exp}<br/><br/>

            {interest}** <br/> <br/>

            {undf}** <br/> <br/>

            {gender}** <br/><br/>
 
            {fruits} <br/><br/>
            {fruits[1]} <br/><br/>


           a+b ::  {a+b}<br/>
           a-b ::  {a-b}<br/>
           a*b ::  {a*b}<br/>
           a/b ::  {a/b}<br/>
           a%b ::  {a%b}<br/> <br/><br/>


           2+3 :: {2+3} <br/>
           2-3 :: {2-3} <br/>
           2*3 :: {2*3} <br/>
           2/3 :: {2/3} <br/>
           2%3 :: {2%3} <br/>
        </pre>
    </div>)
}

export default Variables;

/**
    {}  -- string interpolation -- using variables in a string
        -- data binding -- using javascript variables in html
        -- expressions


 */