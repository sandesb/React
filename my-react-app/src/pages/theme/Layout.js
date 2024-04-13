import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";
import Main from "../Main";



const Layout = () => {
    return (
        <div>
        <Header/>

        <div class="body1">
        <Outlet />

        </div>

        <Footer/> 
        </div>

    );
};

export default Layout;