import React, { Component } from "react";

import ContenttHeader from "../common/templetes/contentHeader";
import Content from "../common/templetes/content";

class Dashboard extends Component {
  render() {
    return (
      <div>
        <ContenttHeader title="Dashboard" small="Versão 1.0" />
        <Content>Dashboard</Content>
      </div>
    );
  }
}

export default Dashboard