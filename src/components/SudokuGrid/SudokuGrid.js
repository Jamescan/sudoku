import React from "react";
import "./SudokuGrid.css";
import Cell from "../Cell/Cell";

// TODO: Investigate using css table instead of css grid for easier styling.
// TODO: Overflow issues when grid's size is reduced.

// TODO: grid should take a prop "contents" which defaults to an empty array of 81 strings.
function SudokuGrid({ entryMethod }) {
    const cellData = [
        "1",
        "2",
        "3",
        "4",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        ""
    ];

    return (
        <div className="grid">
            {cellData.map((cellDatum, index) => {
                const isFixedValue = cellDatum !== ""; // initial cell values are fixed.
                return (
                    <Cell
                        key={index}
                        value={cellDatum}
                        isFixedValue={isFixedValue}
                        entryMethod={entryMethod}
                    />
                );
            })}
        </div>
    );
}

export default SudokuGrid;
