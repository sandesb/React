import { useEffect, useState } from "react";
import {Link} from "react-router-dom";
import ViTable from "../../components/ViTable";
import axios from "axios";
import { v4 as uuidv4 } from 'uuid';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useParams,useNavigate } from 'react-router-dom';
const UserManagement = () => {
  const { values } = useParams();
  const uuid = uuidv4();

  const navigate = useNavigate();

  const valueToString = {
    '1': 'firstsem',
    '2': 'secondsem',
    '3': 'thirdsem',
    '4': 'fourthsem'
  };

  // Validate the value received and map to the corresponding string
  const semesterKey = valueToString[values] || ''; // Default to empty string if invalid value


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
      // Only make the API call if a valid semesterKey is determined
      if (semesterKey) {
        axios
          .get(`http://localhost:4000/${semesterKey}`) // Construct the API URL with the semesterKey
          .then((res) => {
            console.log(res.data);
            setUsers(res.data);
          })
          .catch((err) => {
            alert("API Server Error");
            console.log(err);
          });
      }
    }, [semesterKey]); // Trigger the effect when semesterKey changes

    return (
             

        <div class="flex1">
        <button class="addB"><Link  className="link" to="/pages/UserManagement/AddUser">
            ➕ Add User 
            </Link></button>

            <p>{semesterKey}</p>

            <ViTable 
        data={users}
        header={header}
        semesterKey={semesterKey}
        actions={[
            {
              name: "View 👀 ",
              link: `/UserManagement/detail/${semesterKey}`,
              className: "viewB"
            },
            {
              name: "Edit 📝",
              link: `/UserManagement/EditUser/${semesterKey}`,
              className: "viewE"
            },
            {
              name: "Delete 🗑️", 
              link: `/UserManagement/Delete/${semesterKey}`,
              className: "btn btn-outline-danger viewD"
            }
          ]}
        />
            
            <button class="addB"><Link  className="link" to="/pages/UserManagement/AddUser">
            ➕ Add User 
            </Link></button>  
           
   
       

        </div>
        );
    };

export default UserManagement;