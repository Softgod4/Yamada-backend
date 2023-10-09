"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const database_1 = require("./database");
const path_1 = __importDefault(require("path"));
const PORT = 3001;
const express = require('express');
var app = express();
app.get('/api/nsfw', function (req, res) {
    const min = 372;
    const max = 539;
    const randnum = (Math.floor(Math.random() * (max - min + 1)) + min).toString();
    let imagePath = path_1.default.join(__dirname, '..', 'image', `${randnum}.jpg`);
    res.sendFile(imagePath);
    (0, database_1.databaseConnect)('SELECT * FROM public."Backend"');
});
app.listen(PORT);
