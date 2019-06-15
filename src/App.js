import React from "react";
import PropTypes from "prop-types";
import SudokuGrid from "./components/SudokuGrid/SudokuGrid";
import "./App.css";

export class App extends React.PureComponent {
    constructor(props) {
        super(props);

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        const { toggleInputType } = this.props;
        toggleInputType();
    }

    render() {
        const sudokuContents = [
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
            "",
            "",
            "",
            "",
            ""
        ];
        return (
            <div className="app">
                <div className="header">
                    <button type="button" onClick={() => this.handleClick()}>
                        Big
                    </button>
                    <button type="button" onClick={() => this.handleClick()}>
                        Little
                    </button>
                </div>
                <SudokuGrid contents={sudokuContents} />
            </div>
        );
    }
}

App.propTypes = {
    toggleInputType: PropTypes.func.isRequired
};
