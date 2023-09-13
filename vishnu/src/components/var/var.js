function Var(){

    // Java Script Data Types 
    // String 
    // Number 
    // Array
    // Object
    // Boolean
    // null
    // undefined

    
    let fname = 'vishnuuuuuuuuuuuuuuu'; //string
    let age = 28; // number
    let user = { // object
        name : 'react',
        exp: 5
    };
    let interest = null; //null
    let undf; // undefined 
    let gender = true; // boolean
    let fruits = ['kiwi', 'melon', 'berry']; // array

    let a = 2;
    let b = 3;

    return (<div>
        {/* -- commenting
            {} - interpolation
            {} - data binding
            {} - expression 
        */}
         {fname} <br/>

         {age} <br/>
         
         {JSON.stringify(user)} <br/>
         {user.name} <br/>
         {user.exp} <br/>
         
         {interest}** <br/>
         
         {undf}** <br/>
         
         {gender}** <br/>
         
         {fruits} <br/>
         {fruits[1]} <br/> <br/><br/><br/>


        {a} <br/>
        {b} <br/><br/>

        a+b ::  {a+b} <br/><br/>
        a-b ::  {a-b} <br/><br/>
        a*b ::  {a*b} <br/><br/>
        a/b ::  {a/b} <br/><br/>
        a%b ::  {a%b} <br/><br/>


########################################<br/><br/>
########################################<br/><br/>
########################################<br/><br/>



        2+3 ::  {2+3} <br/><br/>
        2-3 ::  {2-3} <br/><br/>
        2*3 ::  {2*3} <br/><br/>
        2/3 ::  {2/3} <br/><br/>
        2%3 ::  {2%3} <br/><br/>




    </div>)
}

export default Var;