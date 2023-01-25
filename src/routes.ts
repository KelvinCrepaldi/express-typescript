import { Router } from "express";
import userListController from "./controllers/userList.controller";
import signupController from "./controllers/signup.controller";

const routes = Router();

routes.post("/user/signup", signupController);
routes.get("/user", userListController);

export default routes;
