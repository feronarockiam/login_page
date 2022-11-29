const route = require("express").Router();
const data =  require("../models/schema")
const path = require('path');


route.get("/login",(req,res)=>{
    res.render('login.ejs')
})

route.get("/signup",(req,res)=>{
    res.render('signup.ejs')
})

route.post("/sig",(req,res)=>{
    const logs = new data(req.body);
    logs.save().then(()=>{
        res.redirect("/login")  
    }).catch(err=>{ console.log(err)})
})

route.post("/log",(req,res)=>{
    const user = req.body.username;
    const password = req.body.password;
    data.findOne({ username: user}).then((result)=>{
        if(result == null){
            console.log("User not found");
            res.render("log",{user})
        }
        else if(password == result.password){
            res.render("welcome.ejs",{user})
        }
        else{
            res.render("login.ejs",{user})
            console.log("wrong password")
        }
    })

})

module.exports = route