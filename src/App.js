import React from "react";
import { Routes } from "./Client/config";
import { RoutesAdmin } from "./Admin/config";

function App() {
  return (
    <>
      <RoutesAdmin />
      <Routes />
    </>
  );
}

export default App;
