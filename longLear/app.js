// basic Nodejs 

// let express = require('express');
// let app = express();

// // console.log("Hello World");

// // creating a path 
// absolutePath = __dirname + '/views/index.html';

// // making a get request here 
// app.get("/", (req, res)=>{
//     // send a message to the web
//     //res.send("Hello Express");
//     res.sendFile(absolutePath); // reading a file form path 

// })

/////

// access Path to static 

// let express = require('express');
// let app = express();

// // console.log("Hello World");
// const absolutePath = __dirname + '/views/index.html';

// // Serve static files from the "public" directory

// myStylePath=express.static(__dirname + '/public')
// app.use('/public',myStylePath);


// app.get("/", (req, res) => {
//     // res.send("Hello Express");
//     res.sendFile(absolutePath);
// })



//// to access an env file in nodejs 


// let express = require('express');
// let app = express();
// require('dotenv').config();
// const upperCase = process.env.MESSAGE_STYLE;
// console.log("MESSAGE_STYLE:", upperCase);

// // Serve static files from the "public" directory
// const absolutePath = __dirname + '/views/index.html';
// const myStylePath = express.static(__dirname + '/public');
// app.use('/public', myStylePath);

// // Route to serve index.html
// app.get("/", (req, res) => {
//     res.sendFile(absolutePath);
// });

// // Route to serve JSON based on environment variable
// app.get("/json", (req, res) => {
//     const message = "Hello json";
//     const msg = "HELLO JSON";
   
//     console.log(upperCase); // Corrected variable name

//     if (upperCase === "uppercase") {
//         res.json({
//             "message": msg
//         });
//     } else {
//         res.json({
//             "message": message
//         });
//     }
// });

// // Route to serve user information
// app.get("/user", (req, res) => {
//     res.json({
//         "message": "Hello Viewer",
//         "Name": "Paul Fidelis",
//         "Email": "bigfidelis@outlook.com",
//         "url": "https://akintundeweb.vercel.app/"
//     });
// });



/// using a custom logger 

// let express = require('express');
// let app = express();
// const logger = (req,res,next)=>{
//          console.log(`${req.method} ${req.path} - ${req.ip}`);
//          next();
//        }
// app.use(logger);




// require('dotenv').config();
// const upperCase = process.env.MESSAGE_STYLE;
// //console.log(upperCase);

// // console.log("Hello World");
// const absolutePath = __dirname + '/views/index.html';

// // Serve static files from the "public" directory

// myStylePath=express.static(__dirname + '/public')
// app.use('/public',myStylePath);






  

// app.get("/", (req, res) => {
//     // res.send("Hello Express");
//     res.sendFile(absolutePath);
// })



// app.get("/json",(req,res)=>{
//     let resultMessage="Hello json";
//     if (process.env.MESSAGE_STYLE==="uppercase"){
//       resultMessage=resultMessage.toUpperCase();
//     }
   
//     res.json({"message": resultMessage});
                             
//   });


///// chaining a middleware 




let express = require('express');
let app = express();
const logger = (req,res,next)=>{
         console.log(`${req.method} ${req.path} - ${req.ip}`);
         next();
       }
app.use(logger);




require('dotenv').config();
const upperCase = process.env.MESSAGE_STYLE;
//console.log(upperCase);

// console.log("Hello World");
const absolutePath = __dirname + '/views/index.html';

// Serve static files from the "public" directory

myStylePath=express.static(__dirname + '/public')
app.use('/public',myStylePath);





// routes 

app.get('/now', function(req, res, next) {
    req.time = new Date().toString()
    
    next();
  }, function(req, res) {
    res.json({"time": req.time});
  });
  
///////
app.get("/", (req, res) => {
    // res.send("Hello Express");
    res.sendFile(absolutePath);
})



app.get("/json",(req,res)=>{
    let resultMessage="Hello json";
    if (process.env.MESSAGE_STYLE==="uppercase"){
      resultMessage=resultMessage.toUpperCase();
    }
   
    res.json({"message": resultMessage});
                             
  });


////////////



// to get user input 

// this will be what the user lets say in inputed , ":" means params
app.get("/:word/echo", (req, res)=>{
    res.json({
        echo:req.params.word
    })
  })


  // this should be what will be output let say the user type ?first=firstname&last=lastname
  
// note query is "?", 
app.route("/name" ).get((req, res)=>{
    // req.query.first= "paul";
    // req.query.last = "fidelis"
    res.json({name:` ${req.query.first} ${req.query.last}` });
    
  })


module.exports = app;

