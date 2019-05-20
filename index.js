console.log(123)
import './index.less'
document.querySelector('#app').innerText = 'test'
class Test {
  say(){
    console.log(456);
  }
}
new Test().say()
let {a,b} = {
  a: 'bl',
  b: 14
}
console.log(a,b)

let [d,e] = [1,2]
console.log(d,e)
import React,{Component} from 'react'
import ReactDom from 'react-dom'
class Hello extends Component{
  render(){
    return <h1>hello</h1>
  }
}
ReactDom.render(<Hello></Hello>,document.getElementById('app'))
