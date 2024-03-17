import React from "react";
import {Link} from "react-router-dom";

const Sidebar = () => {
    return (
        <div class="sidebar">
        <ul className ="sidebar-nav">
            <li>

                <Link to="/pages/UserManagement">
                    <button>User Management</button>
                </Link>
            </li>

            <li>
            <Link to="/pages/Faq">
            <button>Faq</button>
                    </Link>
            </li>

            <li>
            <Link to="/pages/Contact">
                    <button>Contact</button>
                    </Link>
            </li>
        </ul>
        </div>

    );
};

export default Sidebar;