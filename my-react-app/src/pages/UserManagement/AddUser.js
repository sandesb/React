import { useState } from "react";
import { useNavigate } from "react-router-dom";
const AddUser = () => {
  const navigate = useNavigate();
    // const [username, setUsername] = useState('');
    // const [email, setEmail] = useState('');
    // const [age, setAge] = useState('');
    // const [city, setCity] = useState('');

    const [user, setUser] = useState(
      {
        username: "",
        email:"",
        age:"",
        city: "",
      })


    const handleInputChange = (event) => {
      setUser({...user, [event.target.name]: event.target.value})
    }

    // const handleUsernameChange = (event) => {
    //   setUser({...user, username:event.target.value });
    // }

    // const handleEmailChange = (event) => {
    //     setEmail({...user, email:event.target.value});
    //   }

    //   const handleAgeChange = (event) => {
    //     setAge({...user, age:event.target.value});
    //   }

    //   const handleCityChange = (event) => {
    //     setCity({...user, city:event.target.value});
    //   }

    const saveForm = () => {
      console.log('User:', user);
      navigate('/user-management');
      // navigate('/Pages/UserManagement');
    }

   
    return (
      <div>
        <h1>Add User</h1>
        <div>
          <input 
            type="text"
            onChange={handleInputChange}
            placeholder="username"
          name="username"
            value={user.username} />
        </div>
        <div>
          <input type="text"
            onChange={handleInputChange}
            placeholder="email"
          name="email"

          value={user.email}
          />
        </div>
        <div>
          <input type="text"
            onChange={handleInputChange}
            placeholder="age"
            name="age"

          value={user.age}
          />
        </div>
        <div>
          <input type="text"
            onChange={handleInputChange}
            placeholder="city"
            name="city"

          value={user.city}
          />
        </div>
        <button class="btn-margin"onClick={saveForm}>Save</button>

      </div>
    );
}

export default AddUser;