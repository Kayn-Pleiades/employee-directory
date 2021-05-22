import React from "react";

function ContentController() {
    return (
        <div>
            <button type="button" class="btn btn-primary">Primary</button>
            <button class="btn btn-primary" type="button" data-toggle="collapse" data-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
                Button with data-target
            </button>
            <div class="collapse" id="collapseExample">
                <p>stuff goes here</p>
            </div>
        </div>
    )
}

export default ContentController;