import './App.css';
import { BrowserRouter, Routes, Route} from "react-router-dom";
import Layout from './pages/theme/Layout';

import UserManagement from './pages/UserManagement';
import Contact from './pages/Contact';
import Faq from './pages/Faq';

function App() {
  return (
    <div>
    <BrowserRouter>
      <Routes> 
        <Route path="/" element={<Layout/>}>
          <Route path="/pages/UserManagement" element={<UserManagement/> } />
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
