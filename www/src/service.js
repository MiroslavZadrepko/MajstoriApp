import axios from 'axios';

const USER_URL = '/api/user/';
/****************
 * USER SERVICES*
 ***************/

export const getAllUsers = () => axios.get(USER_URL)

export const addTmpReview = (rewTxt, rewCraftID) => axios.post(`http://localhost:8080/tmpreviews`, { rewTxt, rewCraftID })

/****************
 * ADMIN SEVICES*
 ***************/

const ADMIN_URL = '/api/admin/'

export const getTmpReview = () => axios.get(`http://localhost:8080/tmpreviews`)

export const delTmpReview = (id) => axios.delete(`http://localhost:8080/tmpreviews/${id}`)
/** ADD REVIEW!!!!!!!!!!!!! */