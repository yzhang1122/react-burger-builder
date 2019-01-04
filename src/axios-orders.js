import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://react-my-burger-8870f.firebaseio.com/',

});

export default axiosInstance