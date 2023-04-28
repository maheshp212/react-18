function Var(){
    let fname = 'react';
    let age = 34;
    let gender = true;
    let interest =  null;
    let fruits = ['kiwi', 'melon', 'berry'];
    let user = {name:'keerthana', exp: 5};
    let undf;


    let a = 2;
    let b = 3;

    return <div>Im var
<br/><br/><br/>
        {fname} <br/>
        {age} <br/>
        {gender}** <br/>
        {interest}** <br/>
        {fruits} <br/>
        {fruits[1]} <br/>
        {JSON.stringify(user)} <br/>
        {user.name} <br/>
        {undf}** <br/><br/><br/>

        a+b :: {a+b} <br/>
        a-b :: {a-b} <br/>
        a*b :: {a*b} <br/>
        a/b :: {a/b} <br/>
        a%b :: {a%b} <br/> <br/><br/><br/>


        2+3 :: {2+3} <br/>
        2-3 :: {2-3} <br/>
        2*3 :: {2*3} <br/>
        2/3 :: {2/3} <br/>
        2%3 :: {2%3} <br/>
    </div>
}

export default Var;