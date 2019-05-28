import React, { Component } from "react";
import Header from "@/component/header/";
import Nav from "@/component/nav";
import Content from "./content";
import Tip from '@/component/tip'

export default class App extends Component {
  render() {
    return (
      <div className="app">
        <Header />
        <Nav />
        <div className="container" style={{maxWidth:'1226px',margin: '0 auto'}}>
          <Tip/>
          <Content {...this.props}/>
        </div>
      </div>
    );
  }
}
