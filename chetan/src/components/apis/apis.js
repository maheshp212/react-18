import { useEffect, useState } from "react";
import "./apis.css";
import axios from "axios";
function Apis() {
  const [users, setUsers] = useState([]);
  const [info, setinfo] = useState('');

  useEffect(() => {
    // this will be invoked automatically when the component loads
    getUsers();
  }, []);

  //JWT - JSON Web Token
  let headers = {
    headers : {
        'Authorization' : 'Bearer 8ac8b6b544cf0cb6658d10d29b4f08e1f99113d711318b21e7e05b0444b920ce'
    }
  }

  const getUsers = () => {
    
    let url = "https://gorest.co.in/public/v2/users";
    fetch(url, headers)
    .then(data => data.json())
    .then(resp => {
        console.log(resp);
        setUsers(resp);
    })
  };
  const getSingleUsers = (id) => {
    
    let url = "https://gorest.co.in/public/v2/users/" + id;
    fetch(url, headers)
    .then(data => data.json())
    .then(resp => {
        console.log(resp);
        setinfo(resp);
    })
  };
  const createUser = () => {
    let url = "https://gorest.co.in/public/v2/users";

    let user = {
        name: 'chetan3',
        email: 'chetan3@gmail.com',
        gender: 'male',
        status: 'active'
    }
    
    axios.post(url, user, headers)
    .then( resp =>{
        console.log('user createdd');
        setinfo(resp);
        getUsers();
    })
  };
  const editUser = (id) => {
    let url = "https://gorest.co.in/public/v2/users/" + id;
    let user = {
        name: 'chetan4',
        email: 'chetan4@gmail.com',
        gender: 'male',
        status: 'active'
    }
    
    axios.put(url, user, headers)
    .then( resp =>{
        getUsers();
    })
  };
  const deleteUser = (id) => {
    let url = "https://gorest.co.in/public/v2/users/" + id;
    axios.delete(url, headers)
    .then( resp =>{
        getUsers();
    })
  };

  return <div>
    <div className="users list">
        <button onClick={createUser}>Create User</button>
        <div className="user headers">
            <div className="id">ID</div>
            <div className="name">Name</div>
            <div className="email">Email</div>
            <div className="gender">Gender</div>
            <div className="actions">Actions</div>
        </div>
        {users.map(user =>{
            return <div className="user">
            <div className="id">{user.id}</div>
            <div className="name">{user.name}</div>
            <div className="email">{user.email}</div>
            <div className="gender">{user.gender}</div>
            <div className="actions">
                <p onClick={() => getSingleUsers(user.id)}>view</p>
                <div onClick={() => editUser(user.id)}>Edit</div>
                <button onClick={() => deleteUser(user.id)}>Delete</button>
            </div>
        </div>
        })}
        {JSON.stringify(info)}
    </div>

  </div>;
}
export default Apis;
