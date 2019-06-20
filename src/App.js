import React from "react";
import EntryMethodButtonGroup from "./components/EntryMethodButtonGroup/EntryMethodButtonGroupContainer";
import SolutionCheckingGroup from "./components/SolutionCheckingGroup/SolutionCheckingGroupContainer";
import SudokuGrid from "./components/SudokuGrid/SudokuGridContainer";
import {MenuItem} from "./components/MenuItem/MenuItem";
import "./App.css";

export function App() {
    return (
        <div className="app">
            <div className="header">
                {/* Maybe a header component that is connected to grab all the mapDispatchToProps garbage? */}
                <MenuItem title="Highlight Mistakes?">
                </MenuItem>

                <SolutionCheckingGroup />
                <EntryMethodButtonGroup />
                {/* TODO: "Pencil Marks" group with buttons for
                "Clear All" and "Highlight Incorrect" */}
            </div>
            <SudokuGrid />
        </div>
    );
}
