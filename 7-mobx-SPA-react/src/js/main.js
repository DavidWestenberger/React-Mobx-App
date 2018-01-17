import "../css/main.css";
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route,  } from 'react-router-dom'
import { IndexRoute, hashHistory } from "react-router";
import TodoStore from "./TodoStore";
import TodoList from "./TodoList";

import Header from "./Components/Layouts/Header";
import Layout from "./Components/Layouts/Layout";

import Archives from "./Components/pages/Archives"
import Featured from "./Components/pages/Featured";
import Settings from "./Components/pages/Settings";



// import {Router, Route, IndexRoute, hashHistory} from "react-router";

const app = document.getElementById("app")

ReactDOM.render(
  <BrowserRouter>
    <Route path="/" component={Layout}>
      <IndexRoute component={Featured}></IndexRoute>
      <Route path="archives(/:article)" name="archives" component={Archives}></Route>
      <Route path="settings" name="settings" component={Settings}></Route>
    </Route>
  </BrowserRouter>,
app);

