import axios from 'axios';

const getAccessToken = () => {
  return localStorage.getItem('accessToken');
};
console.log(getAccessToken());
const instance = axios.create({
  baseURL: 'http://localhost:8080/',
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${getAccessToken()}`,
  },
});
export default instance;
