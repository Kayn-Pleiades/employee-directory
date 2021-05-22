import React,{ Component } from "react";
import ProfileCard from "../ProfileCard/index";
import employees from "../employees.json";
import "./style.css"


class ShowAll extends Component {
    state = {
        employees
    };
    render() {
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
}

export default ShowAll;