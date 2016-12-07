var express = require('express');
var app = express();
const PORT = process.env.PORT || 3000;

app.get('/', function (req, res, next) {
  res.send({'response': 'Hello Mate!'});
  next();
});



app.listen( PORT, function () {
  console.log(`Listening on port: ${PORT}`);
})
