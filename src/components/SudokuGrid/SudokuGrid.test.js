import React from "react";
import { render } from "@testing-library/react";
import SudokuGrid from "./SudokuGrid";

function getProps(overrides) {
    return {
        contents: [],
        entryMethod: "pencilMarks",
        ...overrides
    };
}

describe("SudokuGrid", () => {
    it("renders without crashing", () => {
        expect(render(<SudokuGrid {...getProps()} />)).toBeDefined();
    });
});
