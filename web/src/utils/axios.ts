import axios from 'axios';

const $axios = axios.create({
	baseURL: import.meta.env.VITE_API_BASE_URL,
	timeout: 60 * 1000, // 1 minute
});

$axios.interceptors.response.use(
	(response) => response,
	(error) => Promise.reject(error),
);

export default $axios;
