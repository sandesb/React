import { useEffect, useState } from "react";
import {Link} from "react-router-dom";



const UserManagement = () => {

    const data = [
        {
            id: 1,
            username: 'John',
            email: 'jon@gmail.com',
            age: 25,
            city: 'New York'
        },
        {
            id: 2,

            username: 'Cena',
            email: 'cena@gmail.com',
            age: 30,
            city: 'New Jersey'
        },
        {
            id: 3,

            username: 'Brock',
            email: 'brock@gmail.com',
            age: 22,
            city: 'Old York'
        },
        {
            id: 4,
            username: 'Lesnar',
            email: 'lesnar@gmail.com',
            age: 52,
            city: 'New Berry'
        },
    ]
const [users, setUsers] = useState([]);

useEffect( ()=> {
    setTimeout(()=>{
    setUsers(data);},3000)
}, []);

    return (
        <div>     
        <h1>User Management</h1>
        <Link to="/pages/AddUser">
            Add
            </Link>
        
        <table>
        <tr>
          <th class="text-left">Username</th>
          <th class="text-left">Email</th>
          <th>Age</th>
          <th>City</th>
          <th>Action</th>
          
        </tr>

        {users.length>0 &&
        
        
            users.map((user,index)=>{
                return(
                    <tr key={index}>
                    <td>{user.username}</td>
                    <td>{user.email}</td>
                    <td>{user.age}</td>
                    <td>{user.city}</td>
                    <td>
            <Link to={`/pages/UserManagement/Detail/${user.id}`}> Detail </Link>

            <Link to={`/pages/AddUser/edit/${user.id}`}> Edit </Link>

            <Link className="red" to={`/pages/AddUser/delete/${user.id}`}>
            Delete
            </Link>
                   
                   
                    </td>
                    </tr>

                )
            })
        
        
        
}
{ users.length === 0 &&
<tr>
    <td colSpan={5}>No Records Found.</td></tr>
}
        
        </table>
     
        </div>
        );
    };

export default UserManagement;