import './App.css';
import './pages/theme/styles/bootstrap-icons.css';
import './pages/theme/styles/bootstrap.min.css';
import './pages/theme/styles/templatemo-topic-listing.css';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { BrowserRouter, Routes, Route} from "react-router-dom";
import Layout from './pages/theme/Layout';

import UserManagement from './pages/UserManagement/UserManagement';
import AddUser from './pages/UserManagement/AddUser'
import Counter from './pages/Counter';
import Randomizer from './pages/Randomizer';
import Login from './pages/Login';
import Faq from './pages/Faq';
import Detail from './pages/UserManagement/Detail';
import Delete from './pages/UserManagement/Delete';
import EditUser from './pages/UserManagement/EditUser';


import PrivateRoute from './routes/PrivateRoute';

function App() {
  const notify = () => toast("Wow so easy!");
  return (
    <div>
    <BrowserRouter>
      <Routes> 
        <Route path="/" element={<Layout/>}>
          {/* <Route path="/pages/UserManagement" element={<UserManagement/> } /> */}
          <Route path="/pages/UserManagement" element={<PrivateRoute component={UserManagement}/> } />
          <Route path="/pages/UserManagement/AddUser" element={<PrivateRoute component={AddUser}/>}/>


          <Route path="/UserManagement/Detail/:id" element={<Detail/> } />
          <Route path="/UserManagement/Delete/:id" element={<Delete/> } />
          <Route path="/UserManagement/EditUser/:id" element={<EditUser/>}/>


          <Route path="/pages/Faq" element={<Faq/> } />
          <Route path="/pages/Counter" element={<Counter/> } />
          <Route path="/pages/Randomizer" element={<Randomizer/> } />
        </Route>
        <Route path="/pages/Login" element={<Login/> } />
      </Routes>
    </BrowserRouter>
    <ToastContainer
position="top-center"
autoClose={5000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="colored"

/>

    </div>

    // <div className="App"
    //     <Header/>
    //     <Layout/>
    // </div>

  );
};

export default App;
