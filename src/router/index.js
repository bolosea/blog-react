import React from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";

import App from "@/App";
import Home from "@/pages/home";
import NotMatch from "@/pages/notMatch";
import Login from "@/pages/login";

export default class Router extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={App} />
          <Route path="/app" component={App} />
          <Route path="/login" component={Login} />
          <Route component={NotMatch} />
        </Switch>
      </BrowserRouter>
    );
  }
}
