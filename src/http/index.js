import axios from "axios";

const $host = axios.create({
    withCredentials: true,
    baseURL: 'https://relax-pluss-server.herokuapp.com/'
})

const $authHost = axios.create({
    baseURL: 'https://relax-pluss-server.herokuapp.com/api'
})

const authInterceptor = config => {
    config.headers.authorization = `Bearer ${localStorage.getItem('token')}`
    return config
}

$authHost.interceptors.request.use(authInterceptor)

export {
    $host,
    $authHost,
}