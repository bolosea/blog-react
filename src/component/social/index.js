import React, { Component } from "react";
import "./index.less";
import WX from "./wx.jpg";
import QQ from "./qq.jpg";

export default class Social extends Component {
  render() {
    return (
      <div className="social">
        <a href="#">
          <i className="iconfont icon-weibo" />
        </a>
        <a href="https://github.com/bolosea" target="_blank">
          <i className="iconfont icon-github-outline" />
        </a>
        <a href="#">
          <i className="iconfont icon-weixin" />
          <img className="wx" src={WX} />
        </a>
        <a href="#">
          <i className="iconfont icon-qq" />
          <img className="qq" src={QQ} />
        </a>
      </div>
    );
  }
}
