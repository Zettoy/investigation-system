import React from "react";

import {
  BrowserRouter,
  Route,
  Switch
} from "react-router-dom";

import Nav from "../components/nav";
import Home from "../components/home";
import About from "../components/about";
import ScrollToTop from "../util/ScrollToTop";

export default () => (
  <BrowserRouter>
    <ScrollToTop/>
    <Nav/>
    <Switch>
      <Route exact path="/" component={Home}/>
      <Route exact path="/about" component={About}/>
    </Switch>
  </BrowserRouter>
);