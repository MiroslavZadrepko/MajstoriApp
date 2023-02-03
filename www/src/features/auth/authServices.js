import axios from 'axios';

const USER_URL = '/api/user/';

//user services 
//Register new user
const addUser = async (user) => {
    
    const response = await axios.post(USER_URL, user);
    if (response.data) {
        localStorage.setItem('user', JSON.stringify(response.data));
    }
    return response.data;
}

//logout user
const logout = () => {
    localStorage.removeItem('user');
}
const services = {
    addUser,
    logout
}

export default services;