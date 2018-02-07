class YearMakeModelTrimTireSize{
  constructor(year, make, model, trim, tireSize, mfrPartNber){
    this.year = year;
    this.make = make;
    this.model = model;
    this.trim = trim;
    this.tireSize = tireSize;
    this.mfrPartNber = mfrPartNber;
  }

  setYear(year){
    this.year = year;
  }
  
  setMake(make){
    this.make = make;
  }
  
  setModel(model){
    this.model=model;
  }
  
  setTrim(trim){
    this.trim = trim;
  }
  
  setTireSize(tireSize){
    this.tireSize=tireSize;
  }

  getYear() {
    return this.year;
  }
  
  getMake(){
    return this.make;
  }
  
  getModel(){
    return this.model;
  }
  
  getTrim(){
    return this.trim;
  }
  
  getTireSize(){
    return this.tireSize;
  }
}

module.exports.YearMakeModelTrimTireSize = YearMakeModelTrimTireSize;