import React from 'react';
import { Link } from "react-router";
import { LOAD_YMMTT_DATA } from "./../reducers/constants";
import {connect} from 'react-redux';
import { fetchYmmttData, getVisibleYmmttData } from "../reducers/ymmtt";

class YearMakeModelHome extends React.Component {
    /* lifecycle */
  componentDidMount(){
     this.props = fetchYmmttData();
  }

  render() {

console.log('this.props => ', this.props);

    return(
      <div> 
        <div>
          <h1> New Page </h1>
          <form>
            <ul class="miniHeader">
              <div class="nowidth">Year</div>
              <select class = "style" id="yearSelect">
                <option value='' id="testDropDown">2018 </option>
                <option value='' id="testDropDown">2017 </option>
                <option value='' id="testDropDown">2016 </option>
                <option value='' id="testDropDown">2015 </option>
              </select>
            </ul>
          </form>
        </div>    
      </div>
    )
  }
}

export default connect(null,{fetchYmmttData})(YearMakeModelHome);


{/*<div>
          <form>
            <ul class="miniHeader">
              <div class="nowidth">Year</div>
              <select class = "style" id="yearSelect">
                <option value='' id="testDropDown">2018 </option>
                <option value='' id="testDropDown">2017 </option>
                <option value='' id="testDropDown">2016 </option>
                <option value='' id="testDropDown">2015 </option>
              </select>
            </ul>
            <ul class="miniHeader">
              <div class="nowidth">Make</div>
              <select class = "style" id="makeSelect">
                <option value=''>Buick</option>
                <option value=''>Chevy</option>
                <option value=''>Cadalac</option>
                <option value=''>GMC</option>
              </select>
            </ul>
            <ul class="miniHeader">
              <div class="nowidth">Model</div>
              <select class = "style" id="modelSelect">
                <option value=''>Model 1</option>
                <option value=''>Model 2</option>
                <option value=''>Model 3</option>
              </select>
            </ul>
            <ul class="miniHeader">
              <div class="nowidth">Trim</div>
                <select class = "style">
                  <option value=''>Trim 1</option>
                  <option value=''>Trim 2</option>
                  <option value=''>Trim 3</option>
                </select>
              </ul>
              <ul class="miniHeader">
                <div class="tireSizeLabelWidth">Tire Size</div>
                <select class = "ymmTireSize style" id="selectSize">
                  <option value=''>tire size 1</option>
                  <option value=''>tire size 2</option>
                  <option value=''>tire size 3</option>
                  <option value=''>tire size 4</option>
                </select>
                <button type="button" class="circle">?</button>
              </ul>
              <ul class="miniHeader">
                <div class="tireSizeLabelWidth">ZipCode</div>
                <form id="zipCodeForm" class="dealerForm">
                  <input type="text" id="inputZipCode" name="zipCodeInput" class="tpcTextBox"></input>
                </form>
              </ul>
              <button type="button"  class="rectangleLargeButtonImage yearMakeModelButton">Search Tires</button>
{              <button type="button"  class="rectangleButtonImage yearMakeModelButton">Search Tires</button>
              <button type="button" class="rectangleButtonImage">Search Tires</button>}
          </form>
        </div>}

*/}