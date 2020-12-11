"use strict"
const express = require("express");
const BodyParser = require("body-parser")
const https = require("https")

const app = express();
app.set("views engine", "ejs");
app.use(BodyParser.urlencoded({extended: true}));



app.listen(process.env.PORT || 3000, ()=>{
    console.log("Server running on PORT 3000")
})