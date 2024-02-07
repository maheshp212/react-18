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
        let headers = {
            headers: {
                "Authorization": "Bearer 8ac8b6b544cf0cb6658d10d29b4f08e1f99113d711318b21e7e05b0444b920ce"
            }
        }
        fetch(url, headers)
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
    const createUser = () =>{
        let url = 'https://gorest.co.in/public/v2/users';
        let body = {
            name: 'pss3',
            email: 'pss3@gmail.com',
            gender: 'female',
            status: 'active'
        }
        let headers = {
            headers: {
                "Authorization": "Bearer 8ac8b6b544cf0cb6658d10d29b4f08e1f99113d711318b21e7e05b0444b920ce"
            }
        }
        axios.post(url, body, headers)
        .then(resp =>{
            console.log(resp);
            setUserInfo(resp);
            // after create success call
            getUsers();
        });
    } 
    const editUser = (id) =>{
        let url = 'https://gorest.co.in/public/v2/users/' +id;
        let body = {
            name: 'pss5 edit',
            email: 'pss5eidt@gmail.com',
            gender: 'female',
            status: 'active'
        }
        let headers = {
            headers: {
                "Authorization": "Bearer 8ac8b6b544cf0cb6658d10d29b4f08e1f99113d711318b21e7e05b0444b920ce"
            }
        }
        axios.put(url, body, headers)
        .then(resp =>{
            console.log(resp);
            setUserInfo(resp);
            // after create success call
            getUsers();
        });
    }
    const deleteUser = (id) =>{
        let url = 'https://gorest.co.in/public/v2/users/' +id;
       
        let headers = {
            headers: {
                "Authorization": "Bearer 8ac8b6b544cf0cb6658d10d29b4f08e1f99113d711318b21e7e05b0444b920ce"
            }
        }
        axios.delete(url, headers)
        .then(resp =>{
            console.log(resp);
            setUserInfo(resp);
            // after create success call
            getUsers();
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
                <div onClick={() => editUser(user.id)}>Edit</div>
                <p onClick={() => viewUser(user.id)}>View</p>
                <span onClick={() => deleteUser(user.id)}>Delete</span>
            </div>
        </div>
        })}

<br/><br/>
        <button onClick={createUser}>Create User </button> <br/><br/>
        {JSON.stringify(userInfo)}

        {/* json string -> js Obj  [JSON.parse()] */}
        {/* js Obj -> json string [JSON.stringify ()] */}
    </div>
}
export default Apis;