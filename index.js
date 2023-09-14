import express from "express";
import { PORT } from "./config.js";
import { router } from "./routes/routes.js";
import { tareasRoutes } from "./routes/tareasRoutes.js";



const app=express();

app.use(express.json());

app.use((req,res, next)=>{
    res.append('Access-Control-Allow-Origin',['*']);
    res.append('Access-Control-Allow-Methods','GET,PUT,POST,DELETE');
    res.append('Access-Control-Allow-Headers','Content-type');
    next();
});

app.use(router);
app.use(tareasRoutes);

app.listen(PORT);
console.log("Server running on port 3300");
