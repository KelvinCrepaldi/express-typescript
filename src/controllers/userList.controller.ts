import { Request, Response } from "express";
import userListService from "../services/userList.service";

const userListController = (req: Request, res: Response) => {
  try {
    const userList = userListService();
    return res.status(200).json(userList);
  } catch (err) {
    if (err instanceof Error) {
      return res.status(400).json({
        error: err.name,
        message: err.message,
      });
    }
  }
};
export default userListController;
