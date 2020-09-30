const express = require("express");
const routes = express.Router();

const AuthController = require('./AuthController');
const AdminController = require('./AdminController');
const UserController = require('./UserController');

routes.post("/auth/login", AuthController.login);
routes.get("/admin/home", AdminController.home);

routes.get("/users/create", UserController.create);
routes.post("/users/store", UserController.store);

module.exports = routes;