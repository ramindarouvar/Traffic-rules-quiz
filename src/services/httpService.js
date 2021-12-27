import axios from "axios";

axios.interceptors.response.use(null, error => {
    const expectedErrors = 
        error.response &&
        error.response.status >= 400 &&
        error.response.status < 500;
    if(!expectedErrors){
        alert("در دریافت وب سرویس آب و هوا مشکلی از سمت سرور مربوطه رخ داده است.")
    }
    return Promise.reject(error);
})

const http = {
    get: axios.get,
    post: axios.post,
    put: axios.put,
    delete: axios.delete
};

export default http;