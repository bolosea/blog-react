import React from 'react'
import {BrowserRouter,Switch,Route,Redirect} from 'react-router-dom'

import App from '@/App'
import Home from '@/pages/home'

export default class Router extends React.Component{
  render(){
    return <BrowserRouter>
      {/* <Switch>
          <Route path='/' component={App}></Route>
      </Switch> */}
      <App>
       
      </App>
    </BrowserRouter>
  }
}