import React from "react";
import { Switch, Route, Redirect} from "react-router-dom";
import Home from '@/pages/home'
import Java from "@/pages/java";
import NotMatch from "@/pages/notMatch";


export default ({match}) => {
  console.log('match',match)
  return (
    <div className="content">
      <Switch>
        <Route path="/app/home" component={Home} />
        <Route path="/app/backend/java" component={Java} />
        <Redirect from="/" to="/app/home" />
        <Route component={NotMatch} />

      </Switch>
    </div>
  );
};
