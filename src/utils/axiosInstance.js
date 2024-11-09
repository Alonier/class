// utils/axiosInstance.js
import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://localhost:8080", // 기본 URL 설정
  headers: {
    "Content-Type": "application/json",
  },
});

// 요청 인터셉터 예시 (필요시 추가)
axiosInstance.interceptors.request.use(
  (config) => {
    // 추가 설정이 필요하면 여기서 처리
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// 응답 인터셉터 예시 (필요시 추가)
axiosInstance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default axiosInstance;
