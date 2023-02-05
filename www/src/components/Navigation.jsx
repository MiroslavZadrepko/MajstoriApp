import { Link as RouterLink, useNavigate } from 'react-router-dom';
import { Tab, Tabs } from '@mui/material';
import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { logout, reset } from '../features/auth/authSlice'

function Navigation() {

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth)

  const [value, setValue] = useState('/');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  useEffect(() => {
    let path = window.location.pathname; 
    
    if (user.user && !user.user.admin && path === "/" && value !== 0) setValue('/');
    else if (user.user && !user.user.admin && path === "/logout" && value !== 1) setValue('/logout');
    else if (user.user && !user.user.admin && path === "/addcraftsman" && value !== 2) setValue('/addcraftsman');
    else if (path === "/" && value !== 0) setValue('/');
    else if (path === "/login" && value !== 1) setValue('/login');
    else if (path === "/register" && value !== 2) setValue('/register');
  }, [value, user]);

  const onLogout = () => {
    dispatch(logout());
    dispatch(reset());
    navigate('/');
  }
  
  return (
    <Tabs
      value={value}
      onChange={handleChange}
      centered>

      <Tab
        label='Home'
        value='/'
        to='/'
        component={RouterLink} />

      {user.user || user.admin ?
        <Tab onClick={onLogout}
          label='Logout'
          value='/logout'
          component={RouterLink}
          to="/logout" /> :
        <Tab
          label='Login'
          value='/login'
          component={RouterLink}
          to="/login" />}

      {!user.user ?
        <Tab
          label='Registracija'
          value='/register'
          component={RouterLink}
          to="/register" /> :
        ''}
      
      {user.user && !user.user.admin ?
        <Tab
          label='Dodaj majstora'
          value='/addcraftsman'
          component={RouterLink}
          to="/addcraftsman" /> :
        ''}
      
      {user.user && user.user.admin ?
        <Tab
          label='Admin'
          value='/admin'
          component={RouterLink}
          to="/admin" /> :
        ''}

    </Tabs>
  )
}

export default Navigation;