import bcrypt from "bcryptjs";
import db from "../models/index";
import { where } from "sequelize";
const salt = bcrypt.genSaltSync(10);

let checkUserEmail = (email) => {
    return new Promise(async (resolve, reject) => {
        try {
            let user = await db.User.findOne({
                where: {
                    email: email,
                },
            });

            if (user) {
                resolve(true);
            } else {
                resolve(false);
            }
        } catch (e) {
            reject(e);
        }
    });
};

let handleUserLogin = (email, password) => {
    return new Promise(async (resolve, reject) => {
        try {
            let isExist = await checkUserEmail(email);
            if (isExist) {
                let user = await db.User.findOne({
                    attributes: ["email", "roleId", "password"],
                    where: { email: email },
                    raw: true,
                });

                if (user) {
                    let check = await bcrypt.compare(password, user.password);

                    if (check) {
                        delete user.password;
                        resolve({ errCode: 0, message: "ok", user: user });
                    } else {
                        resolve({ errCode: 3, message: "wrong password" });
                    }
                } else {
                    resolve({ errCode: 2, message: "user not found!" });
                }
            } else {
                resolve({ errCode: 1, message: "email not found!" });
            }
        } catch (e) {
            reject(e);
        }
    });
};

let getUser = (id) => {
    return new Promise(async (resolve, reject) => {
        try {
            if (id === "ALL") {
                let user = await db.User.findAll({
                    attributes: {
                        exclude: ["password"],
                    },
                });
                resolve(user);
            }
            if (id && id !== "ALL") {
                let user = await db.User.findOne({
                    where: { id: id },
                    attributes: {
                        exclude: [password],
                    },
                });
                resolve(user);
            }
        } catch (e) {
            reject(e);
        }
    });
};

let hashUserPassword = (password) => {
    return new Promise(async (resolve, reject) => {
        try {
            let hash = await bcrypt.hashSync(password, salt);
            resolve(hash);
        } catch (e) {
            reject(e);
        }
    });
};

let createUser = (data) => {
    return new Promise(async (resolve, reject) => {
        try {
            let check = await checkUserEmail(data.email);
            if (check) {
                resolve({
                    errCode: 1,
                    errMessage: "Your email is already in used",
                });
            } else {
                let hashPassword = await hashUserPassword(data.password);
                await db.User.create({
                    email: data.email,
                    password: hashPassword,
                    firstName: data.firstName,
                    lastName: data.lastName,
                    address: data.address,
                    phonenumber: data.phonenumber,
                    gender: data.gender === "1" ? true : false,
                    roleId: data.roleId,
                });
                resolve({ errCode: 0, errMessage: "User created" });
            }
        } catch (e) {
            reject(e);
        }
    });
};

let deleteUser = (id) => {
    return new Promise(async (resolve, reject) => {
        try {
            let user = await db.User.findOne({
                where: {
                    id: id,
                },
            });

            if (!user) {
                resolve({
                    errCode: 2,
                    errMessage: "User not exist",
                });
            } else {
                await db.User.destroy({
                    where: {
                        id: id,
                    },
                });
                resolve({
                    errCode: 0,
                    errMessage: "User deleted",
                });
            }
        } catch (e) {
            reject(e);
        }
    });
};

let editUser = (data) => {
    return new Promise(async (resolve, reject) => {
        try {
            let user = await db.User.findOne({
                where: { id: data.id },
                raw: false,
            });
            if (user) {
                user.firstName = data.firstName;
                user.lastName = data.lastName;
                user.address = data.address;

                await user.save();
                resolve({
                    errCode: 0,
                    message: "User updated",
                });
            } else {
                resolve({
                    errCode: 2,
                    message: "User not found",
                });
            }
        } catch (e) {
            reject(e);
        }
    });
};

module.exports = {
    checkUserEmail: checkUserEmail,
    handleUserLogin: handleUserLogin,
    getUser: getUser,
    createUser: createUser,
    deleteUser: deleteUser,
    editUser: editUser,
};
