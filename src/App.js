import React from "react";
import EntryMethodButtonGroup from "./components/EntryMethodButtonGroup/EntryMethodButtonGroupContainer";
import SolutionCheckingGroup from "./components/SolutionCheckingGroup/SolutionCheckingGroupContainer";
import SudokuGrid from "./components/SudokuGrid/SudokuGridContainer";
import "./App.css";

// TODO: SudokuGrid should be connected to store and get cells directly
export function App() {
    return (
        <div className="app">
            <div className="header">
                <SolutionCheckingGroup />
                <EntryMethodButtonGroup />
                {/* TODO: "Pencil Marks" group with buttons for
                "Clear All" and "Highlight Incorrect" */}
            </div>
            <SudokuGrid />
        </div>
    );
}
