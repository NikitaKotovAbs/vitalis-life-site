import axios from 'axios';

export const api = axios.create({
    baseURL: 'http://localhost:8080/api/v1/public', // http://176.123.169.38:8081/api/v1/public
    timeout: 10000,
    headers: {
        'Content-Type': 'application/json',
    }
});