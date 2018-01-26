/* express */
var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');

var serverApp = express();

/*var logger = function(req, res, next){
  console.log("logging...");
  next();
}

serverApp.use(logger);*/

//body parser middleware - writes documentation
serverApp.use(bodyParser.json());
serverApp.use(bodyParser.urlencoded({extended: false}))

//set static path 
serverApp.use(express.static(path.join(__dirname, "staticPublic")));

serverApp.get("/FireTire", function(req,res){
  res.send("Hello to Fire Tire!");
});

serverApp.get("/", function(req,res){
  res.send("Hello");
});

serverApp.listen(3001, function(){
  console.log('Server started on Port 3001...')
})


