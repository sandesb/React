import {Link} from "react-router-dom";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import ViPassInput from "../components/ViPassInput";
import ViTextInput from "../components/ViTextInput";

const Login = () => {


    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
  
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
      }
  
      if(isLogin) {
        localStorage.setItem('isLogin', '1');
        navigate('/Pages/UserManagement');
      } else {
        alert('Login failed');
      }
    }

    return(
        <div>
            <div class="box">
            <h1>Login</h1>
            <form method="post" action="index.html">

<h1>Dashboard</h1>

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
<div class="btn-l" onClick={doLogin}>Sign In</div>
            {/* </Link> */}

  

</form>
</div>
        </div>
    )
}

export default Login;