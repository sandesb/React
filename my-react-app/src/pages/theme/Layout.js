import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";
import Sidebar from "./Sidebar";

const Layout = () => {
    return (
        <div>
            <Header/>
        <div class="flex-wrap">

        {/* <Sidebar/>  */}

        <div class="body1">
            
        <Outlet />

        </div>

        </div>
        <Footer/> 

        </div>
    );
};

export default Layout;