import axios from 'axios';

export const api = axios.create({
    baseURL: 'http://82.146.35.37:8080/api/v1/public',
    timeout: 10000,
    headers: {
        'Content-Type': 'application/json',
    }
});