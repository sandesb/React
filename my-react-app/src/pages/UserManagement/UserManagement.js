import { useEffect, useState } from "react";
import {Link} from "react-router-dom";



const UserManagement = () => {

    const data = [
        {
            username: 'John',
            email: 'jon@gmail.com',
            age: 25,
            city: 'New York'
        },
        {
            username: 'Cena',
            email: 'cena@gmail.com',
            age: 30,
            city: 'New Jersey'
        },
        {
            username: 'Brock',
            email: 'brock@gmail.com',
            age: 22,
            city: 'Old York'
        },
        {
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
        </tr>

        {users.length>0 &&
        <div>
        {
            users.map((user,index)=>{
                return(
                    <tr key={index}>
                    <td>{user.username}</td>
                    <td>{user.email}</td>
                    <td>{user.age}</td>
                    <td>{user.city}</td>

                    </tr>

                )
            })
        }
        
        </div>
}
{ users.length === 0 &&
<div>No Records Found.</div>
}
        
        </table>
     
        </div>
        );
    };

export default UserManagement;