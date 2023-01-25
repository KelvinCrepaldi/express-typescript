import { INewUser, ISignup, IUser } from "../interfaces";
import { users } from "../database";
import { v4 as uuidv4 } from "uuid";
import * as bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import config from "../config";

const signupService = async ({ name, email, password }: ISignup) => {
  const { secret, expiresIn } = config;
  try {
    const userAlreadyExists = users.find((user) => {
      user.email === email;
    });

    if (userAlreadyExists) {
      throw new Error("Email already exists");
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser: IUser = {
      id: uuidv4(),
      name,
      email,
      password: hashedPassword,
    };

    users.push(newUser);

    const token = jwt.sign({ email: email }, secret as string, {
      expiresIn: expiresIn,
    });

    const res: INewUser = { user: newUser, token: token };

    return res;
  } catch (err) {
    if (err instanceof Error) {
      const error = (err as Error).name;
      throw new Error(error);
    }
  }
};

export default signupService;
