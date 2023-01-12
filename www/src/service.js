import axios from 'axios';

export const getAllCraftsmans = () => axios.get(`https://backcraftapp.herokuapp.com/majstori`)
export const getAllUsers = () => axios.get(`https://backcraftapp.herokuapp.com/users`)

export const addUser = (user_name, user_email, user_password) => axios.post(`https://backcraftapp.herokuapp.com/users`, { user_name, user_email, user_password })

export const addTmpCraftsman = (craftsman_name, craftsman_last_name, craftsman_profession, craftsman_city,craftsman_email, craftsman_phone, craftsman_rev) => axios.post(`https://backcraftapp.herokuapp.com/tmp`, { craftsman_name, craftsman_last_name, craftsman_profession, craftsman_city, craftsman_email, craftsman_phone, craftsman_rev })
export const getTmpCraftsman = () => axios.get(`https://backcraftapp.herokuapp.com/tmp`)
export const delTempCraftsman = (id) => axios.delete(`https://backcraftapp.herokuapp.com/tmp/${id}`)
export const addCraftsman = (craftsman_name, craftsman_last_name, craftsman_profession, craftsman_city, craftsman_email, craftsman_phone, craftsman_rev) => axios.post(`https://backcraftapp.herokuapp.com/majstori`, { craftsman_name, craftsman_last_name, craftsman_profession, craftsman_city, craftsman_email, craftsman_phone, craftsman_rev }) 

export const addTmpReview = (rewTxt, rewCraftID) => axios.post(`https://backcraftapp.herokuapp.com/tmpRew`, { rewTxt, rewCraftID })
export const getTmpReview = () => axios.get(`https://backcraftapp.herokuapp.com/tmpRew`)
export const delTmpReview = (id) => axios.delete(`https://backcraftapp.herokuapp.com/tmpRew/${id}`)