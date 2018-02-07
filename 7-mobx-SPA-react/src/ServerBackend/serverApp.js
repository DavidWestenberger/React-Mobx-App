/* express */
var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var serverApp = express();
var oracledb = require("oracledb");
var tireSizeData = require("./getTireSizeTableData");
var dbConfig = require("../serverConfig/myNodeDBConfig.js");
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

var person = {
  name:"Jeff",
  age:30
}
// console.log("Whats inside getTireSizeTableData file: \n" + tireSizeData);

serverApp.get("/FireTire", async function(req,res){
  let data
  try{
    await oracledb.createPool(dbConfig);
    data = await tireSizeData.getTireData();
    res.json(data)
   } catch( err ) {
    console.log("ops error occurred", err);
  }
});

serverApp.get("/", function(req,res){
  res.send("Hello");
});

serverApp.listen(3001, function(){
  console.log('Server started on Port 3001...')
})


