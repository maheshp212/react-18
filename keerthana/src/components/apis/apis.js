import axios from "axios";
import { useEffect, useState } from "react";

function Apis (){

    const [users, setUsers] = useState([]);
    const [userInfo, setUserInfo] = useState('');

    // it is used to call on Load
    useEffect(()=>{
        getUsers();
    }, []);


    const getUsers = () =>{
        let url = 'https://gorest.co.in/public/v2/users';
        let headersObj = {
            headers: {
            'Authorization' : 'Bearer 8ac8b6b544cf0cb6658d10d29b4f08e1f99113d711318b21e7e05b0444b920ce'
            }
        }
        fetch(url,headersObj)
        .then(data => data.json()) // to convert json to java script object format
        .then(res =>{
            console.log(res);
            setUsers(res);
        })
    }

    const createUser = ( ) =>{
        let url = 'https://gorest.co.in/public/v2/users';

        let userInfo = {
            name: 'keerthana',
            email: 'keerthan3a@react.com',
            gender: 'female',
            status: 'inactive'
        };

        let headersObj = {
            headers: {
            'Authorization' : 'Bearer 8ac8b6b544cf0cb6658d10d29b4f08e1f99113d711318b21e7e05b0444b920ce'
            }
        }
        axios.post(url,userInfo, headersObj)
        .then(res =>{
            // api success
            console.log(res);
            setUserInfo(res)
            getUsers();
        })
        .then(err =>{
            // failure case
        })
    }

    const viewUser = (id) =>{
        let url = 'https://gorest.co.in/public/v2/users/'+id;
        let headersObj = {
            headers: {
            'Authorization' : 'Bearer 8ac8b6b544cf0cb6658d10d29b4f08e1f99113d711318b21e7e05b0444b920ce'
            }
        }
        axios.get(url, headersObj)
        .then(res =>{
            // api success
            console.log(res);
            setUserInfo(res)

        })
        .then(err =>{
            // failure case
        })
    }

    const editUser = (id) =>{
        let url = 'https://gorest.co.in/public/v2/users/'+id;
        let headersObj = {
            headers: {
            'Authorization' : 'Bearer 8ac8b6b544cf0cb6658d10d29b4f08e1f99113d711318b21e7e05b0444b920ce'
            }
        }
        let userInfo = {
            name: 'keerthana',
            email: 'keerthan4a@react.com',
            gender: 'female',
            status: 'inactive'
        };
        axios.put(url,userInfo, headersObj)
        .then(res =>{
            getUsers();
        })
        .then(err =>{
            // failure case
        })
    }

    const deleteUser = (id) =>{
        let url = 'https://gorest.co.in/public/v2/users/'+id;
        let headersObj = {
            headers: {
            'Authorization' : 'Bearer 8ac8b6b544cf0cb6658d10d29b4f08e1f99113d711318b21e7e05b0444b920ce'
            }
        }
        axios.delete(url, headersObj)
        .then(res =>{
            getUsers();
        })
        .then(err =>{
            // failure case
        })
    }


    return <div>
        APIs component

        {/* <button onClick={getUsers}> Call API</button> */}
        {!users.length ? <div>No users Found </div> : ''}
        <table border="1">
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
                {users.map((user, index) =>{
                   return <tr key={`keerhanad-`+index}>
                        <td>{user.id}</td>
                        <td>{user.name}</td>
                        <td>{user.email}</td>
                        <td>{user.gender}</td>
                        <td>{user.status}</td>
                        <td>
                            <div onClick={()=>viewUser(user.id)}>View</div>
                            <p onClick={()=>editUser(user.id)}>Edit</p>
                            <button  onClick={()=>deleteUser(user.id)}>Delete</button>
                        </td>
                    </tr>
                })}
            </tbody>
        </table>
        <button onClick={createUser}> Create User</button>

        {JSON.stringify(userInfo)}
    </div>
}
export default Apis;