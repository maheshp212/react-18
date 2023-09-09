import { useEffect } from 'react';
import './apis.css';
import { useState } from 'react';
import axios from 'axios';

function Apis(){

    const [users, setUsers] = useState([])
    const [userInfo, setUserInfo] = useState([])
    useEffect(()=>{
        fetchUsers();
    },[])
    const fetchUsers = () =>{
        let url = 'https://gorest.co.in/public/v2/users';;
        let header = {
            headers:{
                'Authorization': 'Bearer 8ac8b6b544cf0cb6658d10d29b4f08e1f99113d711318b21e7e05b0444b920ce'
            }
        };
        fetch(url, header)
        .then(data => data.json())
        .then(resp =>{
            console.log(resp);
            setUsers(resp);
        })
    }
    const viewUser = (id) =>{
        let url = 'https://gorest.co.in/public/v2/users/'+id;
        
        fetch(url)
        .then(data => data.json())
        .then(resp =>{
            console.log(resp);
            setUserInfo(resp);
        })
    }

    const createUser = () =>{
        let url = 'https://gorest.co.in/public/v2/users';
        let user = {
            name :'svk3',
            email : 'svk3@gmail.cojm',
            gender: 'female',
            status:'active'
        };

        let header = {
            headers:{
                'Authorization': 'Bearer 8ac8b6b544cf0cb6658d10d29b4f08e1f99113d711318b21e7e05b0444b920ce'
            }
        };
        axios.post(url, user, header )
        .then(resp =>{
            console.log(resp);
            fetchUsers();
        })
    }
    const editUser = (id) =>{
        let url = 'https://gorest.co.in/public/v2/users/'+id;
        let user = {
            name :'svk21',
            email : 'svk21@gmail.cojm',
            gender: 'female',
            status:'active'
        };

        let header = {
            headers:{
                'Authorization': 'Bearer 8ac8b6b544cf0cb6658d10d29b4f08e1f99113d711318b21e7e05b0444b920ce'
            }
        };
        axios.put(url, user, header )
        .then(resp =>{
            console.log(resp);
            fetchUsers();
        })
    }
    const deleteUser = (id) =>{
        let url = 'https://gorest.co.in/public/v2/users/'+id;
        let header = {
            headers:{
                'Authorization': 'Bearer 8ac8b6b544cf0cb6658d10d29b4f08e1f99113d711318b21e7e05b0444b920ce'
            }
        };
        axios.delete(url, header )
        .then(resp =>{
            console.log(resp);
            fetchUsers();
        })
    }
    return <div>
        
        <table border={1}>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Gender</th>
                    <th>Status</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {users.length && users.map(((user,index) =>{
                    return <tr key={'row-'+index}>
                    <td> {user.id}</td>
                    <td> {user.name}</td>
                    <td> {user.email}</td>
                    <td> {user.gender}</td>
                    <td> {user.status}</td>
                    <td> 
                        <p onClick={() => viewUser(user.id)}>View</p>
                        <p onClick={() => editUser(user.id)}>Edit</p>
                        <p onClick={() => deleteUser(user.id)}>Delete</p>
                    </td>

                </tr>

                }))}
            </tbody>
        </table>
        <button onClick={createUser}>Create </button>
        {JSON.stringify(userInfo)}
    </div>

}

export default Apis;