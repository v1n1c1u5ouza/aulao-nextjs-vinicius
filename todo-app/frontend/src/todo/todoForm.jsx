import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import Grid from "../templete/grids";
import IconButton from "../templete/iconButton";
import { changeDescription, search } from "./todoActions";

class TodoForm extends Component {
  constructor(props) {
    super(props);
    this.keyHanler = this.keyHanler.bind(this);
  }
  componentWillUnmount() {
    this.props.search;
  }

  keyHanler (e) {
    if (e.key === "Enter") {
      e.shiftKey ? this.props.handleSearch() : this.props.handleAdd();
    } else if (e.key === "Escape") {
      props.handleClear();
    }
  };

  render() {
    return (
      <div role="form" className="todoForm">
        <Grid cols="12 9 10">
          <input
            id="description"
            className="form-control"
            placeholder="Adicione uma tarefa"
            onChange={this.props.changeDescription}
            onKeyUp={this.keyHanler}
            value={this.props.description}
          />
        </Grid>
        <Grid cols="12 3 2">
          <IconButton
            style="primary"
            icon="plus"
            onClick={this.props.handleAdd}
          ></IconButton>
          <IconButton
            style="info"
            icon="search"
            onClick={this.props.handleSearch}
          ></IconButton>
          <IconButton
            style="default"
            icon="close"
            onClick={this.props.handleClear}
          ></IconButton>
        </Grid>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({ description: state.todo.description });
const mapDispatchToProps = (dispatch) =>
  bindActionCreators({ changeDescription, search }, dispatch);
export default connect(mapStateToProps, mapDispatchToProps)(TodoForm);
