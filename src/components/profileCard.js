import React from "react";

function profileCard(props) {
    return (
        <div class="card mt-5">
            <div class="card-body">
                <h5 class="card-title text-center">{props.name}</h5>
                <ul class="list-group">
                    <li class="list-group-item"><i class="bi bi-envelope-fill"></i>{props.email}</li>
                    <li class="list-group-item"><i class="bi bi-telephone-fill"></i>{props.phone}</li>
                </ul>
            </div>
        </div>
    )
}

export default profileCard;