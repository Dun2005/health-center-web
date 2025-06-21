import userService from "../service/userService";

let loginHandler = async (req, res) => {
    let email = req.body.email;
    let password = req.body.password;

    if (!email || !password) {
        return res.status(500).json({
            errCode: 1,
            message: "missing parameter",
        });
    }

    let user = await userService.handleUserLogin(email, password);

    return res.status(200).json({
        errCode: user.errCode,
        message: user.message,
        user: user.user ? user.user : {},
    });
};

let handleGetUser = async (req, res) => {
    let id = req.query.id;
    let user = await userService.getUser(id);
    if (!id) {
        return res.status(200).json({
            errCode: 1,
            message: "missing parameter",
            user: {},
        });
    }

    return res.status(200).json({
        errCode: 0,
        message: "get user successful",
        user,
    });
};

let handleCreateUser = async (req, res) => {
    let message = await userService.createUser(req.body);
    return res.status(200).json(message);
};

let handleEditUser = async (req, res) => {
    if (!req.body.id) {
        return res.status(200).json({
            errCode: 1,
            message: "Missing parameter",
        });
    }

    let message = await userService.editUser(req.body);
    return res.status(200).json(message);
};

let handleDeleteUser = async (req, res) => {
    if (!req.body.id) {
        return res.status(200).json({
            errCode: 1,
            message: "Missing parameter",
        });
    }

    let message = await userService.deleteUser(req.body.id);
    return res.status(200).json(message);
};

module.exports = {
    loginHandler: loginHandler,
    handleGetUser: handleGetUser,
    handleCreateUser: handleCreateUser,
    handleEditUser: handleEditUser,
    handleDeleteUser: handleDeleteUser,
};
