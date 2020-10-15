import React from "react";
import { Switch, Route } from "react-router-dom";
import { Dashboard, DataPengguna, Bantuan } from "../../pages/Profile/Content";
import { FormBeregu, FormPerorangan } from "../../pages/Profile/Pendaftaran";
import { PembayaranAktif, RiwayatPembayaran } from "../../pages/Profile/Pembayaran";
const RoutesProfile = () => {
  return (
    <Switch>
      <Route path="/profile/dashboard" exact>
        <Dashboard />
      </Route>
      <Route path="/profile/tabelberegu" exact>
        <FormBeregu />
      </Route>
      <Route path="/profile/formberegu" exact>
        <FormBeregu />
      </Route>
      <Route path="/profile/tabelerorangan" exact>
        <FormPerorangan />
      </Route>
      <Route path="/profile/formperorangan" exact>
        <FormPerorangan />
      </Route>
      <Route path="/profile/pembayaranaktif" exact>
        <PembayaranAktif />
      </Route>
      <Route path="/profile/riwayatpembayaran" exact>
        <RiwayatPembayaran />
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
