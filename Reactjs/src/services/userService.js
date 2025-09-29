import axios from "../axios";

const handleLoginApi = (email, password) => {
    return axios.post("/api/login", { email, password });
};

const getUser = (id) => {
    return axios.get(`/api/get-user?id=${id}`);
};

const createNewUserService = (data) => {
    return axios.post("/api/create-user", data);
};

export { handleLoginApi, getUser, createNewUserService };
