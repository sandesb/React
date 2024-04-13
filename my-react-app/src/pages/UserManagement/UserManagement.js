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
             

        <div class="flex1">
        <button class="addB"><Link  className="link" to="/pages/UserManagement/AddUser">
            ➕ Add User 
            </Link></button>

            <ViTable 
        data={users}
        header={header}
        actions={[
            {
              name: "View 👀 ",
              link: "/UserManagement/detail",
              className: "viewB"
            },
            {
              name: "Edit 📝",
              link: "/UserManagement/EditUser",
              className: "viewE"
            },
            {
              name: "Delete 🗑️", 
              link: "/UserManagement/Delete",
              className: "btn btn-outline-danger viewD"
            }
          ]}
        />
            
            
           
   
       

        </div>
        );
    };

export default UserManagement;