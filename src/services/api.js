const axiosInstance = axios.create({
    
    headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`
    },
    withCredentials: true
});
export const proxy = "https://reporting-inc-server.vercel.app/api";
