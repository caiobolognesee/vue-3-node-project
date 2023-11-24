import express from "express";
import userController from "../controllers/userController.js";

const routes = express.Router();

routes.get('/user', userController.list);
routes.get('/user/:id', userController.listById);
routes.post('/user', userController.register);
routes.put('/user/:id', userController.updateById);
routes.delete('/user/:id', userController.deleteById);

export default routes;