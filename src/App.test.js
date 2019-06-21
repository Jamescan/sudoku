import React from "react";
import { Provider } from "react-redux";
import { createStore } from "redux";
import { render } from "@testing-library/react";
import { sudokuApp } from "./redux";
import { App } from "./App";

function renderWithRedux(ui, { initialState, store = createStore(reducer, initialState) } = {}) {
    return {
        ...render(<Provider store={store}>{ui}</Provider>),
        // adding `store` to the returned utilities to allow us
        // to reference it in our tests (just try to avoid using
        // this to test implementation details).
        store
    };
}

describe("App", () => {
    it("renders without crashing", () => {
        const store = createStore(sudokuApp);

        expect(renderWithRedux(<App />, { store })).toBeDefined();
    });
});
