import { useEffect, useState } from "react";
import {Link} from "react-router-dom";
import ViTable from "../../components/ViTable";
import ViTextInput from "../../components/ViTextInput";

import axios from "axios";
import { v4 as uuidv4 } from 'uuid';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useParams,useNavigate } from 'react-router-dom';
import { getAllUsers, searchByEmail, searchByUsername } from "../../service/user-management.service";
const UserManagement = () => {
  const { values } = useParams();
  const uuid = uuidv4();

  const navigate = useNavigate();

  // const valueToString = {
  //   '1': 'firstsem',
  //   '2': 'secondsem',
  //   '3': 'thirdsem',
  //   '4': 'fourthsem'
  // };

  // const semesterKey = valueToString[values] || ''; 

  const [searchUsername, setSearchUsername] = useState('');
  const [searchEmail, setSearchEmail] = useState('');
  useEffect(() => {
    getAllUsers().then((data) => {
      setUsers(data);
    }).catch((err) => {
      alert("API server error");
      console.log(err);
    });
  }, []);
  const handleSearchUsername = (e) => {
    setSearchUsername(e.target.value);
    searchByUsername(e.target.value).then((data) => {
      setUsers(data);
    }).catch((err) => {
      alert("API server error");
      console.log(err);
    });
  }
  const handleSearchEmail = (e) => {
    setSearchEmail(e.target.value);
    searchByEmail(e.target.value).then((data) => {
      setUsers(data);
    }).catch((err) => {
      alert("API server error");
      console.log(err);
    });
  }
    const header = [
        {
            key: "username",
            name: "Student",
        },
        {
            key: "email",
            name: "Email",
        },
        {
            key: "password",
            name: "Matric No.",
        },
        {
            key: "city",
            name: "Contact",
        }
    ]

    const [users, setUsers] = useState([]);

    useEffect(() => {
      // Only make the API call if a valid semesterKey is determined
      if (values) {
        axios
          .get(`http://localhost:4000/users/?sem=${values}`) // Construct the API URL with the semesterKey
          .then((res) => {
            console.log(res.data);
            setUsers(res.data);
          })
          .catch((err) => {
            alert("API Server Error");
            console.log(err);
          });
      }
    }, [values]); // Trigger the effect when semesterKey changes
    return (
             

        <div class="flex1">
            <p className="mt-5">{values}</p>

          <div className="mb-4">
        <button class="addB mx-4"><Link  className="link" to="/pages/UserManagement/AddUser">
            ➕ Add Speakers 
            </Link></button>

            <button class="addB"><Link  className="link" to={`/pages/UserManagement/Sort/${values}`}>
            Publish List 💻
            </Link></button> 
            </div>

            <div className="vi-flex-container">
        <div style={{flexGrow: '5'}} className="relative">
          <ViTextInput
            title="Username"
            name="username"
            placeholder="Search by username"
            value={searchUsername}
            handleInputChange={handleSearchUsername}
            />
        <i className="fa fa-user">🔍</i>

        </div>

        
        <br></br>
        <div style={{flexGrow: '5'}}  className="relative">
          <ViTextInput
            title="Email"
            name="email"
            placeholder="Search by email"
            value={searchEmail}
            handleInputChange={handleSearchEmail}
            />
        <i className="fa fa-user">🔎</i>

        </div>
        <br></br>

      </div>


            <ViTable 
        data={users}
        header={header}
        values={values}
        actions={[
            {
              name: "View 👀 ",
              link: `/UserManagement/detail/${values}`,
              className: "viewB"
            },
            {
              name: "Edit 📝",
              link: `/UserManagement/EditUser/${values}`,
              className: "viewE"
            },
            {
              name: "Delete 🗑️", 
              link: `/UserManagement/Delete/${values}`,
              className: "btn btn-outline-danger viewD"
            }
          ]}
        />
            
            
           
   
       

        </div>
        );
    };

export default UserManagement;