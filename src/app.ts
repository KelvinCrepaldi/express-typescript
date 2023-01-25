import express from "express";
import { config } from "./config";
import routes from "./routes";

const app = express();
const PORT = config.PORT || 3000;

app.use(express.json());

app.use("/api", routes);

app.listen(PORT, () => {
  console.log(`App started at port: ${PORT}`);
});
