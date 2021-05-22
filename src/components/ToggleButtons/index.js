import React, { useState } from "react";
import Button from 'react-bootstrap/Button';
import Collapse from 'react-bootstrap/Collapse'
import Dropdown from 'react-bootstrap/Dropdown';


function ToggleButton(props) {
    const [open1, setOpen] = useState(false);
    const [open2, setOpen2] = useState(false);

    return (
        <>
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
                            <Dropdown.Item onClick={props.girlsOnly}>Female</Dropdown.Item>
                            <Dropdown.Item href="#/action-2">Male</Dropdown.Item>
                            <Dropdown.Item href="#/action-3">Non-Binary</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </div>
            </Collapse>
            <Collapse in={open2}>
                <div id="sort">
                    <p> Sorting </p>
                </div>
            </Collapse>
        </>
    )
}

export default ToggleButton;