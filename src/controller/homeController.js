import express from "express";
import db from "../models/index";
import CRUDService from "../service/CRUDService";

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

let postCRUD = async (req, res) => {
    let message = await CRUDService.createNewUser(req.body);
    console.log(message);
    return res.send("post from post crud");
};

let displayGetCRUD = async (req, res) => {
    let data = await CRUDService.getAllUser();
    console.log(data);
    return res.render("displayTable", { dataTable: data });
};

module.exports = {
    getHomePage: getHomePage,
    getAboutPage: getAboutPage,
    getCRUD: getCRUD,
    postCRUD: postCRUD,
    displayGetCRUD: displayGetCRUD,
};
