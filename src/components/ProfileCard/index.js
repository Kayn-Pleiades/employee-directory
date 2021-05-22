import React from "react";
import { EnvelopeFill } from 'react-bootstrap-icons';
import { TelephoneFill } from 'react-bootstrap-icons';
import "./style.css";

function profileCard(props) {
    return (
        <div class="card">
            <div className="img-container">
                <img class="card-img-top rounded-circle border border-light" src={props.photo} alt="Employee"></img>
            </div>
            <div class="card-body">
                <h5 class="card-title text-center">{props.name}</h5>
                <ul class="list-group">
                    <li class="list-group-item"><EnvelopeFill></EnvelopeFill> {props.email}</li>
                    <li class="list-group-item"><TelephoneFill></TelephoneFill> {props.phone}</li>
                </ul>
            </div>
        </div>
    )
}

export default profileCard;