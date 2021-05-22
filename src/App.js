import React, { Component } from "react";
import ProfileCard from "./components/ProfileCard/index";
import employees from "./employees.json";
import "./App.css";

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
                  photo={employee.photo}
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
