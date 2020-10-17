import React from "react";
import { Switch, Route } from "react-router-dom";
import { Dashboard, DataPengguna, Bantuan } from "../../pages/Profile/Content";
import { FormBeregu, FormPerorangan, TabelPerorangan, TabelBeregu } from "../../pages/Profile/Pendaftaran";
import { PembayaranAktif, RiwayatPembayaran, Invoice } from "../../pages/Profile/Pembayaran";
import FormDataPengguna from "../../pages/Profile/DataPengguna/FormDataPengguna";
const RoutesProfile = () => {
  return (
    <Switch>
      <Route path="/profile/dashboard" exact>
        <Dashboard />
      </Route>
      <Route path="/profile/tabelberegu" exact>
        <TabelBeregu />
      </Route>
      <Route path="/profile/formberegu" exact>
        <FormBeregu />
      </Route>
      <Route path="/profile/tabelerorangan" exact>
        <TabelPerorangan />
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
      <Route path="/profile/riwayatpembayaran/invoice" exact>
        <Invoice />
      </Route>
      <Route path="/profile/datapengguna" exact>
        <DataPengguna />
      </Route>
      <Route path="/profile/formdatapengguna" exact>
        <FormDataPengguna />
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
