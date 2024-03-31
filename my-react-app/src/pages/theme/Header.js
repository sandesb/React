import { useNavigate } from "react-router-dom";
const Header = () => {
    const navigate = useNavigate();

    const logout = () => {
        alert("logout");
        localStorage.removeItem('isLogin');
        navigate('/Login')

    }
    return (
    <div class="header1">

        <div class="f1"><p class="pub"> Public Speaking </p></div>
        <div class="logout">
            <button class="logButton"onClick={logout}>LogOut</button>
        </div>
    </div>
    );
};

export default Header;