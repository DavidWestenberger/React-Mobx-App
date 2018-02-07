var oracledb = require('oracledb');
var dbConfig = require("../serverConfig/myNodeDBConfig.js");
var ymmtt = require("./dataModels/YearMakeModelTrimTireSize");
var ymmttCollection = require("./dataModels/yearMakeModelTrimTireSizeCollection");

const config = {
    user          : dbConfig.user,
    password      : dbConfig.password,
    connectString : dbConfig.connectString
  }
function getObjFromMap(){

}
function getTireData(){
  return new Promise(async function(resolve, reject ){
      let conn;
      try {
        conn = await oracledb.getConnection(config);
        console.log("connected to database");
        const results = await conn.execute("select distinct MODEL_YEAR, MAKE, MODEL, TRIM, TIRE_SIZE from TIRESIZE");
        //console.log(results);
        console.log("query executed");
        var ymmttColl = new ymmttCollection.yearMakeModelTrimTireSizeCollection();
        for(i in results.rows){
            //console.log(results.rows[i][0]);
            if(results.rows[i][0] >= 1999){
              var ymmttContainer = new ymmtt.YearMakeModelTrimTireSize();
              var currentRow = results.rows[i];
              ymmttContainer.setYear(currentRow[0]);
              ymmttContainer.setMake(currentRow[1]);
              ymmttContainer.setModel(currentRow[2]);
              if(currentRow[3] != null){
                 ymmttContainer.setTrim(currentRow[3]); 
              }
              else{
                ymmttContainer.setTrim("N/A"); 
              }
              ymmttContainer.setTireSize(currentRow[4]);
              ymmttColl.add(ymmttContainer);
            }
          }
          //console.log("results[i]: " + results[i]); 
        var ymmttJsonStr = JSON.stringify(ymmttColl.getYmmttObj())
        console.log("YMMTT JSON OBJECT: "+ ymmttJsonStr);    
        resolve(ymmttColl.getYmmttObj());
      } catch (err) {
        console.log('Ouch an Error occurred!', err);
        reject(err);
      } finally {
        if (conn) { // conn assignment worked, need to close
          console.log("Closing Connection");
          await conn.close();
          console.log("Connection Closed");
        }
      }
  })
}

module.exports.getTireData = getTireData;
