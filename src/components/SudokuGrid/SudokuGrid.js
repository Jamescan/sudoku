import React from "react";
import PropTypes from "prop-types";
import "./SudokuGrid.css";
import Cell from "../Cell/CellContainer";

// TODO: Investigate using css table instead of css grid for easier styling.
// TODO: Overflow issues when grid's size is reduced.

function SudokuGrid({ contents }) {
    return (
        <div className="grid">
            {/* Cells are never re-ordered and don't have a reasonable unique ID */}
            {/* eslint-disable react/no-array-index-key */}
            {contents.map((cellValue, index) => (
                <Cell key={index} index={index} value={cellValue} />
            ))}
            {/* eslint-enable */}
        </div>
    );
}

SudokuGrid.defaultProps = {
    contents: []
};

SudokuGrid.propTypes = {
    contents: PropTypes.arrayOf(PropTypes.string)
};

export default SudokuGrid;
