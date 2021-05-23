import React, { useState } from "react";
import Button from 'react-bootstrap/Button';
import Collapse from 'react-bootstrap/Collapse'
import Dropdown from 'react-bootstrap/Dropdown';

function ContentController(props) {
    const [open1, setOpen] = useState(false);

    return (
        <div>
            <button type="button" class="btn btn-primary" onClick={() => props.handleControllerChange("Show All")} id={props.currentController === "Show All"}>Show All</button>
            <Button
                onClick={() => setOpen(!open1)}
                aria-controls="filter"
                aria-expanded={open1}
            >
                Filter
            </Button>
            <Dropdown>
                <Dropdown.Toggle variant="success" id="dropdown-basic">
                    Sort
                </Dropdown.Toggle>

                <Dropdown.Menu>
                    <Dropdown.Item onClick={() => props.handleSort("First")} id={props.currentSort === "First"}>By Name</Dropdown.Item>
                    <Dropdown.Item onClick={() => props.handleSort("id")} id={props.currentSort === "id"}>Un-Sort</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
            <Collapse in={open1}>
                <div id="filter">
                    <Dropdown>
                        <Dropdown.Toggle variant="success" id="dropdown-basic">
                            Gender
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                            <Dropdown.Item onClick={() => props.handleControllerChange("Female")} id={props.currentController === "Female"}>Female</Dropdown.Item>
                            <Dropdown.Item onClick={() => props.handleControllerChange("Male")} id={props.currentController === "Male"}>Male</Dropdown.Item>
                            <Dropdown.Item onClick={() => props.handleControllerChange("Non-Binary")} id={props.currentController === "Non-Binary"}>Non-Binary</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </div>
            </Collapse>
        </div>
    )
}

export default ContentController;