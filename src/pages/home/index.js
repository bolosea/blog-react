import React, { Component } from "react";
import Card from "@/component/card";
import Social from "@/component/social";
import "./index.less";

export default class Home extends Component {
  render() {
    return (
      <div className="home">
        <div className="left">
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
        <div className="right">
          <Social />
        </div>
      </div>
    );
  }
}
