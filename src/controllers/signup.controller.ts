import { Request, Response } from "express";
import signupService from "../services/signup.service";

const signupController = async (req: Request, res: Response) => {
  const { name, email, password } = req.body;

  try {
    const signup = await signupService({ name, email, password });
    return res.status(200).send(signup);
  } catch (err) {
    if (err instanceof Error) {
      return res.status(400).send({
        error: err.name,
        message: err.message,
      });
    }
  }
};

export default signupController;
