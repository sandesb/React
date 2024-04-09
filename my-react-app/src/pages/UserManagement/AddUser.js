import { useState } from "react";
import { useNavigate } from "react-router-dom";
import ViTextInput from "../../components/ViTextInput";
import ViPassInput from "../../components/ViPassInput";
import { v4 as uuidv4 } from 'uuid';
import axios from "axios";


const AddUser = () => {
  const navigate = useNavigate();
    const [isSubmitted, setIsSubmitted] = useState(false);

    const [user, setUser] = useState(
      {
        username: "",
        password: "",
        email:"",
        age:"",
        city: "",
      })

      const [errorMsg, setErrMsg] = useState({
        username: "",
        password: "",
        email: "",
        age: "",
        city: "",
      });

      const validateForm = () => {
        return (
          user.username === '' ? false :
          user.password === '' ? false :
          user.email === '' ? false :
          user.age === '' ? false :
          user.city === '' ? false : true
        );
      };
      
    const handleInputChange = (event) => {
      setUser({...user, [event.target.name]: event.target.value})
    }

    const saveForm = () => {

      
  const uuid = uuidv4();

      if(validateForm()){
        const item = {...user, id:uuid}
        console.log('User:', item);
        axios.post('http://localhost:4000/users', item)
        .then(()=>{
          console.log("user saved");
          navigate('/pages/UserManagement');
        }).catch((err)=>{
          console.log(err);
          alert("SERVER ERROR");
        })
        // navigate('/pages/UserManagement');
    }
  }
    return (
      <div>
        <h1>Add User</h1>
       <ViTextInput 
       title="username"
       name="username"
       value={user.username}
       handleInputChange={handleInputChange}
       isSubmitted={isSubmitted}
       errMessage={errorMsg.username}/>

       <div>
       <ViPassInput 
       title="password"
       name="password"
       value={user.password}
       handleInputChange={handleInputChange}
       isSubmitted={isSubmitted}
       errMessage={errorMsg.password}/>
       </div>
       
        <div>
          <input type="text"
          onChange={handleInputChange}
          placeholder="email"
          name="email"
          value={user.email}
          />
            {isSubmitted &&  user.email === '' && 
            <span class="danger"> Email is required</span>
            }

        </div>
        <div>
          <input type="text"
            onChange={handleInputChange}
            placeholder="age"
            name="age"
            required
          value={user.age}
          />
  { isSubmitted &&  user.age === '' && 
            <span class="danger"> Age is required</span>
            }

        </div>
        <div>
          <input type="text"
            onChange={handleInputChange}
            placeholder="city"
            name="city"
            required
          value={user.city}
          />
     { isSubmitted &&  user.city === '' && 
            <span class="danger"> City is required</span>
            }

        </div>
        <button class="btn-margin"onClick={saveForm}>Save</button>

      </div>
    );
}

export default AddUser;