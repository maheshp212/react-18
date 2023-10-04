import { useEffect } from "react";
import "./apis.css";
import { useState } from "react";
import axios from "axios";

function Apis(){
    // API calling can be done in 2 ways
        // - fetch 
        // - axios (most commonly used) -- npm install axios

    useEffect(()=>{
        getUsers();
    },[]);

    const  headers = {
        headers : {
            'Authorization' : "Bearer 8ac8b6b544cf0cb6658d10d29b4f08e1f99113d711318b21e7e05b0444b920ce"
        }
}
    const [users, setUsers] = useState([]);
    const getUsers  = () =>{
        let url = 'https://gorest.co.in/public/v2/users';
        
        fetch(url, headers)
        .then(data => data.json())
        .then(resp => {
            console.log(resp);
            setUsers(resp);
        })
    }
    const createUser = () =>{
        let url = 'https://gorest.co.in/public/v2/users';
        console.log("createUser");
        let body = {
            name:'vishnu23',
            email: 'vishnu23@gmail.com',
            gender: 'male',
            status:'active'
        }
        axios.post(url,body, headers)
        .then(resp =>{
            console.log(resp);
            getUsers();
        }, (err) =>{
            // do your error handling here.
            console.log('something went wrong');
        })
    }

    const getSingleUser = ( id ) =>{
        let url = 'https://gorest.co.in/public/v2/users/' + id;
        console.log('getSingleUser ::' + url);

        axios.get(url,headers)
        .then(resp =>{
            console.log(resp);
        })
    }
    
    const editUser = (id) =>{
        let url = 'https://gorest.co.in/public/v2/users/' + id;
        console.log('editUser :: ' + url);
        let body = {
            name:'react',
            email: 'reactt@gmail.com',
            gender: 'male',
            status:'active'
        }
        axios.put(url,body, headers)
        .then(resp =>{
            console.log(resp);
            getUsers();
        }, (err) =>{
            // do your error handling here.
            console.log('something went wrong');
        })
    }
    const deleteUser = (id) => {
                                        //public/v2/users/628161
        let url = 'https://gorest.co.in/public/v2/users/' + id;
        console.log("deleteUser :: " + url);

        axios.delete(url,headers)
        .then(resp =>{
            console.log(resp);
            getUsers();
        })
    }

    return (<div> 
        <div className="grid header">
            <div className="name">Name </div>
            <div className="email">Email</div>
            <div className="gender">Gender</div>
            <div className="status">Status</div>
            <div className="actions">Actions</div>
        </div>
        {users.map((user)=>{
            return (<div className="grid ">
            <div className="name">{user.name} </div>
            <div className="email">{user.email}</div>
            <div className="gender">{user.gender}</div>
            <div className="status">{user.status}</div>
            <div className="actions">
                <div onClick={()=> editUser(user.id)}>Edit</div>
                <button onClick={()=> getSingleUser(user.id)}>view</button>
                <p onClick={()=> deleteUser(user.id)}>delete</p>
            </div>
        </div>)
        })}

        <button onClick={createUser}>Create User </button>
    </div>)
}
export default Apis;