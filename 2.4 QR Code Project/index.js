
import inquirer from 'inquirer';

import qr from "qr-image"; 
import fs, { writeFile } from "fs";

// this import is due to module




inquirer
  .prompt([
    /* Pass your questions in here */
    {message: "Type in your URL ", name : "URL"},
  ])
  .then((answers) => {
    const url = answers.URL;
    var qr_svg = qr.image(url);
    qr_svg.pipe(fs.createWriteStream('qr_img.png'));
     
    fs.writeFile("URL.txt", url, (err)=> {
      if(err) throw err;
      console.log("The file has been saved ")
    });
   
  
    // Use user feedback for... whatever!!
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });