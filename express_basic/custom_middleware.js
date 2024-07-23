import express from "express"
import morgan from "morgan"

const app = express();
//app.use(morgan("tiny"));

// lets build out own middleware 

function logger(req, res, next){
    console.log(` this should send the method of ${req.method}`);
    console.log(`this should show us the url of ${req.url}`)
    next();

}
// we must make use of app.use to make use of the middleware you created and also inside the middleware we can make use of more than one or two or three as many you can think of 

app.use(logger, (req, res, next)=>{
    console.log(` this will run like a custom middleware ${req.method}`)
    next();
})
app.get("/", (req, res)=>{
    res.send("welcome to custom middleware")
})





app.listen(3000, ()=>{
    console.log("server started at port 3000")
})