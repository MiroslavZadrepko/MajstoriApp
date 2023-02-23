import axios from 'axios';

const TMP_URL = '/api/tmp/';

//creates tmp craftsman by user, storring in tmp
const createTmpCraftsman = async (craftsman, token) => {

    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    };
    const response = await axios.post(TMP_URL, craftsman, config);
    return response.data;
};

//admin gets all tmp craftsman
const ADMIN_URL = '/api/admin/'
const getAllTmpCraftsman = async (token) => {

    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    };
    const response = await axios.get(ADMIN_URL + `tmpcraftsmen`, config);
    return response.data;
};

//admin deletes one tmp craftsman
const deleteTmpCraftsman = async (id, token) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    };

    const response = await axios.delete(ADMIN_URL + `tmpcraftsmen/` + id, config);
    return response.data;
}

const services = {
    createTmpCraftsman,
    getAllTmpCraftsman,
    deleteTmpCraftsman,
};

export default services;