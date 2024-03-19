import './App.css';
import { BrowserRouter, Routes, Route} from "react-router-dom";
import Layout from './pages/theme/Layout';

import UserManagement from './pages/UserManagement/UserManagement';
import AddUser from './pages/UserManagement/AddUser'
import Contact from './pages/Contact';
import Faq from './pages/Faq';
import Detail from './pages/UserManagement/Detail';

function App() {
  return (
    <div>
    <BrowserRouter>
      <Routes> 
        <Route path="/" element={<Layout/>}>
          <Route path="/pages/UserManagement" element={<UserManagement/> } />
          <Route path="/pages/AddUser" element={<AddUser/> } />
          <Route path="/pages/UserManagement/Detail/:id/:username" element={<Detail/> } />

          <Route path="/pages/Faq" element={<Faq/> } />
          <Route path="/pages/Contact" element={<Contact/> } />
        </Route>
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
