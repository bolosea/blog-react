import React from "react";
import { Switch, Route, Redirect} from "react-router-dom";
import Home from '@/pages/home'
import Java from "@/pages/java";
import NotMatch from '@/pages/notMatch'


export default ({match}) => {
  return (
    <div className="content">
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/home" component={Home} />
        <Route path="/backend/java" component={Java} />
        <Route component={NotMatch}></Route>
      </Switch>
    </div>
  );
};
