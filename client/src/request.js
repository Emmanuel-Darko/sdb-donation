import axios from 'axios';
const BASE_URL = import.meta.env.VITE_BASE_URL

axios.interceptors.request.use((request) => {
        alert('HELLLO MOMO T.');
    const token = localStorage.getItem('donortoken');
    request.headers.Authorization = token;
    console.log('Adding token to header', token);
});

axios.interceptors.response.use(
response=>response,
error=>{
    console.log(error);
    return Promise.reject(error);
}
//     (response) => {
//     console.log('response....', response);
//     return response.data;
// }, (error) => {
//     return Promise.reject(error);
    // Handle response error
//     alert(error);
//   console.log("HI HH", error);
// }
);
// Request interceptor
// axios.interceptors.request.use(function(config){
//     config.headers = {usertoken: token}
//     // // Modify the request config here, such as adding headers or tokens
//     // config.headers.common = {
//     //     Authorization: `${localStorage.getItem('donortoken')}`,
//     //     "Content-type": "application/json",
//     //     Accept: "application/json"
//     // };
//     return config;
//   },
//   (error) => {
//     // Handle request error
//     return Promise.reject(error);
//   }
// );

// // Response interceptor
// axios.interceptors.response.use(
//   (response) => {
//     // Modify the response data here
//     return response;
//   },
//   (error) => {
//     // Handle response error
//     return Promise.reject(error);
//   }
// );

export default axios;