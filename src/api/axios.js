import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://localhost:8080/',
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json',
    Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJ1c2VySWQiOjE0LCJleHAiOjE3MDUzMzU4NDF9.Vg9TLU8FaQvbohpleMWM2514ruAGduFj6gKWWx7AznY`,
  },
});
export default instance;
