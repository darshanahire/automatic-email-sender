"use strict";
/*global localStorage*/
// inital set up of server
const express = require("express");
const app = express();
const port = process.env.PORT || 5000;

// must needed packages
const cros = require("cors");
require("dotenv").config();
// require("./db/conn");
const cookieParser = require("cookie-parser");
const router=require('./routes/authorization');



const {isTokenPresent}=require('./middleware/isTokenPresent')

// middlewares
app.use(express.json());
app.use(cros());
app.use(cookieParser());

// const EmailRoute = require("./routes/Email.route");
// app.use("/api/", EmailRoute);


// app.get("/",(req,res)=>{
//     res.send("This is homepage");
// })

app.use(router);

// app.use("/send-mail",isTokenPresent,router)
// app.use("/esend",isTokenPresent,router)
// app.use("/api/sign-in",router)
// if(process.env.NODE_ENV !== "production"){
    // console.log(process.env.NODE_ENV)
app.use(express.static("FrontEnd/build"));
const path = require("path");
app.get("*", (req, res) => {
res.sendFile(path.join(__dirname,"FrontEnd", 'build', 'index.html'));
})




app.listen(port, () => {
    console.log("Server is listening on port :", port);
})













// const express = require('express');
// const path = require('path');
// const app = express();

// app.use(express.static(path.join(__dirname, 'build')));

// app.get('/', function (req, res) {
//   res.sendFile(path.join(__dirname, '../FrontEnd/react-login-ui/build', 'index.html'));
// });

// app.listen(9000);