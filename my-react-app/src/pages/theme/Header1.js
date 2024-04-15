import { useNavigate } from "react-router-dom";
import React, { useState,useEffect } from 'react';
import {Link} from "react-router-dom";
import {toast } from 'react-toastify';
import Swal from 'sweetalert2';
import Darkmode from 'darkmode-js';

// import styles from '/templatemo-topic-listing.css';

const Header1 = () => {

    
  useEffect(() => {
    const darkmode = new Darkmode({
      buttonColorDark: '#CD181F',
      buttonColorLight: '#F3F4F6',
      saveInCookies: false,
      label: '🌚',
      autoMatchOsTheme: true
    });

    darkmode.showWidget(); // Show dark mode widget immediately

    return () => {
    };
  }, []); // Empty dependency array to run this effect only once on mount
    const navigate = useNavigate();

    

    const logout = () => {
      Swal.fire({
        title: "Are you sure, you wanna LogOut?",
        text: "🥺 tusi jaa rahe ho? tusi matt jao.",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes!"
      }).then((result) => {
        if (result.isConfirmed) {
          localStorage.removeItem('isLogin');
          navigate("/")
          Swal.fire({
          icon: "success",
          title: "Logged Out!",
          text: "See ya Chump.",
          showConfirmButton: false,
          timer: 1500
          });
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
        }
      });
       
       
    }
    const [isActive, setIsActive] = useState(false);

    const toggleNav = () => {
        setIsActive(!isActive);
    };

    

    return (
        
            <div>
              <nav className="navbar  " >
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
                    <Link to="/pages/AboutUs" className="nav-link click-scroll">About Us</Link>
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