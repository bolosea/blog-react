import React from 'react'
import {BrowserRouter,Switch,Route} from 'react-router-dom'

import App from '@/app'

export default class Router extends React.Component{
  render(){
    return <BrowserRouter>
      <Switch>
        <Route path='/' component={App}></Route>
      </Switch>
    </BrowserRouter>
  }
}