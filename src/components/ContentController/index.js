import React from "react";
import ToggleButtons from "../ToggleButtons/index";

function ContentController() {
    return (
        <div>
            <button type="button" class="btn btn-primary">Show All</button>
            <ToggleButtons />
        </div>
    )
}

export default ContentController;