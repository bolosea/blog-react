import React, { Component } from "react";
import Header from "@/component/header/";
import Nav from "@/component/nav";
import Content from "./content";

export default class App extends Component {
  render() {
    return (
      <div className="app">
        <Header />
        <Nav />
        <Content {...this.props}/>
      </div>
    );
  }
}
