const myApp = require('./app.js');
try {
    mongoose = require("mongoose");
  } catch (e) {
    console.log(e);
  }
  const fs = require("fs");

const port = process.env.PORT || 3000;
myApp.listen(port, () => {
  console.log(`Node is listening on port ${port}...`);
});