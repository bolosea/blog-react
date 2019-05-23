import React from "react";
import { Switch, Route, Redirect} from "react-router-dom";
import Home from '@/pages/home'
import Java from "@/pages/java";

export default () => {
  return (
    <div className="content">
      <Switch>
        <Route path="/home" component={Home} />
        <Route path="/backend/java" component={Java} />
        <Redirect to='/home'/>
      </Switch>
    </div>
  );
};
