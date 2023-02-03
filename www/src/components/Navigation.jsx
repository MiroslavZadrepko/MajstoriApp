import { Link as RouterLink, useNavigate } from 'react-router-dom';
import { Tab, Tabs } from '@mui/material';
import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { logout, reset } from '../features/auth/authSlice'

function Navigation({ isAdmin }) {

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth)

  const [value, setValue] = useState('/');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  useEffect(() => {
    let path = window.location.pathname;
    if (path === "/" && value !== 0) setValue('/');
    else if (path === "/login" && value !== 1) setValue('/login');
    else if (path === "/register" && value !== 2) setValue('/register');
  }, [value,]);

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

      {user || isAdmin ?
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

      {!user ?
        <Tab
          label='Registracija'
          value='/register'
          component={RouterLink}
          to="/register" /> :
        ''}
      
      {user && !isAdmin ?
        <Tab
          label='Dodaj majstora'
          value='/AddCraftsman'
          component={RouterLink}
          to="/AddCraftsman" /> :
        ''}
      
      {isAdmin && !user ?
        <Tab
          label='Admin'
          value='/Admin'
          component={RouterLink}
          to="/Admin" /> :
        ''}

    </Tabs>
  )
}

export default Navigation;