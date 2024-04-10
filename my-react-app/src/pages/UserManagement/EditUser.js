import { useState } from "react";
import { useNavigate } from "react-router-dom";
import ViTextInput from "../../components/ViTextInput";
import ViPassInput from "../../components/ViPassInput";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { v4 as uuidv4 } from 'uuid';
import axios from "axios";
import { useEffect } from "react";
import { useParams } from "react-router-dom";

const EditUser = () => {
  const navigate = useNavigate();
    const [isSubmitted, setIsSubmitted] = useState(false);
    const {id}=useParams();
    const {username}=useParams();
    
    const [user, setUser] = useState({
        username:"",
        email:"",
        age:"",
        city:"",
    
    });
    
     useEffect(()=>{
        axios
            .get(`http://localhost:4000/users/${id}`)
            .then((res) => {
              console.log(res.data);
              setUser(res.data);
            })
            .catch((err) => {  // Corrected the opening bracket for catch
              alert("API Server Error");
              console.log(err);
            });
        }, []);


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
        toast.success(`Details of: ${user.username} Changed 📝!`, {
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
        axios.put(`http://localhost:4000/users/${id}`, item)
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
        <h1>Edit User</h1>
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

export default EditUser;