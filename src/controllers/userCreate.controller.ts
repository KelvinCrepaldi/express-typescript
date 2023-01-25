import { Request, Response } from "express";
import userCreateService from "../services/userCreate.service";

const userCreateController = (req: Request, res: Response) => {
  const { name, email } = req.body;

  try {
    const newUser = userCreateService({ name, email });
    return res.status(200).json(newUser);
  } catch (err) {
    if (err instanceof Error) {
      return res.status(400).json({
        error: err.name,
        message: err.message,
      });
    }
  }
};

export default userCreateController;
