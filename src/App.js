import React, { Component } from "react";
import { connect } from "react-redux";

class App extends Component {
  increment = () => this.props.dispatch({ type: "increment" });
  decrement = () => this.props.dispatch({ type: "decrement" });
  reset = () => this.props.dispatch({ type: "reset" });

  render() {
    return (
      <div className="container has-text-centered has-background-light">
        <h1 className="is-large is-size-1 has-text-weight-bold has-text-primary">
          {this.props.state}
        </h1>
        <div className="columns ">
          <button
            className="button is-success is-large column is-5"
            onClick={this.increment}
          >
            <i className="fas fa-angle-up" />
          </button>
          <button
            className="button is-warning is-large column is-2"
            onClick={this.reset}
          >
            <i className="fas fa-redo" />
          </button>
          <button
            className="button is-danger is-large column is-5"
            onClick={this.decrement}
          >
            <i className="fas fa-angle-down" />
          </button>
        </div>
      </div>
    );
  }
}
function mapStateToProps(state) {
  return { state };
}
export default connect(mapStateToProps)(App);
