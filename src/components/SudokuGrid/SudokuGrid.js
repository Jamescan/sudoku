import React from "react";
import PropTypes from "prop-types";
import styles from "./SudokuGrid.module.css";
import Cell from "../Cell/CellContainer";

// TODO: Investigate using css table instead of css grid for easier styling.
// TODO: Overflow issues when grid's size is reduced.

// TODO: BUG - Non-original cells should be able to be deleted in Solve mode.
// will probably in the future want the ability to reset a puzzle to it's original state,
// so will probably need cells in redux store to keep track of initial value and current value

export function SudokuGrid({ cells, isInSolveMode }) {
    return (
        <div className={styles.grid}>
            {/* Cells are never re-ordered and don't have a reasonable unique ID */}
            {/* eslint-disable react/no-array-index-key */}
            {cells.map((cell, index) => {
                const { value } = cell;
                return <Cell key={index} index={index} value={value} isFixed={isInSolveMode} />;
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
