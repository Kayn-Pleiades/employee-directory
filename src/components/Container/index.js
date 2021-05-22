import React, { Component } from "react";
import ContentController from "../ContentController/index";
import ShowAll from "../ShowAll/index";

class Container extends Component {
    state = {
        controller: {}
    };

    handleControllerChange = event => {
        event.preventDefault();
        
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
                            value={this.state.controller}
                            handleControllerChange={this.handleControllerChange}
                        />
                    </div>
                </div>
                <div class="row">
                    <div class="col">
                        <ShowAll />
                    </div>
                </div>
            </div>
        );
    }
}

export default Container;
