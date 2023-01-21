import axios from 'axios';

const USER_URL = `http://localhost:5000/api/user`;

//user services 

export const getAllCraftsmans = () => axios.get(`https://backcraftapp.herokuapp.com/majstori`)

export const addUser = async (user_name, user_email, user_password) => {
    const response = await axios.post(USER_URL, { user_name, user_email, user_password });
    return response.data;
}

export const addTmpCraftsman = (craftsman_name, craftsman_last_name, craftsman_profession, craftsman_city,craftsman_email, craftsman_phone, craftsman_rev) => axios.post(`https://backcraftapp.herokuapp.com/tmp`, { craftsman_name, craftsman_last_name, craftsman_profession, craftsman_city, craftsman_email, craftsman_phone, craftsman_rev })

export const addTmpReview = (rewTxt, rewCraftID) => axios.post(`https://backcraftapp.herokuapp.com/tmpRew`, { rewTxt, rewCraftID })


/**admin services */
export const getAllUsers = () => axios.get(`https://backcraftapp.herokuapp.com/users`)

export const getTmpCraftsman = () => axios.get(`https://backcraftapp.herokuapp.com/tmp`)

export const delTempCraftsman = (id) => axios.delete(`https://backcraftapp.herokuapp.com/tmp/${id}`)

export const addCraftsman = (craftsman_name, craftsman_last_name, craftsman_profession, craftsman_city, craftsman_email, craftsman_phone, craftsman_rev) => axios.post(`https://backcraftapp.herokuapp.com/majstori`, { craftsman_name, craftsman_last_name, craftsman_profession, craftsman_city, craftsman_email, craftsman_phone, craftsman_rev }) 

export const getTmpReview = () => axios.get(`https://backcraftapp.herokuapp.com/tmpRew`)

export const delTmpReview = (id) => axios.delete(`https://backcraftapp.herokuapp.com/tmpRew/${id}`)
/** ADD REVIEW!!!!!!!!!!!!! */