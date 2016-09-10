const express = require('express');
const http = require('http');
const bodyParser = require('body-parser')
const morgan = require('morgan');
const PORT = process.env.PORT || 3000;
const app = express();
const server = http.createServer(app);
//Middleware
app.use(morgan('combined'));
app.use(bodyParser.json({ type: '*/*' }));
//Starting the server
server.listen(PORT, function(){
  console.log(`Listening on PORT: 3000`);
})
