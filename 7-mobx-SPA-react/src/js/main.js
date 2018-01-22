import "../css/main.css";
import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, HashRouter, Route } from 'react-router-dom'

import TodoStore from "./Components/todo/TodoStore";
import TodoList from "./Components/todo/TodoList";

import Header from "./Components/Layouts/Header";
import Layout from "./Components/Layouts/Layout";

import Archives from "./Components/pages/Archives"
import Home from "./Components/pages/Home";
import Featured from "./Components/pages/Featured";
import Settings from "./Components/pages/Settings";



// import {Router, Route, IndexRoute, hashHistory} from "react-router";

const app = document.getElementById("app")

ReactDOM.render(
  <div>
    <HashRouter>
      <div>
      <Route render={(props) => {
        const locationObject = props.location.pathname;
        // console.log(props.location.pathname)
        return (
          <Layout pathName={locationObject}></Layout>
        )
      }} />
      <switch>
        <Route exact path="/" component={Home}></Route>
        <Route path='/Featured' component={Featured}></Route>
        <Route path="/Archives/:name" component={Archives}></Route>
        <Route path='/Settings' component={Settings}></Route>
        <div>
          <Route path="/Todo" render={(props) => {
            return( 
              <TodoList store={TodoStore}> </TodoList> 
            ) }} />
        </div>
      </switch>
      </div>
    </HashRouter>
  </div>,
app);

