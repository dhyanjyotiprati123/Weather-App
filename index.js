const express=require("express");
const path= require("path");
const hbs=require("hbs");
const app= express();


const static_path=path.join(__dirname,"./templates/views")
const partial_path=path.join(__dirname,"./templates/partials");

app.set("view engine","hbs");
app.set("views",static_path);

hbs.registerPartials(partial_path);

app.use(express.static(path.join(__dirname,"./public")));


app.get("/",(req,res)=>{
    res.render("index");
});

app.get("/weather",(req,res)=>{
    res.render("weather");
});

app.get("/about",(req,res)=>{
    res.render("about");
});

app.get("*",(req,res)=>{
    res.render("error");
});

app.listen(3000,()=>{
    console.log("server is on");
});