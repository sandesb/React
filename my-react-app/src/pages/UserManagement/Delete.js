import { useState } from "react";
import { useEffect } from "react";
import { useParams,useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { v4 as uuidv4 } from 'uuid';
import axios from "axios";
import Body from "../theme/Body";
const Delete = () =>{
    const navigate = useNavigate();

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

const notify = () => toast.error(`Khatam tata goodbye gaya ${user.username} !`,{
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "colored",
});

const deleteUser = () => {
    const confirm = window.confirm("Are you sure you wanna delete this user?");
    if(confirm){
        notify();

        axios.delete(`http://localhost:4000/users/${id}`)
        .then((res) => {

            navigate('/pages/UserManagement');

            
          })
          .catch((err) => {  // Corrected the opening bracket for catch
            console.log(err);
          });
}
}
    return (
        <div class="flex1 del">

        

            <h2>Are you sure, you wanna delete {user.username} 🥺?</h2>
            <div>Username: {user.username}</div>
            <div>Age: {user.age}</div>
            <div>City: {user.city}</div>
            <div>Email: {user.email}</div>
            <br></br>
            <div>
            <br></br>

                <button type="button" className="btn btn-danger" onClick={deleteUser}>Damn, Sure! 😈</button> 
                <button type="button" className="btn button1" onClick={()=>{navigate('/pages/UserManagement');
                }}>Last Chance 💚</button>        
        </div>

        </div>
        

        );
    };

export default Delete;