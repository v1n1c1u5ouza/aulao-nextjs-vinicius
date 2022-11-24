import "../common/templetes/dependencies";
import React from "react";

import Header from "../common/templetes/header";
import SideBar from "../common/templetes/sideBar";
import Footer from "../common/templetes/footer";

export default (props) => (
  <div className="wrapper">
    <Header />
    <SideBar />
    <div className="content-wrapper">
      <h1>Conteudo</h1>
    </div>
    <Footer />
  </div>
);
