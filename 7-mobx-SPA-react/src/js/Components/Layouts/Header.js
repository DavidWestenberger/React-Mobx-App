/* Styles */
import logo from "../../../resources/logo.svg";
import "../../../css/Header.css"
import { IndexLink, Link } from "react-router";
import React from "react"

export default class Header extends React.Component{
	render(){
		return(
      <div>
      <div className="App">
  			<header className="App-header col-lg-12">
          <img src={logo}
            className="App-logo"
            alt="logo" />
        	<h1 className="App-title">
           	Welcome to David's First React and Mobx Single Page Application
        	</h1>
        </header>
      </div>
      </div>
    );
	}         	
}