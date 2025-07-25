import express from "express";
import router from "./routes/workerRouter.ts";


const server = express();

server.use(router);


server.listen(3000, () => {
    console.log("Server listen on port 3000");
})

