import express from "express";
import pagesRouter from "./routers/pagesRouter.js";


const app = express();


app.use(express.static('public'));
app.use(pagesRouter);


const port = 8080;
app.listen(port, () => console.log("Server running on port ", port));