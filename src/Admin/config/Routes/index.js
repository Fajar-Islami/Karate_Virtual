import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Home, Masuk } from "../../pages";

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route path="/admin/masuk" exact>
          <Masuk />
        </Route>
        <Route path="/admin">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
};

export default Routes;
