import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Dashboard, Pendaftaran, Pembayaran, DataPengguna, Bantuan } from "../../pages/Profile/Content";

const RoutesProfile = () => {
  return (
    <Switch>
      <Route path="/profile/dashboard" exact>
        <Dashboard />
      </Route>
      <Route path="/profile/pendaftaran" exact>
        <Pendaftaran />
      </Route>
      <Route path="/profile/pembayaran" exact>
        <Pembayaran />
      </Route>
      <Route path="/profile/datapengguna" exact>
        <DataPengguna />
      </Route>
      <Route path="/profile/bantuan" exact>
        <Bantuan />
      </Route>
      <Route path="/profile/" exact>
        <Dashboard />
      </Route>
    </Switch>
  );
};

export default RoutesProfile;
