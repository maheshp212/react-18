import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function User(props){
    const {userId} = useParams();
    const [user,setUser] = useState({})
    
    useEffect(()=>{
        viewUser(userId);
    }, []);

    const viewUser = (id) =>{
        let url = 'https://gorest.co.in/public/v2/users/'+id;
        let headers = {
            headers:{
                'Authorization' : 'Bearer 8ac8b6b544cf0cb6658d10d29b4f08e1f99113d711318b21e7e05b0444b920ce'
            }
        }
        axios.get(url, headers)
        .then(resp =>{
            setUser(resp.data);
        })
    }

    return <div> Im a user page  
        <br/><br/>    
    <div> ID: {user.id}</div>
    <div> Name: {user.name}</div>
    <div> Email: {user.email}</div>
    <div> Gender: {user.gender}</div>
    <div> Status: {user.status}</div>
    </div>
}
export default User;