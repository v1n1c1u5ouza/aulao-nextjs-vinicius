import "modules/bootstrap/dist/css/bootstrap.min.css";
import "modules/font-awesome/css/font-awesome.min.css";
import "../templete/custom.css"

import React from "react";
import Menu from "../templete/menu";
import Routes from "./routes";

export default (props) => (
  <div className="conteiner">
    <Menu />
    <Routes />
  </div>
);
