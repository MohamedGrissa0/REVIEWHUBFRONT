
import './App.css';
import React,{useContext} from 'react'
import NavBar from './components/navBar/NavBar';
import Home from './pages/Home/Home';
import { BrowserRouter as Router,Route,Routes,useNavigate } from "react-router-dom";
import PlaceOverview from './pages/PlaceOverview/PlaceOverview';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import Logout from './pages/Logout/Logout';
import { AuthContext } from './components/AuthContext/AuthContext';
import CategoriePreview from './components/CategoriePreview/CategoriePreview';
import Setting from './pages/Setting/Setting'
function App() {
  
  const {user}=useContext(AuthContext);
 
  return (
    <div className="App bg-white">
      <Router>
        
      <NavBar />
      <Routes>
      <Route exact path="/" element={<Home />} />
      <Route  path="/register" element={!user?<Register />:<Home />} />
      
      <Route  path="/setting" element={<Setting />} />
      <Route  path="/logout" element={<Logout />} />
      <Route  path="/login" element={!user?<Login />:<Home />} />
      <Route  path="/placeoverview" element={user?<PlaceOverview />:<Login location={window.location} />} />
      <Route  path="/categorie/:id" element={user? <CategoriePreview />:<Login location={window.location} />} />

      </Routes>
      </Router>
    </div>
  );
}

export default App;
