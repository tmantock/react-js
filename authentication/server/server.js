const express = require('express');
const http = require('http');
const bodyParser = require('body-parser')
const morgan = require('morgan');
const mongoose = require('mongoose');
const config = require('./config');
const PORT = process.env.PORT || 3000;
const app = express();
const server = http.createServer(app);
const router = require('./router');
//DB setup
console.log(config.location);
mongoose.connect(config.location);
//Middleware
app.use(morgan('combined'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


//Starting the server
router(app);
server.listen(PORT, function(){
  console.log(`Listening on PORT: ${PORT}`);
});
