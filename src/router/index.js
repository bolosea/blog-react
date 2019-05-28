import React from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";

import App from "@/App";

export default class Router extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <App></App>
      </BrowserRouter>
    );
  }
}
