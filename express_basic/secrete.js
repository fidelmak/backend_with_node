import express from "express" 

import {dirname } from "path"
import { fileURLToPath } from "url";
import bodyParser from "body-parser";

const __dirname = dirname(fileURLToPath(import.meta.url))
const app = express()
const port = 3000;



app.use(bodyParser.urlencoded({extended: true}))
//////////////////////////////////
var password;
var userIsAuthorised = false;
function passwordAccess(req, res, next){
    password = req.body["password"];
    if(password === "enteraccess"){
        userIsAuthorised = true; 
    }


    next();

    
}

/////////////////////////////////////////////
app.use(passwordAccess);

app.get("/", (req, res) => {
 
    res.sendFile(__dirname + "/public/home.html")
   
   
})




app.post("/check", (req, res) => {
    

    
    if(userIsAuthorised){
        res.sendFile(__dirname + "/public/secrete.html")
    }else{
        res.sendFile(__dirname + "/public/home.html")
    }
   
}) 

app.listen(port , ()=> {
    console.log(`Server started on port ${port}`)
}) 
