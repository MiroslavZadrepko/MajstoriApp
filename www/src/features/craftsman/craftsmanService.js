import axios from 'axios';

//////////////////
//ADMIN SERVICES//
//////////////////

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
};

//admin moves one tmp craftsman to perm and deletes origin document
const moveTmpCraftsman = async (id, token) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    };
    const response = await axios.delete(ADMIN_URL + `tmpcraftsmen/` + id, config);
    return response.data;
};

//admin gets all tmp revs 
const getAllTmpRevs = async (token) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    };
    const response = await axios.get(ADMIN_URL + `tmpreviews`, config);
    return response.data;
};

const deleteTmpRev = async (id, token) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    };
    const response = await axios.delete(ADMIN_URL + `tmpreviews/` + id, config);
    return response.data;
};

//admin moves tmp rev to craftsan
const addReview = async (id, token) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    };
    const response = await axios.post(ADMIN_URL + `craftsmen/` + id + '/review/', config);
    return response.data
}
/////////////////
//USER SERVICES//
/////////////////

//creates tmp craftsman by user, storring in tmp
const TMP_URL = '/api/tmp/';
const createTmpCraftsman = async (craftsman, token) => {

    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    };
    const response = await axios.post(TMP_URL + `tmpcraftsmen/`, craftsman, config);
    return response.data;
};

// create tmp rev by user, store in tmp
const addTmpReview = async (recenzija, token) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    };
    const response = await axios.post(TMP_URL + `tmpreviews`, recenzija, config);
    return response.data;
}

const USER_URL = '/api/user/';
const findCraftsmen = async (searchTerm) => {

    const response = await axios.get(`${USER_URL}search?searchQuery=${searchTerm}`);
    return response.data;
}

const services = {
    createTmpCraftsman,
    getAllTmpCraftsman,
    deleteTmpCraftsman,
    moveTmpCraftsman,
    findCraftsmen,
    addTmpReview,
    getAllTmpRevs,
    deleteTmpRev,
    addReview
};

export default services;