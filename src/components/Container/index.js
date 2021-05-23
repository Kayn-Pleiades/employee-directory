import React, { Component } from "react";
import ContentController from "../ContentController/index";
import ProfileCard from "../ProfileCard/index";
import employees from "../employees.json";
import "./style.css"

class Container extends Component {
    state = {
        currentController: "Show All",
        currentSort: "id",
        employees
    };

    handleControllerChange = controller => {
        this.setState({ currentController: controller });
    };

    handleSort = sort => {
        this.setState({ currentSort: sort });
    }

    GetSortOrder(prop) {    
        return function(a, b) {    
            if (a[prop] > b[prop]) {    
                return 1;    
            } else if (a[prop] < b[prop]) {    
                return -1;    
            }    
            return 0;    
        }    
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
            return(
                <div class="card-columns">
                    {this.state.employees.filter(person => person.gender === this.state.currentController ).map(employee => (
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
        else {
            return(
                <p>oops</p>
            )
        }
    };

    sortEmployees = () => {
        if (this.state.currentSort === "id") {
            employees.sort(this.GetSortOrder("id"));
        }
        else if (this.state.currentSort === "First") {
            employees.sort(this.GetSortOrder("name"));
        }
    }

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
                            currentSort={this.state.currentSort}
                            handleSort={this.handleSort}                           
                        />
                    </div>
                </div>
                <div class="row">
                    <div class="col">
                        {this.sortEmployees()}
                        {this.renderEmployees()}
                    </div>
                </div>
            </div>
        );
    }
}

export default Container;
