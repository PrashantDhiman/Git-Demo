var express=require("express");
var app=express();
var port=3000;


zskcnzlkc

// Landing page route
app.get("/", function(req, res){
    res.render("landing.ejs");
});

// Index page route
// OTC -> Over The Counter(Non-Prescription drugs)
app.get("/otc", function(req, res){
    res.render("otc.ejs");
});

// Show OTC product route
app.get("/otc/:id", function(req, res){
    res.render("show.ejs");
});

// Login page route
app.get("/login", function(req, res){
    res.render("login.ejs");
});

// Sign Up page route
app.get("/signup", function(req, res){
    res.render("signup.ejs");
});



app.listen(port, function(){
    console.log("server started on port " + port);
});