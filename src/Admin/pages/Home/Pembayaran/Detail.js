import React from "react";
import { useParams } from "react-router-dom";

import { data } from "./data.js";
import { Invoice, BuktiTransfer, StatusBayar } from "../../../components/index";
import { Box } from "@material-ui/core";
import { ScrollToTop } from "../../../config/index.js";

const Detail = () => {
  const { id } = useParams();
  const angka = (tes) => {
    return parseInt(tes, 10);
  };
  const cari = (idC) => {
    return data.filter((item) => {
      return item.id === idC;
    });
  };

  const dataRows = cari(angka(id));
  console.log(id);
  console.log(dataRows);
  // console.log(dataRows.buktiBayar[id]);
  return (
    <div>
      <h1> Halaman ID {id} </h1>
      {/* <p> {dataRows.id} </p> */}
      <ScrollToTop />
      <StatusBayar status={dataRows[0].ket} />
      <Invoice data={dataRows[0]} />

      {dataRows.ket === 1 && (
        <Box>
          <BuktiTransfer data={dataRows[0].buktiBayar} />
        </Box>
      )}
    </div>
  );
};

export default Detail;
