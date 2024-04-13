import { useNavigate } from "react-router-dom";
import {Link} from "react-router-dom";
import ViPassInput from "../../components/ViPassInput";
import { ToastContainer, toast } from 'react-toastify';
// import styles from '/templatemo-topic-listing.css';

const Header = () => {

    const navigate = useNavigate();

    const logout = () => {
        alert("Do you really wanna Log Out?");
        toast.error('🐱‍👤 Successfully Logged Out!', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
            });
        localStorage.removeItem('isLogin');
        navigate("/pages/Login")

    }

    



    return (
        
        <div className="header1">

            <nav class="navbar sticky navbar-expand-lg">
                <div class="container">
                    <img class="navbar-brand logo" src="/images.png"/>
                    <div class="d-lg-none ms-auto me-4">
                        <a href="#top" class="navbar-icon bi-person smoothscroll"></a>
                    </div>
    
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
    
                    <div class="collapse navbar-collapse" id="navbarNav">
                        <ul class="navbar-nav ms-lg-5 me-lg-auto">
                            <li class="nav-item">
                            <Link to="/pages/Main">
                                <a class="nav-link click-scroll" href="#section_1">Home</a>
                            </Link>

                            </li>
                            <li class="nav-item dropdown">
                            <Link to="/pages/UserManagement">
                                <a class="nav-link dropdown-toggle" aria-expanded="false">Speakers</a>
                                </Link>
                                <ul class="dropdown-menu dropdown-menu-light" aria-labelledby="navbarLightDropdownMenuLink">
                                    <li>
                                    <Link to="/pages/UserManagement">
                                        <a class="dropdown-item" href="topics-listing.html">1st Sem</a>
                                        </Link>
                                        </li>


                                    <li>
                                    <Link to="/pages/UserManagement">
                                        <a class="dropdown-item" href="topics-listing.html">3rd Sem</a>
                                        </Link>
                                        </li>

                                        <li>
                                    <Link to="/pages/UserManagement">
                                        <a class="dropdown-item" href="topics-listing.html">5th Sem</a>
                                        </Link>
                                        </li>

                                        <li>
                                    <Link to="/pages/Counter">
                                        <a class="dropdown-item" href="topics-listing.html">6th Sem</a>
                                        </Link>
                                        </li>
                                </ul>
                            </li>

                           
    
                            <li class="nav-item">
                <Link to="/pages/Counter1">
                                <a class="nav-link click-scroll" >Counter</a>
                                </Link>  </li>

                            <li class="nav-item">
                            <Link to="/pages/Faq"> <a class="nav-link click-scroll" >Timer</a>
                            </Link></li>
    
                            <li class="nav-item">
                <Link to="/pages/Randomizer">
                                <a class="nav-link click-scroll" >Randomizer</a>
                                </Link> </li>

                            <li class="nav-item">
                                <a class="nav-link click-scroll" href="#section_2">About Us</a>
                            </li>

                            
                        </ul>

                        <div class="d-none d-lg-block">
                        <button className="logButton" onClick={logout}>LogOut</button>

                        </div>
                    </div>
                </div>
            </nav>


    {/* <nav className="nav-menu">
        <ul>
            <li className="nav-item">
                <Link to="/pages/UserManagement">Speakers</Link>
            </li>
            <li className="nav-item">
                <Link to="/pages/Faq">Timer Count</Link>
            </li>
            <li className="nav-item">
                <Link to="/pages/Contact">Um Counter</Link>
            </li>
            <li className="nav-item">
                <Link to="/pages/Randomizer">Randomizer</Link>
            </li>
        </ul>
    </nav>

        <img src="/images.png" alt="Logo" />





    <div className="logout">
        <button className="logButton" onClick={logout}>LogOut</button>
    </div> */}
</div>



    );
};

export default Header;