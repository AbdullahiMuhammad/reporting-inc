import axios from "axios";

 const axiosInstance = axios.create({
    headers: {
        authorization: `Bearer ${localStorage.getItem('token')}`
    }
});

export const proxy = "reporting-inc-server.vercel.app/api";
export default axiosInstance;
