import { Router } from "express";
import { sendHelloWorld } from "../controller/helloWorldController.ts";
import { Worker } from 'worker_threads';

const THREAD_COUNT = 2;


const router = Router();


router.get('/helloworld', sendHelloWorld);

function createWorker(): Promise<number> {
    return new Promise((resolve, reject) => {
        const worker = new Worker('./src/controller/counterController.ts', {
            workerData: {thread_count: THREAD_COUNT}
        });

        worker.on('message', (data) => {
            resolve(data);
        })

        worker.on('error', () => {
            reject('An error ocurred');
        })
    });

    
}

router.get('/counter', async (req,res) => {
    const workerPromises = [];

    for (let i = 0; i < THREAD_COUNT; i++) {
        workerPromises.push(createWorker());
    }

    
    const thredResult: number[] = await Promise.all(workerPromises);

    let counterResult = 0;
    thredResult.forEach((element) => counterResult+=element);

    res.status(200).send({result: counterResult});
    
})


export default router;