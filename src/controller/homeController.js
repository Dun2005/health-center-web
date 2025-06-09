import express from "express";
import db from "../models/index";
import { createNewUser } from "../service/CRUDService";

let getHomePage = (req, res) => {
    return res.send("send from homeController");
};

let getAboutPage = async (req, res) => {
    try {
        let data = await db.User.findAll();
        console.log(data);
        return res.render("homePage", { data: JSON.stringify(data) });
    } catch (e) {
        console.log(e);
    }
};

let getCRUD = (req, res) => {
    return res.render("crud.ejs");
};

let postCRUD = (req, res) => {
    let message = createNewUser(req.body);
    console.log(message);
    return res.send("post from post crud");
};

module.exports = {
    getHomePage: getHomePage,
    getAboutPage: getAboutPage,
    getCRUD: getCRUD,
    postCRUD: postCRUD,
};
