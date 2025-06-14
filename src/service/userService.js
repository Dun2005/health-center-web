import bcrypt from "bcryptjs";
import db from "../models/index";

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

module.exports = {
    checkUserEmail: checkUserEmail,
    handleUserLogin: handleUserLogin,
};
