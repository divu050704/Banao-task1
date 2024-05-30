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

const url = process.env["MONGO_URI"];

mongoose
  .connect(url)
  .then(() => {
    console.log("Connected to the database ");
  })
  .catch((err) => {
    console.error(`Error connecting to the database. n${err}`);
  });

app.use(cors({ optionsSuccessStatus: 200, credentials: true, origin: 'https://www.linkedin.com' }));
app.use(express.static("public"));


const detailsSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    bioline: {
        type: String,
        required: true
    },
    location:{
        type: String,
        required: true
    },
    followers: {
        type: String,
        required: true
    },
    userConnections: {
        type: String,
        required: true
    },
    about: {
        type: String,
        required: true
    }

})
const detailsModel = mongoose.model("details", detailsSchema)

app.post("/api/post",(req, res) => {
    const body = req.body;
    const data = {
        name: body.name,
        bioline: body.bioline,
        location: body.l_ocation,
        followers: body.followers,
        userConnections: body.c_onnections,
        about: body.about
    }
    const save = detailsModel(data)
    save.save()
    console.log("Saved Data for " + body.name)
})

var listener = app.listen(8080, function () {
    console.log("Your app is listening on port " + listener.address().port);
});

