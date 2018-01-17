/* Styles */
import logo from "../../../resources/logo.svg";
import "../../../css/Header.css"
import React from "react"
import { BrowserRouter, NavLink, Route } from 'react-router-dom'
import Archives from "../pages/Archives"
import Featured from "../pages/Featured";
import Settings from "../pages/Settings";
import Layout from "./Layout";


export default class Header extends React.Component{
	render(){
		return(
      <div className="App">
        <div className="App-header wrapper">
          <nav className="navbar navbar-default">
            <div className="container-fluid">
              <div className="navbar-header">
                <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
                  <span className="sr-only">Toggle navigation</span>
                  <span className="icon-bar"></span>
                  <span className="icon-bar"></span>
                  <span className="icon-bar"></span>
                </button>
                <a className="navbar-brand" href="#">Mobx SPA</a>
              </div>
              <div id="navbar" className="navbar-collapse collapse">
                <ul className="nav navbar-nav">
                  <li className="active"><NavLink to="/" href="#">Home</NavLink></li>
                  <li><NavLink to="/Featured">Featured</NavLink></li>
                  <li><NavLink to="/Archives">Archives</NavLink></li>
                  <li><NavLink to="/Settings">Settings</NavLink></li>
                </ul>
              </div>
            </div>
          </nav>
          <img src={logo}className="App-logo"alt="logo" />
          <h1 className="App-title">
            Welcome to David's First React and Mobx Single Page Application
          </h1>
        </div> 
      </div>
    );
	}         	
}