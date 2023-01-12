import { useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./components/Home";
import LogIn from "./components/LogIn";
import Register from "./components/Register";
import AddCraftsman from "./components/AddCraftsman";
import LogOut from "./components/LogOut";
import Admin from "./components/Admin";
import GlobalStyles from "./components/styles/Global";
import { MainNavStyled } from "./components/styles/MainNav.styled";
import { HelpButton } from "./components/styles/HelpButton.styled"

function App() {

  const [user, setUser] = useState(null)
  const [isLoged, setIsLoged] = useState(false)
  const [isAdmin, setIsAdmin] = useState(false)
  const [searchTerm, setSearchTerm] = useState('')
  const [isVisible, setIsVisible] = useState(false);
  const toggleVisibility = () => setIsVisible(!isVisible);

  return (

    <>
      <GlobalStyles />
      <div className="container">
        <Router basename="/CraftApp" >

          <MainNavStyled >
            <Link to="/" onClick={() => setSearchTerm('')} >Home</Link>
            {isLoged || isAdmin ? <Link to="/logout">LogOut</Link> : <Link to="/login">LogIn</Link>}
            {!isLoged ? <Link to="/register">Register</Link> : ''}
            {isLoged && !isAdmin ? <Link to="/AddCraftsman">Dodaj Majstora</Link> : ''}
            {isAdmin && !isLoged ? <Link to="/Admin" /> : ''}
          </MainNavStyled>

          <Switch>
            <Route exact path="/">
              <Home user={user} isLoged={isLoged} searchTerm={searchTerm} setSearchTerm={setSearchTerm} isVisible={isVisible} setIsVisible={setIsVisible} />
            </Route>
            <Route exact path="/logout">
              <LogOut setUser={setUser} user={user} isLoged={isLoged} setIsLoged={setIsLoged} isAdmin={isAdmin} setIsAdmin={setIsAdmin} />
            </Route>
            <Route exact path="/login">
              <LogIn setUser={setUser} user={user} isLoged={isLoged} setIsLoged={setIsLoged} isAdmin={isAdmin} setIsAdmin={setIsAdmin} />
            </Route>
            <Route exact path="/register">
              <Register setUser={setUser} user={user} />
            </Route>
            <Route exact path="/AddCraftsman">
              <AddCraftsman isLoged={isLoged} />
            </Route>
            <Route exact path="/Admin">
              <Admin />
            </Route>

          </Switch>
        </Router>

      </div>

    </>
  );
}

export default App;