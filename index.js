const express = require('express');
const app = express();
const path = require('path');
const mongoose = require('mongoose');
const data =  require("./models/schema");
const route = require("./routes/route");

app.use(express.urlencoded({extended:true}))
app.set('view engine', 'ejs');
app.use(express.static("views"))
app.use(express.static("assets"))



const mongo = "mongodb+srv://sampleuser:12345Aids@cluster0.oac1w0b.mongodb.net/LOGINDB?retryWrites=true&w=majority";
mongoose.connect(mongo,{ useNewUrlParser: true, useUnifiedTopology: true}).then(()=>{
    console.log("db connected")
    app.listen(3008,()=>{
        console.log("server is ready")
    })
}).catch(err=>console.log(err))


app.use(route)

app.get("/",(req,res)=>{
    res.render("index.ejs")
})
