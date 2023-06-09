import axios from 'axios';

export const apiInstance = axios.create({
    baseURL: `${process.env.REACT_APP_API_URL}`,
});

apiInstance.interceptors.request.use(config => {
    const isAuthRequest = config.url?.includes('auth');

    if (!isAuthRequest) {
        config.headers.setAuthorization(`Bearer ${document.cookie.slice(6)}`);
    }

    return config;
});

apiInstance.interceptors.response.use(config => config);
