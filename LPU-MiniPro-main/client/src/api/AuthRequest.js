import axios from 'axios';

const API = axios.create({ baseURL: 'https://github.com/RISHEETH-REDDY/LPU-Mini-Demo' });

export const logIn = (formData) => API.post('/auth/login', formData); 

export const signUp = (formData) => API.post('/auth/register', formData);