import React, { Component } from "react";
import "./index.less";
export default class Card extends Component {

  render() {
    return (
      <div className="card">
        <div className="title">
          <span className="type">
            APP
            <i />
          </span>
          <h3>
            【原创文章】详解IOS Swift中wkwebview与javascript交互的几个问题
          </h3>
        </div>
        <div className="info">
          <img
            src="http://www.baishujun.com/wp-content/themes/yusi1.0/timthumb.php?src=http://www.baishujun.com/wp-content/uploads/2019/05/052619_0317_APP1.jpg&h=123&w=200&q=90&zc=1&ct=1"
            alt=""
          />
          <div className="ins">
            <span className="note">
              买种子上百蔬。2000多种蔬菜种子产品已经上架农科百蔬APP，详情请关注：
              https://www.nkbaishu.com/down/index.htm 苹果和安卓商店下载
              手机扫描页面 瓜船 船头
              买种子上百蔬。2000多种蔬菜种子产品已经上架农科百蔬APP，详情请关注：
              https://www.nkbaishu.com/down/index.htm 苹果和安卓商店下载
              手机扫描页面 瓜船 船头
              买种子上百蔬。2000多种蔬菜种子产品已经上架农科百蔬APP，详情请关注：
              https://www.nkbaishu.com/down/index.htm 苹果和安卓商店下载
              手机扫描页面 瓜船 船头
              买种子上百蔬。2000多种蔬菜种子产品已经上架农科百蔬APP，详情请关注：
              https://www.nkbaishu.com/down/index.htm 苹果和安卓商店下载
              手机扫描页面 瓜船 船头
            </span>
            <p className="icon">
              <span>
                <i className="iconfont icon-iconfontgerenzhongxin" />
                百蔬君
              </span>
              <span>
                <i className="iconfont icon-shijian" />
                一天前
              </span>
              <span>
                <i className="iconfont icon-iconset0207" />
                6°
              </span>
              <span>
                <i className="iconfont iconfont icon-weibiaoti-" />
                1喜欢
              </span>
            </p>
          </div>
        </div>
      </div>
    );
  }
}
