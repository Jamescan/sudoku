import React from "react";
import PropTypes from "prop-types";
import EntryMethodButtonGroup from "./components/EntryMethodButtonGroup/EntryMethodButtonGroupContainer";
import SolutionCheckingGroup from "./components/SolutionCheckingGroup/SolutionCheckingGroupContainer";
import SudokuGrid from "./components/SudokuGrid/SudokuGrid";
import "./App.css";

export function App({ cells }) {
    return (
        <div className="app">
            <div className="header">
                <SolutionCheckingGroup />
                <EntryMethodButtonGroup />
            </div>
            <SudokuGrid contents={cells} />
        </div>
    );
}

App.defaultProps = {
    cells: Array(81).fill("")
};

App.propTypes = {
    cells: PropTypes.arrayOf(PropTypes.string)
};
