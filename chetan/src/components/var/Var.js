import "./Var.css";
function Var(){
    let fname = 'chetan';

    let age = 34;
    let user = {
        name:'react',
         exp: 5
    };
    let {name,exp} = user;
    let interest = null;
    let undf;
    let gender = true ;
    let fruits = ['kiwi', 'melon', 'berry'];

    let a = 2;
    let b = 3;



    return( <div>  Var component 

        {fname} <br/><br/>
        {age} <br/><br/>
        {JSON.stringify(user)} <br/><br/>
        {exp} <br/><br/>
        **{interest} <br/><br/>
        **{undf} <br/><br/>
        **{gender} <br/><br/>
        {fruits} <br/><br/>
        {a} <br/><br/>
        {b} <br/><br/>

        a+b :: {a+b} <br/>
        a-b :: {a-b} <br/>
        a*b :: {a*b} <br/>
        a/b :: {a/b} <br/>
        a%b :: {a%b} <br/> <br/><br/>

        2+3 :: {2+3} <br/>
        2-3 :: {2-3} <br/>
        2*3 :: {2*3} <br/>
        2/3 :: {2/3} <br/>
        2%3 :: {2%3} <br/>



    </div>)
}

export default Var;