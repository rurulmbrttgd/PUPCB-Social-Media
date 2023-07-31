import axios from "axios";

export const makeRequest = axios.create({
    // baseURL:"http://192.168.1.101:8800/api/",
    baseURL:"http://localhost:8800/api/",
    withCredentials: true,
    
});