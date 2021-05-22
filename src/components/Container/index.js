import React, { Component } from "react";
import ContentController from "../ContentController/index";
import ShowAll from "../ShowAll/index";

class Container extends Component {
    state = {
        controller: "Show All"
    };

    renderEmployees = () => {
        if (this.state.controller === "Show All") {
            return <ShowAll />;
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
