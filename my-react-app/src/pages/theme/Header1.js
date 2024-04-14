import { useNavigate } from "react-router-dom";
import React, { useState } from 'react';
import {Link} from "react-router-dom";
import {toast } from 'react-toastify';
// import styles from '/templatemo-topic-listing.css';

const Header1 = () => {

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
        navigate("/")
    }
    const [isActive, setIsActive] = useState(false);

    const toggleNav = () => {
        setIsActive(!isActive);
    };

    return (
        
            <div>
              <nav className="navbar ">
                <div className="logo">
                  <img src="/images.png" alt="logo" />
                </div>
                <ul className="navbar-links">
                  <li>
                    <Link to="/pages/Main" className="nav-link click-scroll">Home</Link>
                  </li>




                  <li class="dropdown">
                            <Link to="/pages/UserManagement" className="nav-link dropdown-toggle">Speakers </Link>
                            <ul className="dropdown-menu dropdown-menu-light">
                                <li><Link to="/pages/UserManagement" >1st Sem</Link></li>
                                <li><Link to="/pages/UserManagement" >3rd Sem</Link></li>
                                <li><Link to="/pages/UserManagement" >5th Sem</Link></li>
                                <li><Link to="/pages/UserManagement">6th Sem</Link></li>
                            </ul>
                        </li>
                  <li>
                    <Link to="/pages/Counter1" className="nav-link click-scroll">Counter</Link>
                  </li>
                  <li>
                    <Link to="/pages/Faq" className="nav-link click-scroll">Timer</Link>
                  </li>
                  <li>
                    <Link to="/pages/Randomizer" className="nav-link click-scroll">Randomizer</Link>
                  </li>
                  <li>
                    <Link to="/pages/ContactUs" className="nav-link click-scroll">About Us</Link>
                  </li>
                
                </ul>
                <div className="d-none d-lg-block">
                  <button className="logButton" onClick={logout}>LogOut</button>
                </div>
                <div className="hamburger" onClick={toggleNav}>
                  {/* Hamburger icon with three lines */}
                  <span className="line"></span>
                  <span className="line"></span>
                  <span className="line"></span>
                </div>
              </nav>
              <div className={`menubar ${isActive ? 'active' : ''}`}>
                {/* Display menu items in the menubar */}
                <ul>
                  <li>
                    <Link to="/pages/Main">Home</Link>
                  </li>
                  <li>
                    <Link to="/pages/UserManagement">Speakers</Link>
                  </li>
                  <li>
                    <Link to="/pages/Counter1">Counter</Link>
                  </li>
                  <li>
                    <Link to="/pages/Faq">Timer</Link>
                  </li>
                  <li>
                    <Link to="/pages/Randomizer">Randomizer</Link>
                  </li>
                  <li>
                    <Link to="/pages/AboutUs">About Us</Link>
                  </li>
                  <li>
                    <Link to="/" className="Logli" onClick={logout}>LogOut
                    </Link>
                  </li>
                  
                </ul>
                <div className="d-none d-lg-block">
                  <button className="logButton" onClick={logout}>LogOut</button>
                </div>
              </div>
            </div>
          );
        };
        
        export default Header1;