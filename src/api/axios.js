import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://172.30.1.18:8080', // Replace with your actual API base URL
});

// Set authentication token if available (you might have your own logic to get the token)
const token = 'eyJhbGciOiJIUzI1NiJ9.eyJhbGciOiJIUzI1NiJ9.eyJ1c2VySWQiOjYzLCJleHAiOjE3MDUwNjgzNDd9.RzuL13TXcHDJxKareC1H_L-B72xGwWwXMJryhwwgkzc.mGiL6KMzK6_p6NDIwHf6P-SM3xM9TMJbJSf5ea9nhjQ'; // Replace with your actual authentication token
if (token) {
  instance.defaults.headers.common['Authorization'] = `Bearer ${token}`;
}

export default instance;
