const https = require('https');
const express = require('express');

const app = express();
const PORT = 3000;

app.use (express.json());
app.use(express.urlencoded({extended: true}));

app.get("/", (req, res) => {
    res.send("Hello world!");
});

app.get("/webhook", (req, res) => {
    res.send("Hook!");
});

