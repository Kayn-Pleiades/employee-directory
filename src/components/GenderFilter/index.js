import React from "react";
import Dropdown from 'react-bootstrap/Dropdown';

function GenderFilter() {
    return (
        <Dropdown>
            <Dropdown.Toggle variant="success" id="dropdown-basic">
                Gender
            </Dropdown.Toggle>

            <Dropdown.Menu>
                <Dropdown.Item href="#/action-1">Female</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Male</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Non-Binary</Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>
    )
}

export default GenderFilter;