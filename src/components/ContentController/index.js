import React, { useState } from "react";
import Button from 'react-bootstrap/Button';
import Collapse from 'react-bootstrap/Collapse'
import Dropdown from 'react-bootstrap/Dropdown';

function ContentController(props) {
    const [open1, setOpen] = useState(false);
    const [open2, setOpen2] = useState(false);

    return (
        <div>
            <button type="button" class="btn btn-primary" onClick={props.handleControllerChange}>Show All</button>
            <Button
                onClick={() => setOpen(!open1)}
                aria-controls="filter"
                aria-expanded={open1}
            >
                Filter
            </Button>
            <Button
                onClick={() => setOpen2(!open2)}
                aria-controls="Sort"
                aria-expanded={open2}
            >
                Sort
            </Button>
            <Collapse in={open1}>
                <div id="filter">
                    <Dropdown>
                        <Dropdown.Toggle variant="success" id="dropdown-basic">
                            Gender
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                            <Dropdown.Item onClick={props.handleControllerChange}>Female</Dropdown.Item>
                            <Dropdown.Item onClick={props.handleControllerChange}>Male</Dropdown.Item>
                            <Dropdown.Item onClick={props.handleControllerChange}>Non-Binary</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </div>
            </Collapse>
            <Collapse in={open2}>
                <div id="sort">
                    <p> Sorting </p>
                </div>
            </Collapse>
        </div>
    )
}

export default ContentController;