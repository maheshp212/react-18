import { useState, useEffect } from "react";

const Apis = () =>{
    const [users, setUsers] = useState([]);
    const [userView, setUserView] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    useEffect(()=>{
        fetchUsers();//inital loading
    },[]);
    const fetchUsers= ()=>{
        setIsLoading(true);
        let url = 'https://gorest.co.in/public/v2/users';
        fetch(url)
        .then(data=>  data.json())
        .then((resp)=>{
            console.log(resp);
            setUsers(resp);
        setIsLoading(false);

        }).catch((err)=>{
            console.log(err);
        })
    }

    const createUser = () =>{
        setIsLoading(true);
       let user = { 
            "name": "Geeks for Geeks", 
            "age": "23" 
        }
        let options = {
            method: 'POST',
            headers: {
                'Content-Type': 
                    'application/json;charset=utf-8'
            },
            body: JSON.stringify(user)
        }
        let url = 'https://gorest.co.in/public/v2/users';
        fetch(url)
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
            "email": "geeks123@gmail.com",
            "status": "active" 
        }
        let options = {
            method: 'PUT',
            headers: {
                    'Authorization' : 'Bearer 8ac8b6b544cf0cb6658d10d29b4f08e1f99113d711318b21e7e05b0444b920ce'
            },
            body: JSON.stringify(user)
        }
        let url = 'https://gorest.co.in/public/v2/users/'+id;
        fetch(url, options)
        .then(data=>  data.json())
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
    return (<div>
        {/* <button onClick={fetchUsers}>Load Users</button> */}
        {isLoading && <div> Data is loading</div>}
        {!isLoading && <table border="1" width="100">
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
        </table>}
        <br></br>
        <br></br>
        <br></br>
        {userView}
    </div>)
}
export default Apis;