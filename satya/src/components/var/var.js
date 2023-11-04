function Var() {
  const fname = "satya";
  let age = 34;
  let user = {
    name: "react",
    exp: 5,
  };
  let interest = null;
  let undf;
  let gender = true;
  let fruits = ["kiwi", "melon", "berry"];

  return (
    <div>
      I'm Var <br />
      <br />
      <br />
      <br />

      {fname}<br />
      {age} <br />
      {JSON.stringify(user)} <br />
      {user.name} <br />
      {user.exp} <br />
      ** {interest} <br />
      ** {undf} <br />
      ** {gender} <br />
      {fruits} <br />
      {fruits.join(",")} <br />
      {fruits[0]} <br />
      {fruits[1]} <br />
      {fruits[2]} <br />
      
    </div>
  );
}

export default Var;
