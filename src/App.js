import React, { Component } from "react";
import employees from "./employees.json";

class App extends Component {
  state = {
    employees
  };

  render() {
    return (
      <div class="container">
        <nav class="navbar navbar-light bg-light">
          <span class="navbar-brand mb-0 h1">Employee Directory</span>
        </nav>
        <div class="row">
          <div class="col">
            {this.state.employees.map(employee => (
              <p>
                {employee.name}
              </p>
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
