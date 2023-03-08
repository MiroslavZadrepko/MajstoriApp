import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useSelector } from "react-redux";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import Navigation from "./components/Navigation";
import Home from "./components/Home";
import LogIn from "./components/LogIn";
import Register from "./components/Register";
import AddCraftsman from "./components/AddCraftsman";
import LogOut from "./components/LogOut";
import Admin from "./components/Admin";
import AdminHandleCraft from "./components/AdminHandleCraft";
import AdminHandleRev from "./components/AdminHandleRev";
import GlobalStyles from "./components/styles/Global";
import { ThemeProvider } from '@mui/material';
import theme from "./components/styles/theme";

function App() {

  const user = useSelector((state) => state.auth);
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />

      <div className="container">
        <Router basename="/" >

          <Navigation />

          <Routes>
            <Route exact path="*" element={<Home />} />
            <Route exact path="/logout" element={<LogOut />} />
            <Route exact path="/login" element={<LogIn />} />
            <Route exact path="/register" element={<Register />} />
            <Route exact path="/addcraftsman" element={<AddCraftsman />} />
            <Route exact path="/admin" element={<Admin />} />
            <Route path="/admin/crafts" element={<AdminHandleCraft />} />
            <Route path="/admin/revs" element={<AdminHandleRev />} />
          </Routes>

        </Router>

        <ToastContainer />

      </div>
    </ThemeProvider>
  );
}

export default App;