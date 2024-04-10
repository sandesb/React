import {Link} from "react-router-dom";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import ViPassInput from "../components/ViPassInput";
import ViTextInput from "../components/ViTextInput";
import ViMessage from "../components/ViMessage";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {


    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
  

    const handleInputChange = (event) => {
      if(event.target.name === 'email') {
        setEmail(event.target.value);
      }
      if(event.target.name === 'password') {
        setPassword(event.target.value);
      }
    }
    const doLogin = (e) => {
      let isLogin = false;
      if(email === "admin" && password === "admin") {
        isLogin = true;
        toast.success('🦄 Welcome! Login Successful', {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
          });
        navigate('/Pages/UserManagement');
      }
  
      if(isLogin) {
        localStorage.setItem('isLogin', '1');
        navigate('/Pages/UserManagement');
      } else {
        // alert('Login failed');
        setErrorMessage('Invalid Username or Password');

      }
    }

useEffect(() => {
  const isLogin = localStorage.getItem('isLogin');
  if(isLogin==='1'){

  

    navigate('/Pages/UserManagement');
  console.log("Login component mounted");
  }
},[])

    return(
        <div>
            <div class="box">
            <h1>Login</h1>
            <form method="post" action="index.html">

<h1 class="dash">Dashboard</h1>
{errorMessage && <ViMessage message={errorMessage}/>}


{/* <input type="email" name="email" value="email" onblur="field_blur(this, 'email');"  /> */}
<ViTextInput 
        title="Email" 
        name="email" 
        placeholder="Username"
        class="email"
        handleInputChange={handleInputChange}
        value={email} />


<ViPassInput 
        title="Password" 
        name="password" 
        placeholder="Password"

        handleInputChange={handleInputChange}
        class="email"
        value={password} />
{/* <Link to="/pages/UserManagement"> */}
<button onClick={doLogin}>Sign In</button>
            {/* </Link> */}

  

</form>
</div>
        </div>
    )
}

export default Login;