import axios from 'axios';

/////////////////
//USER SERVICES//
/////////////////

const USER_URL = '/api/user/';

//Register new user
const addUser = async (user) => {

    const response = await axios.post(USER_URL, user);
    if (response.data) {
        localStorage.setItem('user', JSON.stringify(response.data));
    }
    return response.data;
};

//login user
const login = async (user) => {

    const response = await axios.post(USER_URL + 'login', user);
    if (response.data) {
        localStorage.setItem('user', JSON.stringify(response.data));
    }
    return response.data;
};

//logout user
const logout = () => {
    localStorage.clear();
    
    //removeItem('user');
};

const services = {
    addUser,
    login,
    logout
};

export default services;