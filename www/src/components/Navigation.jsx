import {Link as RouterLink} from 'react-router-dom';
import {Tab, Tabs} from '@mui/material';
import { useState } from 'react';

function Navigation({setSearchTerm, isLoged, isAdmin}) {

  const [value, setValue] = useState('/');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  
  return (
          <Tabs value={value} onChange={handleChange} centered>
            <Tab label='Home' value='/' to='/' component={RouterLink} onClick={() => setSearchTerm('')}/>
            {isLoged || isAdmin ?
              <Tab label='Logout' value='/logout' component={RouterLink} to="/logout"/> :
              <Tab label='Login' value='/login' component={RouterLink} to="/login"/>}
            {!isLoged ?
              <Tab label='Registracija' value='/register' component={RouterLink} to="/register"/> :
              ''}
            {isLoged && !isAdmin ?
              <Tab label='Dodaj majstora' value='/AddCraftsman' component={RouterLink} to="/AddCraftsman"/> :
              ''}
            {isAdmin && !isLoged ?
              <Tab label='Admin' value='/Admin' component={RouterLink} to="/Admin" /> :
              ''}
          </Tabs>
  )
}

export default Navigation;