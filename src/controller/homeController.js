import express from "express";
import db from "../models/index";

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

module.exports = {
    getHomePage: getHomePage,
    getAboutPage: getAboutPage,
    getCRUD: getCRUD,
};
