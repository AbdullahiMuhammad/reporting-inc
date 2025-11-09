const axiosInstance = axios.create({
    baseURL: "https://reporting-inc-server.vercel.app/api", // no trailing dash
    headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`
    },
    withCredentials: true
});
export const proxy = "https://reporting-inc-server.vercel.app/api";
