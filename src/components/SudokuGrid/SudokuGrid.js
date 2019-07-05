import React from "react";
import PropTypes from "prop-types";
import styles from "./SudokuGrid.module.css";
import Cell from "../Cell/CellContainer";

// TODO: Investigate using css table instead of css grid for easier styling.
// TODO: Overflow issues when grid's size is reduced.

export function SudokuGrid({ cells }) {
    return (
        <div className={styles.grid}>
            {/* Cells are never re-ordered and don't have a reasonable unique ID */}
            {/* eslint-disable react/no-array-index-key */}
            {cells.map((cell, index) => {
                const { value } = cell;
                return <Cell key={index} index={index} value={value} />;
            })}
            {/* eslint-enable */}
        </div>
    );
}

SudokuGrid.defaultProps = {
    cells: Array(81).fill(""),
    isInSolveMode: false
};

SudokuGrid.propTypes = {
    cells: PropTypes.arrayOf(PropTypes.string),
    isInSolveMode: PropTypes.bool
};
