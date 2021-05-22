import React, { useState } from "react";
import Button from 'react-bootstrap/Button';
import Collapse from 'react-bootstrap/Collapse'
import GenderFilter from "../GenderFilter/index";


function ToggleButton() {
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
                    <GenderFilter />
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