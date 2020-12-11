"use strict"
const express = require("express");
const BodyParser = require("body-parser")
const https = require("https")

const app = express();
app.set("view engine", "ejs");
app.use(BodyParser.urlencoded({extended: true}));
app.use(express.static("body"))

app.get("/", (req, res)=>{
    res.render("index")
})



app.listen(process.env.PORT || 3000, ()=>{
    console.log("Server running on PORT 3000")
})