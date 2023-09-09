import express from "express";
import { PORT } from "./config.js";
import { router } from "./routes/routes.js";
import { tareasRoutes } from "./routes/tareasRoutes.js";



const app=express();

app.use(express.json());

app.use(router);
app.use(tareasRoutes);

app.listen(PORT);
console.log("Server running on port 3300");
