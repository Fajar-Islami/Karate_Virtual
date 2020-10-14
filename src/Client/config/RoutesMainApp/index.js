import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Home, Profile } from "../../pages";
import { Dashboard, Pendaftaran, Pembayaran, DataPengguna, Bantuan } from "../../pages/Profile/Content";
const RoutesMainApp = () => {
  return (
    <Switch>
      <Route path="/profile/">
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

export default RoutesMainApp;
