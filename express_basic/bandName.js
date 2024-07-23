import express from "express" 

import {dirname } from "path"
import { fileURLToPath } from "url";
import bodyParser from "body-parser";

const __dirname = dirname(fileURLToPath(import.meta.url))
const app = express()
const port = 3000;



// })

//var bandName;
app.use(bodyParser.urlencoded({extended: true}))



function bandName(req, res, next){
    console.log(req.body);
    bandName= req.body['street'] + req.body["pet"]
    console.log(bandName);
    next();

    
}
app.use(bandName);

app.get("/", (req, res) => {
    //console.log(req.rawHeaders)
    res.sendFile(__dirname + "/public/index.html")
    //console.log(__dirname + "/public/index.html")
   
})
app.get("/about", (req, res) =>{
    res.send("<h1>This ia about me</h1>")
})
app.get("/contact", (req, res) =>{
    res.send("<h1> Call me on 09072210193</h1>")


})

// middleware 

app.post("/submit", (req,res) => {
    res.send(`this is the output of your input which is <h1 > ${bandName} </h1>`);

})
app.listen(port , ()=> {
    console.log(`Server started on port ${port}`)
}) 
