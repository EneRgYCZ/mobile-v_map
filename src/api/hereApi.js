import axios from 'axios'

export default axios.create({
    baseURL: 'https://geocode.search.hereapi.com/v1/geocode?q=',
    headers: {
        Authorization: 'Bearer '
    }
});
