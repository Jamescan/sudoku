import React from "react";
import PropTypes from "prop-types";
import "./SudokuGrid.css";
import Cell from "../Cell/Cell";

// TODO: Investigate using css table instead of css grid for easier styling.
// TODO: Overflow issues when grid's size is reduced.

function SudokuGrid({ contents, entryMethod }) {
    return (
        <div className="grid">
            {/* Cells are never re-ordered and don't have a reasonable unique ID */}
            {/* eslint-disable react/no-array-index-key */}
            {contents.map((cellValue, index) => (
                <Cell key={index} value={cellValue} entryMethod={entryMethod} />
            ))}
            {/* eslint-enable */}
        </div>
    );
}

SudokuGrid.defaultProps = {
    contents: [],
    entryMethod: "pencilMarks"
};

SudokuGrid.propTypes = {
    contents: PropTypes.arrayOf(PropTypes.string),
    entryMethod: PropTypes.oneOf(["pencilMarks", "numbers"])
};

export default SudokuGrid;
