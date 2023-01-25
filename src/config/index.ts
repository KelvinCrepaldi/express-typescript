import * as dotenv from "dotenv";
dotenv.config();

const config = {
  PORT: process.env.PORT,
  secret: process.env.SECRET_KEY,
  expiresIn: process.env.EXPIRES_IN,
};

export default config;
