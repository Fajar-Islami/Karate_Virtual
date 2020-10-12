import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { MainApp, SignIn, Registration } from "../../pages";

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route path="/signin" exact>
          <SignIn />
        </Route>
        <Route path="/registration" exact>
          <Registration />
        </Route>
        <Route path="/">
          <MainApp />
        </Route>
      </Switch>
    </Router>
  );
};

export default Routes;
