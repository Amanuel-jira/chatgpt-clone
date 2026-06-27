import "dotenv/config";

import express from "express";
import cors from "cors";
import db from "./db/db.config.js";

import { errorHandler } from "./src/MiddleWare/error-handler.js";
import mainRouter from "./src/Api/main.routes.js";

const app = express();

app.use(
  cors({
    origin: "http://localhost:5173",
  }),
);

app.use(express.json());
app.use("/api", mainRouter);
app.use(errorHandler);

async function startServer() {
  try {
    const connection = await db.getConnection();
    console.log("Database connection successful!");
    connection.release();
    app.listen(3888, () => {
      console.log("server is running on port http://localhost:3888");
    });
  } catch (error) {
    console.error("Error starting the server:", error);
  }
}

startServer();
