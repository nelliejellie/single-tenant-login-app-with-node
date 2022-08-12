// initialise express and morgan
const express = require("express");
const app = express();
const morgan = require("morgan");
const path = require("path");

const port = 3007;
app.use(morgan("dev"));

// set the front-end folder to serve public assets.
app.use(express.static('public'));

// set up our one route to the index.html file.
app.get('*', function (req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
  });

// Start the server.
app.listen(port);
console.log(`Listening on port ${port}...`);
console.log('Press CTRL+C to stop the web server...');