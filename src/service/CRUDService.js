import bcrypt, { hash } from "bcryptjs";
import db from "../models/index";
import { where } from "sequelize";
const salt = bcrypt.genSaltSync(10);

let createNewUser = (data) => {
    return new Promise(async (resolve, reject) => {
        try {
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
            resolve("create user succeed");
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

let getAllUser = () => {
    return new Promise(async (resolve, reject) => {
        try {
            let users = db.User.findAll({ raw: true });
            resolve(users);
        } catch (e) {
            reject(e);
        }
    });
};

let getUserDataById = (id) => {
    return new Promise(async (resolve, reject) => {
        try {
            let userData = await db.User.findOne({
                where: { id: id },
                raw: true,
            });
            if (userData) {
                resolve(userData);
            } else {
                resolve([]);
            }
        } catch (e) {
            reject(e);
        }
    });
};

let updateUserData = (data) => {
    return new Promise(async (resolve, reject) => {
        try {
            let user = await db.User.findOne({ where: { id: data.id } });
            if (user) {
                user.firstName = data.firstName;
                user.lastName = data.lastName;
                user.address = data.address;

                await user.save();

                let allUser = await db.User.findAll();
                resolve(allUser);
            } else {
                resolve();
            }
        } catch (e) {
            reject(e);
        }
    });
};

let deleteUserById = (id) => {
    return new Promise(async (resolve, reject) => {
        try {
            let user = await db.User.findOne({ where: { id: id } });
            if (user) {
                user.destroy();
                resolve();
            }
            resolve();
        } catch (e) {
            reject(e);
        }
    });
};

module.exports = {
    createNewUser: createNewUser,
    getAllUser: getAllUser,
    getUserDataById: getUserDataById,
    updateUserData: updateUserData,
    deleteUserById: deleteUserById,
};
