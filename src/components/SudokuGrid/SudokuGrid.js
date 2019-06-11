import React from "react";
import "./SudokuGrid.css";
import Cell from "../Cell/Cell";

// TODO: Investigate using css table instead of css grid for easier styling.
// TODO: Overflow issues when grid's size is reduced.

function SudokuGrid({ contents, entryMethod }) {
    return (
        <div className="grid">
            {contents.map((cellValue, index) => {
                const isFixedValue = cellValue !== ""; // initial cell values are fixed.
                return (
                    <Cell
                        key={index}
                        value={cellValue}
                        isFixedValue={isFixedValue}
                        entryMethod={entryMethod}
                    />
                );
            })}
        </div>
    );
}

export default SudokuGrid;
