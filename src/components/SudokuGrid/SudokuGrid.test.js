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

    it("renders pre-defined values in cells if provided", () => {
        const props = getProps({ contents: ["1", "5", "9", "2", "", "", ""] });

        const { getByText, queryByText } = render(<SudokuGrid {...props} />);

        // We must specify the css selector because right now we're secretly rendering
        // all the numbers in each cell (invisible to the user) to implement hovering logic.
        expect(getByText("1", { selector: ".valueWrapper" })).toBeDefined();
        expect(queryByText("3", { selector: ".valueWrapper" })).toBeNull();
    });
});
