import "../css/main.css";
import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route } from 'react-router-dom'
/*import TodoStore from "./TodoStore";
import TodoList from "./TodoList";*/

import Header from "./Components/Layouts/Header";
import Layout from "./Components/Layouts/Layout";

import Archives from "./Components/pages/Archives"
import Featured from "./Components/pages/Featured";
import Settings from "./Components/pages/Settings";



// import {Router, Route, IndexRoute, hashHistory} from "react-router";

const app = document.getElementById("app")

ReactDOM.render(
  <div>
  <BrowserRouter>
    <switch>
      <Route exact path="/" component={Layout}></Route>
      <Route path='/Featured' component={Featured}></Route>
      <Route path='/Archives' component={Archives}></Route>
      <Route path='/Settings' component={Settings}></Route>
    </switch>
  </BrowserRouter>
  </div>,
app);

