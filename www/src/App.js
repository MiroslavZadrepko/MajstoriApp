import { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link as RouterLink } from "react-router-dom";
import Navigation from "./components/Navigation";
import Home from "./components/Home";
import LogIn from "./components/LogIn";
import Register from "./components/Register";
import AddCraftsman from "./components/AddCraftsman";
import LogOut from "./components/LogOut";
import Admin from "./components/Admin";
import GlobalStyles from "./components/styles/Global";
import { HelpButton } from "./components/styles/HelpButton.styled"

function App() {

  const [user, setUser] = useState(null);
  const [isLoged, setIsLoged] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [isVisible, setIsVisible] = useState(false);
  const toggleVisibility = () => setIsVisible(!isVisible);

  return (
    <>
      <GlobalStyles />
      <div className="container">
        <Router basename="/" >

          <Navigation setSearchTerm={setSearchTerm} isLoged={isLoged} isAdmin={isAdmin}/>
          
          <Routes>
            <Route exact path="/" element={<Home user={user} isLoged={isLoged} searchTerm={searchTerm} setSearchTerm={setSearchTerm} isVisible={isVisible} setIsVisible={setIsVisible} />} />
            <Route exact path="/logout" element={<LogOut setUser={setUser} user={user} isLoged={isLoged} setIsLoged={setIsLoged} isAdmin={isAdmin} setIsAdmin={setIsAdmin} />} />
            <Route exact path="/login" element={<LogIn setUser={setUser} user={user} isLoged={isLoged} setIsLoged={setIsLoged} isAdmin={isAdmin} setIsAdmin={setIsAdmin} />} />
            <Route exact path="/register" element={<Register setUser={setUser} user={user} />} />
            <Route exact path="/AddCraftsman" element={<AddCraftsman isLoged={isLoged} />} />
            <Route exact path="/Admin" element={<Admin />} />
          </Routes>
        
        </Router>
      </div>      
    </>
  );
}

export default App;