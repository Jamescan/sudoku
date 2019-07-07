import React from "react";
import SudokuGrid from "./components/SudokuGrid/SudokuGridContainer";
import "./App.css";
import SettingsSelection from "./components/SettingsSelection/SettingsSelectionContainer";
import SidebarSettings from "./components/SidebarSettings/SidebarSettingsContainer";

export function App() {
    return (
        <div className="app">
            <SettingsSelection />
            <SudokuGrid />
            <SidebarSettings />
        </div>
    );
}
