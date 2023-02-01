import { Link as RouterLink } from 'react-router-dom';
import { Tab, Tabs } from '@mui/material';
import { useEffect, useState } from 'react';

function Navigation({ isLoged, isAdmin }) {

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
      {isLoged || isAdmin ?
        <Tab
          label='Logout'
          value='/logout'
          component={RouterLink}
          to="/logout" /> :
        <Tab
          label='Login'
          value='/login'
          component={RouterLink}
          to="/login" />}
      {!isLoged ?
        <Tab
          label='Registracija'
          value='/register'
          component={RouterLink}
          to="/register" /> :
        ''}
      {isLoged && !isAdmin ?
        <Tab
          label='Dodaj majstora'
          value='/AddCraftsman'
          component={RouterLink}
          to="/AddCraftsman" /> :
        ''}
      {isAdmin && !isLoged ?
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