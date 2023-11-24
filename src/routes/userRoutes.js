import express from "express";
import userController from "../controllers/userController.js";

const routes = express.Router();

routes.get('/user', userController.list);

export default routes;