var ymmtt = require("./YearMakeModelTrimTireSize");

var yearMakeModelTrimTireSizeList;
var updateMap;
var noDupeYMMTTObj;

class yearMakeModelTrimTireSizeCollection{ 
  constructor(){
    yearMakeModelTrimTireSizeList =  [];
    updateMap = true;
    noDupeYMMTTObj = {};
  }

  add(yearMakeModelTrimTireSize){
    yearMakeModelTrimTireSizeList.push(yearMakeModelTrimTireSize);
    updateMap = true;
  }

  getYmmttObj(){
    if(updateMap){
/*      console.log("about to update the map, ymmtt contents: "+ JSON.stringify(yearMakeModelTrimTireSizeMap));
*/      this.updateMap();
    }
    return noDupeYMMTTObj;
  }

  updateMap(){
    if(updateMap){
      noDupeYMMTTObj = {};
      for(var i in yearMakeModelTrimTireSizeList){
        this.addToYmmttObj(yearMakeModelTrimTireSizeList[i]);
      }
    }
    updateMap = false;
  }

  addToYmmttObj(ymmtt){
    //make the ymmtt object here to be stringifyed No use of map.
    var year = ymmtt.getYear();
    var make = ymmtt.getMake();
    var model = ymmtt.getModel();
    var trim = ymmtt.getTrim();
    var tireSize =ymmtt.getTireSize();

    if(noDupeYMMTTObj[year]){
      console.log("inside Year If: ");
      if(noDupeYMMTTObj[year][make]){
        console.log("inside make If: ");
        if(noDupeYMMTTObj[year][make].model){
          console.log("inside model If: ");
          if(noDupeYMMTTObj[year][make][model].trim){
            console.log("inside trim If: ");
            var tireSizes = noDupeYMMTTObj[year][make][model][trim];
            if(!tireSizes.includes(tireSize)){
              tireSizes.push(tireSize);
            } 
          }
          else{
            //add trim add tiresize
            noDupeYMMTTObj[year][make][model][trim].push(tireSize);
          } 
        } 
        else{
          //add model add trim add tiresize
          noDupeYMMTTObj[year][make][model] = {[trim]: []}
          noDupeYMMTTObj[year][make][model][trim].push(tireSize);
        }
      }
      else{ 
      //add make add model add trim add tiresize
      noDupeYMMTTObj[year][make] = {[model] : {}}
      noDupeYMMTTObj[year][make][model] = {[trim]: []}
      noDupeYMMTTObj[year][make][model][trim].push(tireSize);
      }
    }
    else{
      //add year add make add model add trim add tiresize
      noDupeYMMTTObj[year] = { [make]: {} };
      noDupeYMMTTObj[year][make] = {[model] : {}};
      noDupeYMMTTObj[year][make][model] = {[trim]: []};
      noDupeYMMTTObj[year][make][model][trim].push(tireSize);
    }
  }
}

module.exports.yearMakeModelTrimTireSizeCollection = yearMakeModelTrimTireSizeCollection;

 