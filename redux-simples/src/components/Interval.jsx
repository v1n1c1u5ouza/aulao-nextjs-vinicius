import "./Interval.css";
import React from "react";
import { connect } from "react-redux";

import Card from "./Card";
import { altMinNumber } from "../store/actions/numbers";
import { altMaxNumber } from "../store/actions/numbers";

function Interval(props) {
  const { min, max } = props;
  return (
    <Card title="Intevalo de Números" red>
      <div className="Interval">
        <span>
          <strong>Mínimo:</strong>
          <input type="number" value={min} 
          onChange={e => props.altMin(+e.target.value)} />
        </span>
        <span>
          <strong>Máximo:</strong>
          <input type="number" value={max} 
          onChange={e => props.altMax(+e.target.value)} />                  
        </span>
      </div>
    </Card>
  );
}

function mapStateToProps(state) {
  return {
    min: state.numbers.min,
    max: state.numbers.max,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    altMin(newNumber) {
      const action = altMinNumber(newNumber);
      dispatch(action);
    },
    altMax(newNumber) {
      const action = altMaxNumber(newNumber);
      dispatch(action);
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Interval);
