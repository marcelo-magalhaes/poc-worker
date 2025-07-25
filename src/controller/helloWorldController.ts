import type { Request, Response } from "express";


export function sendHelloWorld (req:Request, res:Response) {
    res.status(200);
    res.send({message: "Hello World"});
}