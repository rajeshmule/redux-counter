import React, { Component } from "react";

class App extends Component {
  render() {
    return (
      <div className="container has-text-centered has-background-light">
        <h1 className="is-large is-size-1 has-text-weight-bold has-text-primary">
          0
        </h1>
        <div className="columns ">
          <div className="button is-success is-large column is-5">
            <i class="fas fa-angle-up" />
          </div>
          <button className="button is-warning is-large column is-2">
            <i class="fas fa-redo" />
          </button>
          <button className="button is-danger is-large column is-5">
            <i class="fas fa-angle-down" />
          </button>
        </div>
      </div>
    );
  }
}

export default App;
