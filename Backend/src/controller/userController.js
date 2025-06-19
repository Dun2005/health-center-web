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
    let id = req.body.id;
    let user = await userService.getUser(id);
    if (!id) {
        return res.status(200).json({
            errCode: 1,
            message: "missing parameter",
            user: {},
        });
    }

    return res.status(200).json({
        errCode: 1,
        message: "get user successful",
        user,
    });
};

module.exports = {
    loginHandler: loginHandler,
    handleGetUser: handleGetUser,
};
