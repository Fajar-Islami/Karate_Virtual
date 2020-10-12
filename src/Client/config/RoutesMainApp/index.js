import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Home, Profile } from "../../pages";

const Routes = () => {
  return (
    <Switch>
      <Route path="/profile" exact>
        <Profile />
      </Route>
      <Route path="/home" exact>
        <Home />
      </Route>
      <Route path="/" exact>
        <Home />
      </Route>
    </Switch>
  );
};

export default Routes;
