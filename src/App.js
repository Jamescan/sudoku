import React from "react";
import SudokuGrid from "./components/SudokuGrid/SudokuGridContainer";
import "./App.css";
import SettingsSelection from "./components/SettingsSelection/SettingsSelectionContainer";

export function App() {
    return (
        <div className="app">
            <SettingsSelection />
            <SudokuGrid />
        </div>
    );
}
