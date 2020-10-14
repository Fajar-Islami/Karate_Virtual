import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { ScrollToTop, RoutesMainApp, RoutesProfile } from "../../config";
import { Navbar, Footer } from "../../components";
const MainApp = () => {
  return (
    <Router>
      <ScrollToTop />
      {/* <Navbar /> */}
      <RoutesMainApp />
      {/* <RoutesProfile /> */}
      {/* <Footer /> */}
    </Router>
  );
};

export default MainApp;
