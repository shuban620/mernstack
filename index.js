import express from "express";
import router from "./routing/routing.js";
import connectDB from "./DATABASE/database.js";
import dotenv from "dotenv";

dotenv.config(); 

const app = express();

app.use(express.json());

connectDB();

const port = process.env.PORT || 5000;

app.use("/api/v1", router);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${process.env.PORT}`);
  console.log("Server is running");
});

