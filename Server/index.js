require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const { json } = require("express");
const path = require('path');


const app = express();
app.use(express.json());

const port = process.env.PORT || 8080;
const host = process.env.HOST || "::";

// Mongo connection
/* mongoose
  .connect(process.env.DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .catch((err) => console.log(err)); */

app.get("/",(req,res)=>{
	res.sendFile(path.join(__dirname, '/HTML/index.html'));
});

app.get("/favicon",(req,res)=>{
	res.sendFile(path.join(__dirname, '/HTML/images/googleIcon.png'));
});

app.get("/style",(req,res)=>{
	res.sendFile(path.join(__dirname, '/HTML/css/style.css'));
});

app.get("/script",(req,res)=>{
	res.sendFile(path.join(__dirname, '/HTML/js/password.js'));
});

app.listen(port);
console.log('Server started at http://localhost:' + port);
