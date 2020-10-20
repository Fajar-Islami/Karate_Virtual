import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Dashboard, Pembayaran, Blank, DetailPembayaran } from "../../pages/Home/Content";
import { TabelBeregu, FormBeregu, FormPerorangan, TabelPerorangan } from "../../pages/Home/Peserta";

const RoutesHome = () => {
  return (
    <Switch>
      <Route path="/admin/blank" exact>
        <Blank />
      </Route>
      <Route path="/admin/pesertaberegu" exact>
        <TabelBeregu />
      </Route>
      <Route path="/admin/pesertaberegu/detailpeserta/:idKontingen/:id_anggota" exact>
        <FormBeregu />
      </Route>
      <Route path="/admin/pesertaperorangan" exact>
        <TabelPerorangan />
      </Route>
      <Route path="/admin/pesertaperorangan/detailpeserta/:id" exact>
        <FormPerorangan />
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
