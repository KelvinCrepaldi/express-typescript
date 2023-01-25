import { Router } from "express";
import userCreateController from "./controllers/userCreate.controller";
import userListController from "./controllers/userList.controller";

const routes = Router();

routes.post("/user", userCreateController);
routes.get("/user", userListController);

export default routes;
