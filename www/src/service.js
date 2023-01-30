import axios from 'axios';

const USER_URL = `http://localhost:5000/api/user`;

//user services 

export const getAllCraftsmans = () => axios.get(`http://localhost:3005/majstori`)

export const addUser = async (user_name, user_email, user_password) => {
    const response = await axios.post(USER_URL, { user_name, user_email, user_password });
    return response.data;
}

export const addTmpCraftsman = (craftsman_name, craftsman_last_name, craftsman_profession, craftsman_city,craftsman_email, craftsman_phone, craftsman_rev) => axios.post(`http://localhost:3005/tmp`, { craftsman_name, craftsman_last_name, craftsman_profession, craftsman_city, craftsman_email, craftsman_phone, craftsman_rev })

export const addTmpReview = (rewTxt, rewCraftID) => axios.post(`http://localhost:3005/tmpRew`, { rewTxt, rewCraftID })


/**admin services */
export const getAllUsers = () => axios.get(`http://localhost:3005/users`)

export const getTmpCraftsman = () => axios.get(`http://localhost:3005/tmp`)

export const delTempCraftsman = (id) => axios.delete(`http://localhost:3005/tmp/${id}`)

export const addCraftsman = (craftsman_name, craftsman_last_name, craftsman_profession, craftsman_city, craftsman_email, craftsman_phone, craftsman_rev) => axios.post(`http://localhost:3005/majstori`, { craftsman_name, craftsman_last_name, craftsman_profession, craftsman_city, craftsman_email, craftsman_phone, craftsman_rev }) 

export const getTmpReview = () => axios.get(`http://localhost:3005/tmpRew`)

export const delTmpReview = (id) => axios.delete(`http://localhost:3005/tmpRew/${id}`)
/** ADD REVIEW!!!!!!!!!!!!! */