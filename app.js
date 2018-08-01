const express = require("express");
const app = express();
const request = require("request");

app.set("view engine", "ejs");

app.get("/", function(req, res) {
    res.render("getquote");
});

app.get("/showquote", function(req, res){
    let url = "http://quotes.rest/qod.json";
    request(url, function(error, response, body){
       if(!error && response.statusCode == 200){
           let data = JSON.parse(body);
           res.render("showquote", {data: data});
       } 
    });
});
app.listen(process.env.PORT, process.env.IP, function(){
    console.log("server is running");
});