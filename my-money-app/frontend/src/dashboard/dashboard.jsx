import React, { Component } from "react";

import ContenttHeader from "../common/templetes/contentHeader";
import Content from "../common/templetes/content";
import ValueBox from "../common/widget/valueBox";
import Row from "../common/layout/row";

class Dashboard extends Component {
  render() {
    return (
      <div>
        <ContenttHeader title="Dashboard" small="Versão 1.0" />
        <Content>
          <Row>
            <ValueBox
              cols="12 4"
              color="green"
              icon="bank"
              value="R$ 10"
              text="Total de Créditos"
            />
            <ValueBox
              cols="12 4"
              color="red"
              icon="credit-card"
              value="R$ 10"
              text="Total de Débitos"
            />
            <ValueBox
              cols="12 4"
              color="blue"
              icon="monezy"
              value="R$ 0"
              text="Valor Consilidado"
            />
          </Row>
        </Content>
      </div>
    );
  }
}

export default Dashboard;
