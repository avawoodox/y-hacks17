var express = require('express');
var app = express();

const port = 8080;

app.set("view engine", "ejs");

app.get("/", function(req,res) {
    res.render("pages/index");
});


app.listen(port);
