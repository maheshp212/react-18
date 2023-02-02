import { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";
import Table from 'react-bootstrap/Table';

const Apis = () =>{
    const [users, setUsers] = useState([]);
    const [userView, setUserView] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const Ram = styled.button`
    display: inline-block;
    color: palevioletred;
    font-size: 1em;
    margin: 1em;
    padding: 0.25em 1em;
    border: 2px solid palevioletred;
    border-radius: 3px;
    display: block;
  `;
    useEffect(()=>{
        fetchUsers();//inital loading
    },[]);
    const fetchUsers= ()=>{
        setIsLoading(true);
        let url = 'https://gorest.co.in/public/v2/users';
        fetch(url,{ headers: {
            'Authorization' : 'Bearer 8ac8b6b544cf0cb6658d10d29b4f08e1f99113d711318b21e7e05b0444b920ce'
    }})
        .then(data=>  data.json())
        .then((resp)=>{
            console.log(resp);
            setUsers(resp);
        setIsLoading(false);

        }).catch((err)=>{
            console.log(err);
        })
    }

    const editUser =(id)=>{
        let user = { 
            "id" : id,
            "name": "Geeks for Geeks", 
            "email": "geeks12345@gmail.com",
            "gender":"male",
            "status": "active" 
        }
        let url = 'https://gorest.co.in/public/v2/users/'+id;
        axios.put(url, user, { headers: {
            'Authorization' : 'Bearer 8ac8b6b544cf0cb6658d10d29b4f08e1f99113d711318b21e7e05b0444b920ce'
        }})
        .then((resp)=>{
            fetchUsers();
        }).catch((err)=>{
            console.log(err);
        })
    }
    const viewUser = (id) =>{
       // setIsLoading(true);
        let url = 'https://gorest.co.in/public/v2/users/'+id;
        fetch(url)
        .then(data=>  data.json())
        .then((resp)=>{
            setUserView(JSON.stringify(resp))
        }).catch((err)=>{
            console.log(err);
        })
    }
    const deleteUser = (id) =>{
        console.log(id);
        setIsLoading(true);
        let url = 'https://gorest.co.in/public/v2/users/'+id;
        fetch(url, {
            method: 'delete',
            headers: {
                Authorization : "Bearer 8ac8b6b544cf0cb6658d10d29b4f08e1f99113d711318b21e7e05b0444b920ce"
            }
        })
       // .then(data=>  data.json())
        .then((resp)=>{
            console.log('im landed here');
            debugger;
           fetchUsers();
        }).catch((err)=>{
            console.log(err);
        })
    }
    const addUserFetch = () =>{
        let user = { 
            named: "Geeks for Geeks", 
            email: "geeks123@gmail.com",
            gender:"female",
            status: "active" 
        }
        let options = {
            method: 'POST',
            headers: {'Authorization' : 'Bearer 8ac8b6b544cf0cb6658d10d29b4f08e1f99113d711318b21e7e05b0444b920ce'},
            body: JSON.stringify(user)
        }
        let url = 'https://gorest.co.in/public/v2/users';
        fetch(url, options)
        .then(data=>  data.json())
        .then((resp)=>{
            fetchUsers();
        }).catch((err)=>{
            console.log(err);
        })
    }

    const addUser = ()=>{
        let url = 'https://gorest.co.in/public/v2/users';
        let user = { 
            name: "Geeks for Geeks", 
            email: "geeks123@gmail.com",
            gender:"female",
            status: "active" 
        }
        axios.post(url, user, {
            headers: {
              'Authorization': `Bearer 8ac8b6b544cf0cb6658d10d29b4f08e1f99113d711318b21e7e05b0444b920ce` 
            }
          }).then((response) => {
            fetchUsers();
          });
      }
    
    return (<>
        {/* <button onClick={fetchUsers}>Load Users</button> */}
        {isLoading && <div> Data is loading</div>}
        {!isLoading && <Table striped bordered hover variant="dark">
            <tbody>
            <tr>
                <th>ID</th>
                <th>NAME</th>
                <th>EMAIL</th>
                <th>GENDER</th>
                <th>Actions</th>
            </tr>
            {users.map((user,index) =>{
               return (<tr key={user.id}>
                    <td>{user.id}</td>
                    <td>{user.name}</td>
                    <td>{user.email}</td>
                    <td>{user.gender}</td>
                    <td>
                        <p onClick={()=>{editUser(user.id)}}>EDIT</p>
                        <div onClick={()=>{viewUser(user.id)}}>View</div>
                        <p onClick={()=>{deleteUser(user.id)}}>Delete</p>
                    </td>
                </tr>)
            })}
            </tbody>
        </Table>}
        <br></br>
        <br></br>
        <br></br>
        {userView}
        <Ram onClick={addUser}>Add User</Ram>
    </>)
}
export default Apis;