const myApp = require('./app.js');

const port = process.env.PORT || 3000;
myApp.listen(port, () => {
  console.log(`Node is listening on port ${port}...`);
});