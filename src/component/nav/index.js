import React, { Component } from "react";
import { Link } from "react-router-dom";
import { withRouter } from "react-router-dom";
import axios from "axios";

import "./index.less";

export default withRouter(
  class Nav extends Component {
    state = {
      menus: [],
      currentActive: "/home"
    };
    async componentDidMount() {
      await this.fetchData();
      this.clickActice();
    }
    componentWillReceiveProps(nextProps){
      this.active(nextProps)
    }
    componentWillMount() {
      this.active(this.props)
    }
    //获取所有导航菜单
    fetchData = async () => {
      let res = await axios.get("/category/list");
      console.log("res", res);
      this.setState({
        menus: res.data.data
      });
    };
    active = (props) => {
      let path = props.location.pathname;
      console.log('path',path);
      if(path === '/'){
        return 
      }
      this.setState({
        currentActive: path
      });
    }
    clickActice = () => {
      let ul = document.querySelector(".nav ul");
      ul.addEventListener("click", function(e) {
        //移除ul下所有根子元素上的current类
        this.childNodes.forEach(li => li.classList.remove("current"));
        //给当前点击的li标签添加current类
        e.target.parentNode.classList.add("current");
      });
    };
    render() {
      return (
        <div className="nav">
          <ul>
            {this.state.menus.map(li => (
              <li
                className={this.state.currentActive.includes(li.url) ? "current" : ""}
                key={li.id}
              >
                <Link to={li.url}>{li.name}</Link>
                {li.children &&
                  li.children.map(child => (
                    <Link
                      key={child.id}
                      to={li.url + child.url}
                      className="child"
                    >
                      {child.name}
                    </Link>
                  ))}
              </li>
            ))}
          </ul>
        </div>
      );
    }
  }
);
