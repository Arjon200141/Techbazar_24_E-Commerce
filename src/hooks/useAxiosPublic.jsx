import axios from "axios";

const axiosPublic = axios.create({
    baseURL: "https://techbazar24-server.vercel.app"
})

const useAxiosPublic = () => {
    return axiosPublic;
};

export default useAxiosPublic;