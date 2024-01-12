import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://172.30.1.18:8080', // Replace with your actual API base URL
});

// Set authentication token if available (you might have your own logic to get the token)
const token = 'your_authentication_token'; // Replace with your actual authentication token
if (token) {
  instance.defaults.headers.common['Authorization'] = `Bearer ${token}`;
}

export default instance;
