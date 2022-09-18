import { useState, useEffect } from "react";
const Users = () => {
  const [users, setUsers] = useState([]);
  const [userResp, setUserResp] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  // useEffect(()=>{
  //   fetchMovies();
  // },[])

  const fetchUsers = () => {
    setIsLoading(true);
    fetch("https://gorest.co.in/public/v2/users",
      {
        method: 'get',
        headers: new Headers({
          'Authorization' : 'Bearer 8ac8b6b544cf0cb6658d10d29b4f08e1f99113d711318b21e7e05b0444b920ce'
        })
    })
      .then((resp) => {
        //reps is a json object
        // resp.json() -> converting json object to java script object
        return resp.json();
      })
      .then((data) => {
        // data is a javascript object andwe are setting into movies variable
        setUsers(data);
        console.log(data);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log("error");
        console.log(err);
      });
  };

  const createUser = () =>{
    //setIsLoading(true);

     let obj =  {
      "name": "Tenali Ramakrishna",
      "gender": "male",
      "email": "tenali.ramakrishna354@15ce.com",
      "status": "active"
    };
    fetch("https://gorest.co.in/public/v2/users",
      {
        method: 'post',
        headers: new Headers({
          'Authorization' : 'Bearer 8ac8b6b544cf0cb6658d10d29b4f08e1f99113d711318b21e7e05b0444b920ce',
          'Content-Type': 'application/json'
        }),
        body: JSON.stringify(obj)
    })
      .then((resp) => {
        return resp.json();
      })
      .then((data) => {
        setUserResp(JSON.stringify(data));
      })
      .catch((err) => {
        console.log("error");
        console.log(err);
      });

  }

  const udpdateUser = ( id ) =>{
    console.log(id);
  }
  
  return (
    <div>
      <h1> users API</h1>
      <div>
        <button onClick={fetchUsers}> Fetch users</button>
        <button onClick={createUser}> Create users</button>
      </div>
      <table border="1" width="1000">
        <tbody>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Gender</th>
            <th>Email</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
          {users.length ?
            users.map((user, index) => {
              return (
                <tr key={index}>
                  <td> {user.id}</td>
                  <td> {user.name}</td>
                  <td> {user.gender}</td>
                  <td> {user.email}</td>
                  <td> {user.status}</td>
                  <td> <div onClick={()=>{udpdateUser(user.id)}}> update </div></td>
                </tr>
              );
            }): <tr><td colSpan={5}> {isLoading ? 'Loading ...' : 'No users loaded, please click on fetch userssss'}</td></tr>}
        </tbody>
      </table>
      {/* {userResp} */}
    </div>
  );
};

export default Users;
