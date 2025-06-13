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
    let data = await CRUDService.getAllUser();
    return res.render("displayTable", { dataTable: data });
};

let displayGetCRUD = async (req, res) => {
    let data = await CRUDService.getAllUser();
    return res.render("displayTable", { dataTable: data });
};

let getEditCRUD = async (req, res) => {
    let userId = req.query.id;
    if (userId) {
        let userData = await CRUDService.getUserDataById(userId);
        return res.render("editCRUD", { user: userData });
    } else {
        return res.send("User not found!");
    }
};

let putCRUD = async (req, res) => {
    let data = req.body;
    let allUser = await CRUDService.updateUserData(data);
    return res.render("displayTable", { dataTable: allUser });
};

let deleteCRUD = async (req, res) => {
    let id = req.query.id;
    if (id) {
        await CRUDService.deleteUserById(id);
        let data = await CRUDService.getAllUser();
        return res.render("displayTable", { dataTable: data });
    } else {
        return res.send("User not found");
    }
};

module.exports = {
    getHomePage: getHomePage,
    getAboutPage: getAboutPage,
    getCRUD: getCRUD,
    postCRUD: postCRUD,
    displayGetCRUD: displayGetCRUD,
    getEditCRUD: getEditCRUD,
    putCRUD: putCRUD,
    deleteCRUD: deleteCRUD,
};
