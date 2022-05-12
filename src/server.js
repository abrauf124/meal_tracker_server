import express from 'express';
import { routes } from './routes';
import bodyParser from 'body-parser';
import { db } from './db';

const app = express();
app.use(bodyParser.json());

routes.forEach(route => {
    app[route.method](route.path, route.handler);
});


const start = async () => {
    await db.connect('mongodb://127.0.0.1:27017');
    await app.listen(8080);
    console.log("Listening on port 8080");
}

start();