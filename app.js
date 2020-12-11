"use strict"
const express = require("express");
const BodyParser = require("body-parser")
const https = require("https");
const { join } = require("path");

const app = express();
app.set("view engine", "ejs");
app.use(BodyParser.urlencoded({extended: true}));
app.use(express.static("body"))
let URL = "https://sv443.net/jokeapi/v2/joke/Any?blacklistFlags=religious,racist"

app.get("/", (req, res)=>{
    https.get(URL, (response)=>{
        response.on("data", (data)=>{
            let result = JSON.parse(data);
            let Category = result.category;
            let content = result.joke
            if(content){
                res.render("index", {Category : Category, content : content})
            }else{
                let seContent = result.setup;
                let preContent = result.delivery;
                let FinContent = seContent+ " " + preContent
                res.render("index", {Category : Category, content : FinContent})
            }
        })
    }) 
})
app.post("/", (req, res)=>{
    https.get(URL, (response)=>{
        response.on("data", (data)=>{
            let result = JSON.parse(data);
            let Category = result.category;
            let content = result.joke
            if(content){
                res.render("index", {Category : Category, content : content})
            }else{
                let seContent = result.setup;
                let preContent = result.delivery;
                let FinContent = seContent+" " +preContent
                res.render("index", {Category : Category, content : FinContent})
            }
        })
    }) 
})




app.listen(process.env.PORT || 3000, ()=>{
    console.log("Server running on PORT 3000")
})