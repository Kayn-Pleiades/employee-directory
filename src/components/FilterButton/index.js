import React, { useState } from "react";
import Button from 'react-bootstrap/Button';
import Collapse from 'react-bootstrap/Collapse'
import GenderFilter from "../GenderFilter/index";


function FilterButton() {
    const [open, setOpen] = useState(false);
    return (
        <>
            <Button
                onClick={() => setOpen(!open)}
                aria-controls="example-collapse-text"
                aria-expanded={open}
            >
                click
            </Button>
            <Collapse in={open}>
                <div id="example-collapse-text">
                    <GenderFilter />
                </div>
            </Collapse>
        </>
    )
}

export default FilterButton;