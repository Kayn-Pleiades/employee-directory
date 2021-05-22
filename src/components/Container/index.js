import React, { Component } from "react";
import ContentController from "../ContentController/index";
import ProfileCard from "../ProfileCard/index";
import employees from "../employees.json";
import "./style.css"

class Container extends Component {
    state = {
        currentController: "Show All",
        employees
    };

    handleControllerChange = controller => {
        this.setState({ currentController: controller });
    };

    renderFilter(filter) {
        return (
            <div class="card-columns">
                {this.state.employees.filter(person => person.gender === filter ).map(employee => (
                    <ProfileCard
                        photo={employee.photo}
                        name={employee.name}
                        email={employee.email}
                        phone={employee.phone}
                    />
                ))}
            </div>
        )
    }

    renderEmployees = () => {
        if (this.state.currentController === "Show All") {
            return(
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
            )
        }
        else if (this.state.currentController === "Female" || this.state.currentController === "Male" || this.state.currentController === "Non-Binary") {
            this.renderFilter(this.state.currentController);
        }
        else {
            return(
                <p>oops</p>
            )
        }
    };

    render() {
        return (
            <div class="container" >
                <nav class="navbar navbar-light bg-light">
                    <span class="navbar-brand mb-0 h1">Employee Directory</span>
                </nav>
                <div class="row">
                    <div class="col">
                        <ContentController
                            currentController={this.state.currentController}  
                            handleControllerChange={this.handleControllerChange}                           
                        />
                    </div>
                </div>
                <div class="row">
                    <div class="col">
                        {this.renderEmployees()}
                    </div>
                </div>
            </div>
        );
    }
}

export default Container;
