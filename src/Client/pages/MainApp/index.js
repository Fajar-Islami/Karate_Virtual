import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { ScrollToTop, RoutesMainApp } from "../../config";
import { Header, Footer } from "../../components";
const MainApp = () => {
  return (
    <Router>
      <ScrollToTop />
      {/* <Header /> */}
      <RoutesMainApp />
      <Footer />
    </Router>
  );
};

export default MainApp;
