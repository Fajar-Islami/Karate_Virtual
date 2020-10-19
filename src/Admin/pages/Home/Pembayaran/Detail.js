import React from "react";
import { useParams } from "react-router-dom";

import { data } from "./data.js";
import { Invoice, BuktiTransfer, StatusBayar } from "../../../components/index";
import { Box } from "@material-ui/core";
import { ScrollToTop } from "../../../config/index.js";

const Detail = () => {
  let { id } = useParams();
  const dataRows = data[id];
  // console.log(dataRows.buktiBayar[id]);
  return (
    <div>
      <h1> Halaman ID {id} </h1>
      {/* <p> {dataRows.id} </p> */}
      <ScrollToTop />
      <StatusBayar status={dataRows.ket} />
      <Invoice data={dataRows} />

      {dataRows.ket === 1 && (
        <Box>
          <BuktiTransfer data={dataRows.buktiBayar[id]} />
        </Box>
      )}
    </div>
  );
};

export default Detail;
