import axios from "axios";
import { useEffect, useState } from "react";

function Apis (){
    const [users, setUsers] = useState([])

    // useEffect will be trigerred on page load*
    useEffect(()=>{
        fetchUsers();
    }, [])
    const fetchUsers = ()=> {
        let url = 'https://gorest.co.in/public/v2/users';
        let headers = {
            headers:{
                'Authorization' : 'Bearer 8ac8b6b544cf0cb6658d10d29b4f08e1f99113d711318b21e7e05b0444b920ce'
            }
        }

        fetch(url, headers)
        .then(data => data.json()) // will conver json object to javascript object
        .then(resp =>{
            console.log(resp);
            setUsers(resp);
        })
    }

    const createUser = () =>{
        let url = 'https://gorest.co.in/public/v2/users'
        let user = {
            name :' ank',
            email:'ank@gmail.com',
            gender: 'female',
            status: 'active'
        }
        let headers = {
            headers:{
                'Authorization' : 'Bearer 8ac8b6b544cf0cb6658d10d29b4f08e1f99113d711318b21e7e05b0444b920ce'
            }
        }
        // url , data , headers
        axios.post(url, user, headers)
        .then(resp =>{
            console.log('user created');
            console.log(resp)
        })
    }
    return <div> 
            {/* <button onClick={fetchUsers}> Load Users </button> */}
            <table border="1">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Gender</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user, index)=>{
                return <tr key={`row`+index}>
                    <td>{user.id}</td>
                    <td>{user.name}</td>
                    <td>{user.email}</td>
                    <td>{user.gender}</td>
                    <td>{user.status}</td>
                    </tr>
            })}
                </tbody>
            </table>
            <button onClick={createUser}>Create User</button>
        
        this is API's</div>
}
export default Apis;