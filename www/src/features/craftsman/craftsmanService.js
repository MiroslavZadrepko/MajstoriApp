import axios from 'axios';

const TMP_URL = '/api/tmp/';

const createTmpCraftsman = async (craftsman, token) => {

    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    };

    const response = await axios.post(TMP_URL, craftsman, config);

    return response.data;
};

const services = {
    createTmpCraftsman
};

export default services;