import { useEffect } from "react";
import "./apis.css";
import { useState } from "react";

function Apis(){
    // API calling can be done in 2 ways
        // - fetch 
        // - axios (most commonly used)
    useEffect(()=>{
        getUsers();
    },[])

    const [users, setUsers] = useState([]);
    const getUsers  = () =>{
        let url = 'https://gorest.co.in/public/v2/users';
        
        fetch(url)
        .then(data => data.json())
        .then(resp => {
            console.log(resp);
            setUsers(resp);
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
                <div>Edit</div>
                <button>view</button>
                <p>delete</p>
            </div>
        </div>)
        })}
    </div>)
}
export default Apis;