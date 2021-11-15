import axios from 'axios';

// export const API_URL = 'http://192.168.2.252:50001/api/v0/';
// export const API_URL = 'https://jsonplaceholder.typicode.com';
export const API_URL =
  `${process.env.REACT_APP_BACKEND_URL}/api` || 'http://localhost:5000/api';

export default axios.create({ baseURL: API_URL });
