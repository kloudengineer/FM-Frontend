import axios from 'axios';

// ----------------------------------------------------------------------

const axiosInstance = axios.create();

axiosInstance.defaults.baseURL = process.env.REACT_APP_HOST_API_KEY

axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => Promise.reject((error) || 'Something went wrong')
);

export default axiosInstance;
