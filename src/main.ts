import { Application, Request, Response } from 'express';
import { Database } from './database';
import path from 'path';

const PORT = 3001;
const express = require('express');
var app: Application = express();

app.get('/api/nsfw', function (req: Request, res: Response) {
    const min: number = 372;
    const max: number = 539;
    const randnum: string = (Math.floor(Math.random() * (max - min + 1)) + min).toString()
    let imagePath: string | undefined = path.join(__dirname, '..', 'image', `${randnum}.jpg`);
    res.sendFile(imagePath);

    const database = new Database();
    database.addUser(randnum)
});

app.listen(PORT);