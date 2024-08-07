import axios from "axios";
/* one baseURL is for development, the other for Heroku deployment */
//axios.defaults.baseURL = 'http://127.0.0.1:8000/';
axios.defaults.baseURL = 'https://vivian-api-740f908fe2d0.herokuapp.com/';
axios.defaults.headers.post['Content-Type'] = 'multipart/form-data';
axios.defaults.withCredentials = true;

export const axiosReq = axios.create();
export const axiosRes = axios.create();