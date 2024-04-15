import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { v4 as uuidv4 } from 'uuid';
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Swal from 'sweetalert2';

const AddUser = () => {
  const navigate = useNavigate();
  
  const { values } = useParams();
 
  const [user, setUser] = useState({
    username: "",
    password: "",
    email: "",
    sem: "",
    city: "",
  });

  const [errorMsg, setErrorMsg] = useState({
    username: "",
    password: "",
    email: "",
    sem: "",
    city: "",
  });
  const uuid = uuidv4();
  const item = { ...user, id: uuid };
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUser({ ...user, [name]: value });
  };

  const validateForm = () => {
    return !Object.values(user).some((value) => value === "");
  };

  const { semesterKey } = useParams();
  const [selectedSemester, setSelectedSemester] = useState(semesterKey || 'firstsem'); // Default to 'firstsem' if semesterKey is undefined

  const handleSemesterChange = (event) => {
    setSelectedSemester(event.target.value);
  };
  const semesters = ['firstsem', 'secondsem', 'thirdsem', 'fourthsem'];
  const saveForm = async (event) => {
    event.preventDefault();

    if (!validateForm()) {
      
    try {


      await axios.post(`http://localhost:4000/${selectedSemester}`, item);
      navigate(`/pages/UserManagement/AddUser`);
      Swal.fire({
        icon: "success",
        title: `${user.username} added to ${selectedSemester}!`,
        text: "Look in the Table.",
        showConfirmButton: false,
        timer: 5000
        });
    } catch (error) {
      console.error('Error saving user:', error);
      alert('Failed to save user. Please try again.');
    }
      return;
    }

   

  };

  

  

  return (
    
    <div className="flex5 form-m " >

      <form className="form">
        <h2>Add New User</h2>
        <div className="form-group">
          <label htmlFor="username">Full Name:</label>
          <div className="relative">
            <input
              type="text"
              name="username"
              value={user.username}
              onChange={handleInputChange}
              className="form-control"
            />
            <i className="fa fa-user">👦</i>
          </div>
          {isSubmitted && errorMsg.username && <span className="danger">{errorMsg.username}</span>}
        </div>

        <div className="form-group">
          <label htmlFor="password">Matric No.</label>
          <div className="relative">
            <input
              type="text"
              name="password"
              value={user.password}
              onChange={handleInputChange}
              className="form-control"
            />
            <i className="fa fa-lock">🔒</i>
          </div>
          {isSubmitted && errorMsg.password && <span className="danger">{errorMsg.password}</span>}
        </div>

        <div className="form-group">
          <label htmlFor="email">Email Address:</label>
          <div className="relative">
            <input
              type="email"
              name="email"
              value={user.email}
              onChange={handleInputChange}
              className="form-control"
            />
            <i className="fa fa-envelope">📧</i>
          </div>
          {isSubmitted && errorMsg.email && <span className="danger">{errorMsg.email}</span>}
        </div>

        <div className="form-group">
          <label htmlFor="age">Semester:</label>
          <i className="fa fa-calendar">📅</i>
          <select
          id="semester"
          name="sem"
          value={selectedSemester}
          onChange={handleSemesterChange}
          className="form-control"
        >
          {semesters.map((semester) => (
            <option key={semester} value={semester}>
              {semester}
            </option>
          ))}
        </select>
      </div>

        <div className="form-group">
          <label htmlFor="city">Contact No:</label>
          <div className="relative">
            <input
              type="text"
              name="city"
              value={user.city}
              onChange={handleInputChange}
              className="form-control"
            />
            <i className="fa fa-map-marker">📞</i>
          </div>
          {isSubmitted && errorMsg.city && <span className="danger">{errorMsg.city}</span>}
        </div>

        <div className="tright">
          <button className="btn-margin button1" onClick={saveForm}>Save</button>
        </div>
      </form>
    </div>
  );
};

export default AddUser;
