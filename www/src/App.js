import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import Navigation from "./components/Navigation";
import Home from "./components/Home";
import LogIn from "./components/LogIn";
import Register from "./components/Register";
import AddCraftsman from "./components/AddCraftsman";
import LogOut from "./components/LogOut";
import Admin from "./components/Admin";
import GlobalStyles from "./components/styles/Global";
import { createTheme, ThemeProvider } from '@mui/material';

function App() {

  const [isLoged, setIsLoged] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  const theme = createTheme({
    components: {
      MuiTextField: {
        styleOverrides: {
          root: {
            width: '45%',
            margin: '1%',
            backgroundColor: '#ffffff ',
            opacity: '.8',
          },
        },
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />

      <div className="container">
        <Router basename="/" >

          <Navigation />

          <Routes>
            <Route exact path="/" element={<Home isLoged={isLoged} searchTerm={searchTerm} setSearchTerm={setSearchTerm} />} />
            <Route exact path="/logout" element={<LogOut isLoged={isLoged} setIsLoged={setIsLoged} isAdmin={isAdmin} setIsAdmin={setIsAdmin} />} />
            <Route exact path="/login" element={<LogIn />} />
            <Route exact path="/register" element={<Register />} />
            <Route exact path="/AddCraftsman" element={<AddCraftsman />} />
            <Route exact path="/Admin" element={<Admin />} />
          </Routes>

        </Router>

        <ToastContainer />
        
      </div>
    </ThemeProvider>
  );
}

export default App;