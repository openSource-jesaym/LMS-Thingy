import express from "express";
import dotenv from "dotenv";
import path from "path";
import { startExpressServer } from "./cli-prompt";
const app = express();
const PORT = 2015 || process.env.PORT;
dotenv.config({ path: path.join(__dirname, "/config/env/.env") });
app.set("views", path.join(__dirname + "/views"));
app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname + "/public")));

// ROUTES
import { initRoutes } from "./routes"; // <-- IMPORTANT: This must be called after dotenv.config() 
initRoutes(app);  // 


startExpressServer(PORT, app);
