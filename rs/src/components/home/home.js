const Home = () =>{
    var name = "Prabhas"; //string
    var age = 42; //number
    var interest = null; //null
    var gender = false; // boolean
    var fruits = ['kiwi', 'melon', 'berry']; // [] -> array, array index starts with 0(zero)
    var user = {
        name:'javascript',
        exp: 12
    }; // {} -> object
    var undf; 
    let a =2;
    let b = 3;

    return (
    <div>
        Im home 
            {name}  <br/>
            {age} <br/>
            **{interest} <br/>
           ** {gender} <br/>
            {fruits} <br/>
             {JSON.stringify(user)}  <br/>
            **{undf} <br/>


            {a} <br/>
            {b} <br/>
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
    </div>
    );
}

export default Home;

// {}
// one way databinding
// data binding
// expression
// string interpolation