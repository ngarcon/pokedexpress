require("dotenv").config(); 
const express = require('express');
const app = express(); 
const PORT = process.env.PORT || 3000; 


const router = require("./app/router"); 

app.set("view engine", "ejs");
app.set("views", "./app/views"); 

app.use(express.static("public"));

app.use(router);

app.listen(PORT, () => {
    console.log("Listening on PORT : ", PORT);
})