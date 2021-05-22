import React, { Component } from "react";
import ProfileCard from "./components/profileCard";
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
            <div class="card-columns">
              {this.state.employees.map(employee => (
                <ProfileCard
                  name={employee.name}
                  email={employee.email}
                  phone={employee.phone}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
