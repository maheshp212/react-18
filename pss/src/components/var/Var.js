import "./Var.css";

const Var  = function(){
    let fname = "pss";
    let age = 34;
    let user = {
        name : 'react',
        exp: 3,
    };
    let interest = null;
    let gender = true;
    let fruits = ['kiwi', 'melon', 'berry'];
    let undf;

    let a = 2;
    let b = 3;
    return <div > Var component<br/> <br/><br/> <br/>
        {fname} <br/> <br/>
        
        {age} <br/> <br/>
        
        **{interest} <br/> <br/>
        
        **{gender} <br/> <br/>
        
        **{undf} <br/> <br/>
        {fruits[0]} <br/> <br/>
        
        {user.name} <br/> <br/>
        
        a+b :: {a+b} <br/> <br/>
        a-b :: {a-b} <br/> <br/>
        a*b :: {a*b} <br/> <br/>
        a/b :: {a/b} <br/> <br/>
        a%b :: {a%b} <br/> <br/> <br/> <br/>


        2+3 :: {2+3} <br/><br/>
        2-3 :: {2-3} <br/><br/>
        2*3 :: {2*3} <br/><br/>
        2/3 :: {2/3} <br/><br/>
        2%3 :: {2%3} <br/><br/>


        {/* string Interpolation
        data binding
        expressions */}
    </div>
}

export default Var;