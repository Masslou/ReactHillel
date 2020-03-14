import axios from 'axios';

export default axios.create({
    baseURL: 'http://5e53d1a831b9970014cf7eb2.mockapi.io/',
    headers: {'Content-Type': 'application/json'}
});

