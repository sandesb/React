import './App.css';
import './pages/theme/styles/bootstrap-icons.css';
import './pages/theme/styles/bootstrap.min.css';
import './pages/theme/styles/templatemo-topic-listing.css';

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

import PrivateRoute from './routes/PrivateRoute';

function App() {
  return (
    <div>
    <BrowserRouter>
      <Routes> 
        <Route path="/" element={<Layout/>}>
          {/* <Route path="/pages/UserManagement" element={<UserManagement/> } /> */}
          <Route path="/pages/UserManagement" element={<PrivateRoute component={UserManagement}/> } />
          <Route path="/pages/UserManagement/AddUser" element={<PrivateRoute component={AddUser}/>}/>

          {/* <Route path="/pages/AddUser" element={<AddUser/> } /> */}
          <Route path="/UserManagement/Detail/:id" element={<Detail/> } />
          <Route path="/UserManagement/Delete/:id" element={<Delete/> } />
          

          <Route path="/pages/Faq" element={<Faq/> } />
          <Route path="/pages/Counter" element={<Counter/> } />
          <Route path="/pages/Randomizer" element={<Randomizer/> } />
        </Route>
        <Route path="/pages/Login" element={<Login/> } />
      </Routes>
    </BrowserRouter>
    </div>

    // <div className="App"
    //     <Header/>
    //     <Layout/>
    // </div>

  );
};

export default App;
