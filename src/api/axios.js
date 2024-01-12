import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://localhost:8080/',
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json',
    Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJ1c2VySWQiOjE0LCJleHAiOjE3MDUwNjA0MzV9.jpb2fngZeq6R7v0l77wUGsXdRNZFK5iyhFlgq4jo1WE`,
  },
});
export default instance;
