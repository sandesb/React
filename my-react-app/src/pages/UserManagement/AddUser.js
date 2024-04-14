import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from 'uuid';
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AddUser = () => {
  const navigate = useNavigate();

  const [user, setUser] = useState({
    username: "",
    password: "",
    email: "",
    age: "",
    city: "",
  });

  const [errorMsg, setErrorMsg] = useState({
    username: "",
    password: "",
    email: "",
    age: "",
    city: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUser({ ...user, [name]: value });
  };

  const validateForm = () => {
    return !Object.values(user).some((value) => value === "");
  };

  const saveForm = (event) => {
    event.preventDefault();
    
    if (validateForm()) {
      const uuid = uuidv4();
      const item = { ...user, id: uuid };

      axios
        .post('http://localhost:4000/users', item)
        .then(() => {
          toast.success(`New Username: ${user.username} 🦄 Saved!`, {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
          });
          console.log('User:', item);
          navigate('/pages/UserManagement');
        })
        .catch((err) => {
          console.log(err);
          alert("SERVER ERROR");
        });
    } else {
      setErrorMsg({
        username: user.username === "" ? "Username is required" : "",
        password: user.password === "" ? "Password is required" : "",
        email: user.email === "" ? "Email is required" : "",
        age: user.age === "" ? "Age is required" : "",
        city: user.city === "" ? "City is required" : "",
      });
    }

    setIsSubmitted(true);
  };

  return (
    
    <div className="flex5 form-m " >

      <form className="form" onSubmit={saveForm}>
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
          <label htmlFor="password">Password:</label>
          <div className="relative">
            <input
              type="password"
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
          <label htmlFor="email">Email address:</label>
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
          <label htmlFor="age">Age:</label>
          <div className="relative">
            <input
              type="text"
              name="age"
              value={user.age}
              onChange={handleInputChange}
              className="form-control"
            />
            <i className="fa fa-calendar">📅</i>
          </div>
          {isSubmitted && errorMsg.age && <span className="danger">{errorMsg.age}</span>}
        </div>

        <div className="form-group">
          <label htmlFor="city">City:</label>
          <div className="relative">
            <input
              type="text"
              name="city"
              value={user.city}
              onChange={handleInputChange}
              className="form-control"
            />
            <i className="fa fa-map-marker">🏙</i>
          </div>
          {isSubmitted && errorMsg.city && <span className="danger">{errorMsg.city}</span>}
        </div>

        <div className="tright">
          <button className="btn-margin button1" type="submit">Save</button>
        </div>
      </form>
    </div>
  );
};

export default AddUser;
