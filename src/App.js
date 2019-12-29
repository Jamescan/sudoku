import React from "react";
import SudokuGrid from "./components/SudokuGrid/SudokuGridContainer";
import "./App.css";
import PrimarySettings from "./components/PrimarySettings/PrimarySettingsContainer";
import SidebarSettings from "./components/SidebarSettings/SidebarSettingsContainer";

export function App() {
    return (
        <main className="app">
            <PrimarySettings />
            <SudokuGrid />
            <SidebarSettings />
        </main>
    );
}
