import React, { Component } from 'react'
import './index.less'

export default class ToTop extends Component {
  state = {
    visiable: 'none'
  }

  componentDidMount(){
    console.log(window)
    window.addEventListener('scroll',(e)=>{
      let scrollTop = document.documentElement.scrollTop
      console.log('scrollTop',scrollTop)
      let visiable = this.state.visiable
        if(scrollTop>=215){
          this.setState({
            visiable: 'block'
          })
        }else{
          this.setState({
            visiable: 'none'
          })
        }
      
    })
  }

  getScrollTop = () => {
    return  document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop;
  }
  toTop = () => {
    
    
   let timeId =  setInterval(() => {
      let scrollTop = this.getScrollTop()
      window.scrollTo(0,scrollTop - 50)
      console.log('scrollTop',scrollTop)
      if(scrollTop<=0){
        clearInterval(timeId)
      }
    }, 50);
    
  }

  render() {
    return (
      <div className='totop' style={{display: this.state.visiable}}>
        <button onClick={this.toTop}><i className='iconfont icon-jiantou-shang'></i></button>
      </div>
    )
  }
}
