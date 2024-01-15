import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://172.30.1.18:8080/',
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json',
    Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJ1c2VySWQiOjYzLCJleHAiOjE3MDUwNjgzNDd9.RzuL13TXcHDJxKareC1H_L-B72xGwWwXMJryhwwgkzc`,
  },
});
export default instance;
