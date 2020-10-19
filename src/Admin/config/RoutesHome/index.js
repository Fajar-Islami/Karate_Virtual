import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Dashboard, Pembayaran, Blank, Peserta, DetailPembayaran, DetailPeserta } from "../../pages/Home/Content";

const RoutesHome = () => {
  return (
    <Switch>
      <Route path="/admin/blank" exact>
        <Blank />
      </Route>
      <Route path="/admin/peserta" exact>
        <Peserta />
      </Route>
      <Route path="/admin/peserta/detailpeserta/:id" exact>
        <DetailPeserta />
      </Route>
      <Route path="/admin/pembayaran" exact>
        <Pembayaran />
      </Route>
      <Route path="/admin/pembayaran/detailpembayaran/:id" exact>
        <DetailPembayaran />
      </Route>
      <Route path="/admin/dashboard" exact>
        <Dashboard />
      </Route>
      <Route path="/admin/">
        <Dashboard />
      </Route>
    </Switch>
  );
};

export default RoutesHome;
