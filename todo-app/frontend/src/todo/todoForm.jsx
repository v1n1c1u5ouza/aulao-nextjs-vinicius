import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import Grid from "../templete/grids";
import IconButton from "../templete/iconButton";
import { changeDescription } from "./todoActions";

function TodoForm(props) {
  const keyHanler = (e) => {
    if (e.key === "Enter") {
      e.shiftKey ? props.handleSearch() : props.handleAdd();
    } else if (e.key === "Escape") {
      props.handleClear();
    }
  };

  return (
    <div role="form" className="todoForm">
      <Grid cols="12 9 10">
        <input
          id="description"
          className="form-control"
          placeholder="Adicione uma tarefa"
          onChange={props.changeDescription}
          onKeyUp={keyHanler}
          value={props.description}
        />
      </Grid>
      <Grid cols="12 3 2">
        <IconButton
          style="primary"
          icon="plus"
          onClick={props.handleAdd}
        ></IconButton>
        <IconButton
          style="info"
          icon="search"
          onClick={props.handleSearch}
        ></IconButton>
        <IconButton
          style="default"
          icon="close"
          onClick={props.handleClear}
        ></IconButton>
      </Grid>
    </div>
  );
}

const mapStateToProps = (state) => ({ description: state.todo.description });
const mapDispatchToProps = (dispatch) =>
  bindActionCreators({ changeDescription }, dispatch);
export default connect(mapStateToProps, mapDispatchToProps)(TodoForm);
