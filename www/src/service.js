import axios from 'axios';

const USER_URL = '/api/user/';
/****************
 * USER SERVICES*
 ***************/

// export const getAllCraftsmans = () => axios.get(`http://localhost:8080/craftsmen`)

export const getAllUsers = () => axios.get(USER_URL)

export const addTmpReview = (rewTxt, rewCraftID) => axios.post(`http://localhost:8080/tmpreviews`, { rewTxt, rewCraftID })

/****************
 * ADMIN SEVICES*
 ***************/

const ADMIN_URL = '/api/admin/'

export const addCraftsman = (craftsman_name, craftsman_last_name, craftsman_profession, craftsman_city, craftsman_email, craftsman_phone, craftsman_rev) => axios.post(`http://localhost:8080/craftsmen`, { craftsman_name, craftsman_last_name, craftsman_profession, craftsman_city, craftsman_email, craftsman_phone, craftsman_rev })

export const getTmpReview = () => axios.get(`http://localhost:8080/tmpreviews`)

export const delTmpReview = (id) => axios.delete(`http://localhost:8080/tmpreviews/${id}`)
/** ADD REVIEW!!!!!!!!!!!!! */

