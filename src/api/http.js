import axios from "axios";

const http = axios.create({
  baseURL: "https://api.example.com",
  timeout: 5000,
});

// 请求拦截器
http.interceptors.request.use(
  (config) => {
    //加载的是token的请求头
    config.headers.Authorization = `Bearer ${localStorage.getItem("token")}`; //这里读取的本地的token的名字是'token'
    return config;
  },
  (error) => {
    // 对请求错误做些什么
    return Promise.reject(error);
  },
);

// 响应拦截器
http.interceptors.response.use(
  (response) => {
    // 对响应数据做点什么
    return response.data;
  },
  (error) => {
    // 对响应错误做点什么
    return Promise.reject(error);
  },
);

export default http;
