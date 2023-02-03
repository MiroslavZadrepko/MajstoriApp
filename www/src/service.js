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

const getAllCraftsmans = () => axios.get(`http://localhost:8080/craftsmen`)

const getAllUsers = () => axios.get(USER_URL)

const addTmpCraftsman = (craftsman_name, craftsman_last_name, craftsman_profession, craftsman_city, craftsman_email, craftsman_phone, craftsman_rev) => axios.post(`http://localhost:8080/tmpcraftsmen`, { craftsman_name, craftsman_last_name, craftsman_profession, craftsman_city, craftsman_email, craftsman_phone, craftsman_rev })

const addTmpReview = (rewTxt, rewCraftID) => axios.post(`http://localhost:8080/tmpreviews`, { rewTxt, rewCraftID })



/**admin services */
const getTmpCraftsman = () => axios.get(`http://localhost:8080/tmpcraftsmen`)

const delTempCraftsman = (id) => axios.delete(`http://localhost:8080/tmpcraftsmen/${id}`)

const addCraftsman = (craftsman_name, craftsman_last_name, craftsman_profession, craftsman_city, craftsman_email, craftsman_phone, craftsman_rev) => axios.post(`http://localhost:8080/craftsmen`, { craftsman_name, craftsman_last_name, craftsman_profession, craftsman_city, craftsman_email, craftsman_phone, craftsman_rev })

const getTmpReview = () => axios.get(`http://localhost:8080/tmpreviews`)

const delTmpReview = (id) => axios.delete(`http://localhost:8080/tmpreviews/${id}`)
/** ADD REVIEW!!!!!!!!!!!!! */

const services = {
    addUser,
    logout
}

export default services