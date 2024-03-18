import { useState } from "react";
import { useNavigate } from "react-router-dom";
const AddUser = () => {
  const navigate = useNavigate();
    const [showData, setShowData] = useState(false)
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [age, setAge] = useState('');
    const [city, setCity] = useState('');


    
    const handleUsernameChange = (event) => {
      setUsername(event.target.value);
    }

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
      }

      const handleAgeChange = (event) => {
        setAge(event.target.value);
      }

      const handleCityChange = (event) => {
        setCity(event.target.value);
      }
    const saveForm = () => {
      setShowData(true)
      console.log('save form');
      console.log('username: ', username);
      console.log('email: ', email);
      console.log('age: ', age);
      console.log('city: ', city);
      navigate('/Pages/UserManagement');
    }

   
    return (
      <div>
        <h1>Add User</h1>
        <div>
          <input 
            type="text"
            onChange={handleUsernameChange}
            placeholder="username"

            value={username} />
        </div>
        <div>
          <input type="text"
            onChange={handleEmailChange}
            placeholder="email"
          value={email}
          />
        </div>
        <div>
          <input type="text"
            onChange={handleAgeChange}
            placeholder="age"

          value={age}
          />
        </div>
        <div>
          <input type="text"
            onChange={handleCityChange}
            placeholder="city"

          value={city}
          />
        </div>
        <button class="btn-margin"onClick={saveForm}>Save</button>

        { showData && 
        <div>
          <p>{username}</p>
          <p>{email}</p>
          <p>{age}</p>
          <p>{city}</p>
        </div>

        }
      </div>
    );
}

export default AddUser;