var express = require("express");
// Cookie parser will be needed for authentication system
var cookieParser = require("cookie-parser")
// Starting express

var app = express();

// Using json 
require('dotenv').config()
app.use(express.json());
app.use(cookieParser());
app.use(express.static('public'));
const mongoose = require('mongoose');
const mongodb = require("mongodb")
var cors = require("cors");
const {
    response
} = require("express");
const { on } = require("events");

app.use(cors({ optionsSuccessStatus: 200, credentials: true, origin: 'https://www.linkedin.com' }));
app.use(express.static("public"));

app.post("/api/post",(req, res) => {
    console.log(req.body)
})

var listener = app.listen(8080, function () {
    console.log("Your app is listening on port " + listener.address().port);
});

