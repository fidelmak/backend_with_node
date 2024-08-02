let express = require('express');
let app = express();

// console.log("Hello World");

// creating a path 
absolutePath = __dirname + '/views/index.html';

// making a get request here 
app.get("/", (req, res)=>{
    // send a message to the web
    //res.send("Hello Express");
    res.sendFile(absolutePath); // reading a file form path 

})






































 module.exports = app;
