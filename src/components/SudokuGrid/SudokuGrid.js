import React from "react";
import PropTypes from "prop-types";
import "./SudokuGrid.css";
import Cell from "../Cell/CellContainer";

// TODO: Investigate using css table instead of css grid for easier styling.
// TODO: Overflow issues when grid's size is reduced.

export function SudokuGrid({ cells }) {
    return (
        <div className="grid">
            {/* Cells are never re-ordered and don't have a reasonable unique ID */}
            {/* eslint-disable react/no-array-index-key */}
            {cells.map((cellValue, index) => (
                <Cell key={index} index={index} value={cellValue} />
            ))}
            {/* eslint-enable */}
        </div>
    );
}

SudokuGrid.defaultProps = {
    cells: []
};

SudokuGrid.propTypes = {
    cells: PropTypes.arrayOf(PropTypes.string)
};
