import "../common/templetes/dependencies";
import React from "react";

import Header from "../common/templetes/header";
import SideBar from "../common/templetes/sideBar";
import Footer from "../common/templetes/footer";
import Routes from "./routes";

export default (props) => (
  <div className="wrapper">
    <Header />
    <SideBar />
    <div className="content-wrapper">
      <Routes />
    </div>
    <Footer />
  </div>
);
