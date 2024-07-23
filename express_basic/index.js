import express from "express" 

import {dirname } from "path"
import { fileURLToPath } from "url";
import bodyParser from "body-parser";

const __dirname = dirname(fileURLToPath(import.meta.url))
const app = express()
const port = 3000;

// app.get("/", (req, res) => {
//     //console.log(req.rawHeaders)
//     res.send("<h1>Hello Word</h1>")
// })
// app.get("/about", (req, res) =>{
//     res.send("<h1>This ia about me</h1>")
// })
// app.get("/contact", (req, res) =>{
//     res.send("<h1> Call me on 09072210193</h1>")


// })
app.use(bodyParser.urlencoded({extended: true}))
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
    console.log(req.body)
})
app.listen(port , ()=> {
    console.log(`Server started on port ${port}`)
}) 
