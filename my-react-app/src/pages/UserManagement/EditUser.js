import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import { v4 as uuidv4 } from "uuid";
import ViTextInput from "../../components/ViTextInput";
import ViPassInput from "../../components/ViPassInput";

const EditUser = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  const [user, setUser] = useState({
    username: "",
    password: "",
    email: "",
    age: "",
    city: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    axios
      .get(`http://localhost:4000/users/${id}`)
      .then((res) => {
        setUser(res.data);
      })
      .catch((err) => {
        alert("API Server Error");
        console.log(err);
      });
  }, [id]);

  const handleInputChange = (event) => {
    setUser({ ...user, [event.target.name]: event.target.value });
  };

  const validateForm = () => {
    return (
      user.username !== "" &&
      user.password !== "" &&
      user.email !== "" &&
      user.age !== "" &&
      user.city !== ""
    );
  };

  const saveForm = (event) => {
    event.preventDefault(); // Prevent default form submission behavior

    if (validateForm()) {
      const uuid = uuidv4();
      const updatedUser = { ...user, id: uuid };

      axios
        .put(`http://localhost:4000/users/${id}`, updatedUser)
        .then(() => {
          toast.success(`Details of: ${updatedUser.username} Changed 📝!`, {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
          });
          navigate('/pages/UserManagement'); // Navigate after successful update
        })
        .catch((err) => {
          console.log(err);
          alert("SERVER ERROR");
        });
    } else {
      setIsSubmitted(true); // Mark the form as submitted to show error messages
    }
  };

  return (
    <div className="flex5 form-m">
      <form className="form " onSubmit={saveForm}>
        <h1>Edit User</h1>
        <label htmlFor="username">Full Name:</label>
        <ViTextInput
          title="username"
          name="username"
          value={user.username}
          handleInputChange={handleInputChange}
          isSubmitted={isSubmitted}
          errMessage=""
        />

        <label htmlFor="password">Password:</label>
        <ViPassInput
          title="password"
          name="password"
          value={user.password}
          handleInputChange={handleInputChange}
          isSubmitted={isSubmitted}
          errMessage=""
        />

        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="text"
            name="email"
            value={user.email}
            onChange={handleInputChange}
            className="form-control"
          />
          {isSubmitted && user.email === "" && (
            <span className="danger">Email is required</span>
          )}
        </div>

        <div className="form-group">
          <label htmlFor="age">Age:</label>
          <input
            type="text"
            name="age"
            value={user.age}
            onChange={handleInputChange}
            className="form-control"
          />
          {isSubmitted && user.age === "" && (
            <span className="danger">Age is required</span>
          )}
        </div>

        <div className="form-group">
          <label htmlFor="city">City:</label>
          <input
            type="text"
            name="city"
            value={user.city}
            onChange={handleInputChange}
            className="form-control"
          />
          {isSubmitted && user.city === "" && (
            <span className="danger">City is required</span>
          )}
        </div>

        <button type="submit " className="btn-margin button1">
          Save
        </button>
      </form>
    </div>
  );
};

export default EditUser;
