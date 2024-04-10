import { useEffect, useState } from "react";
import {Link} from "react-router-dom";
import ViTable from "../../components/ViTable";
import axios from "axios";
import { v4 as uuidv4 } from 'uuid';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const UserManagement = () => {

  const uuid = uuidv4();
  console.log(uuid);

  
    const header = [
        {
            key: "username",
            name: "Username",
        },
        {
            key: "email",
            name: "Email",
        },
        {
            key: "age",
            name: "Age",
        },
        {
            key: "city",
            name: "City",
        }
    ]
    // const data = [
    //     {
    //         id: 1,
    //         username: 'John',
    //         email: 'jon@gmail.com',
    //         age: 25,
    //         city: 'New York'
    //     },
    //     {
    //         id: 2,

    //         username: 'Cena',
    //         email: 'cena@gmail.com',
    //         age: 30,
    //         city: 'New Jersey'
    //     },
    //     {
    //         id: 3,

    //         username: 'Brock',
    //         email: 'brock@gmail.com',
    //         age: 22,
    //         city: 'Old York'
    //     },
    //     {
    //         id: 4,
    //         username: 'Lesnar',
    //         email: 'lesnar@gmail.com',
    //         age: 52,
    //         city: 'New Berry'
    //     },
    // ]
    const [users, setUsers] = useState([]);

    useEffect(() => {
      axios
        .get("http://localhost:4000/users")
        .then((res) => {
          console.log(res.data);
          setUsers(res.data);
        })
        .catch((err) => {  // Corrected the opening bracket for catch
          alert("API Server Error");
          console.log(err);
        });
    }, []);
    const notify = () => toast("Wow so easy!");
  
    return (
        <div>     
        {/* <h1>User Management</h1> */}

        <div class="flex1">
        <button class="addB"><Link to="/pages/UserManagement/AddUser">
            Add
            </Link></button>
            
        <button class="logB"><Link to="/pages/Login">
            Login
            </Link></button>
            </div>
          <button onClick={notify}>Notify!</button>
           
   
        <ViTable 
        data={users}
        header={header}
        actions={[
            {
              name: "Detail",
              link: "/UserManagement/detail",
              className: "btn btn-default"
            },
            {
              name: "Edit",
              link: "/UserManagement/EditUser",
              className: "btn"
            },
            {
              name: "Delete",
              link: "/UserManagement/Delete",
              className: "btn btn-danger"
            }
          ]}
        />

        </div>
        );
    };

export default UserManagement;