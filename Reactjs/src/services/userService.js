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

const deleteUserService = (userId) => {
    return axios.delete("/api/delete-user", {
        data: {
            id: userId,
        },
    });
};

export { handleLoginApi, getUser, createNewUserService, deleteUserService };
