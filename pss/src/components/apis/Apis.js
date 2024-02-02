import { useEffect, useState } from "react";
import "./Apis.css";
import axios from "axios";

const Apis = () =>{
    const [users, setUsers] = useState([]);
    const [userInfo, setUserInfo] = useState({});
    useEffect(()=>{
        getUsers();
    },[])

    const getUsers = ()=>{
        let url = 'https://gorest.co.in/public/v2/users';
        fetch(url)
        .then(data => data.json())
        .then(resp =>{
            console.log(resp);
            setUsers(resp);
        })
    }
    const viewUser = (id) =>{
        let url  = 'https://gorest.co.in/public/v2/users/' + id;
        axios.get(url)
        .then(resp =>{
            console.log(resp);
            setUserInfo(resp);
        });

    }
    return <div>
        <div className="user-details header">
            <div className="user-id">ID</div>
            <div className="user-name">Name</div>
            <div className="user-email">Email</div>
            <div className="user-gender">Gender</div>
            <div className="user-status">Satus</div>
            <div className="user-actions">Actions</div>
        </div>
        {users.map((user) =>{
            return <div className="user-details">
            <div className="user-id">{user.id}</div>
            <div className="user-name">{user.name}</div>
            <div className="user-email">{user.email}</div>
            <div className="user-gender">{user.gender}</div>
            <div className="user-status">{user.status}</div>
            <div className="user-status"> 
                <div>Edit</div>
                <p onClick={() => viewUser(user.id)}>View</p>
                <span>Delete</span>
            </div>
        </div>
        })}
        {JSON.stringify(userInfo)}

        json string -> js Obj  [JSON.parse()]
        js Obj -> json string [JSON.stringify ()]
    </div>
}
export default Apis;