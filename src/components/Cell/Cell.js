import React from "react";
import PropTypes from "prop-types";
import clsx from "clsx";
import styles from "./Cell.module.css";
import HoverGrid from "../HoverGrid/HoverGrid";

// TODO: Accessibility concerns with onClicks on divs, etc.
export class Cell extends React.PureComponent {
    constructor(props) {
        super(props);

        this.handleKeyDown = this.handleKeyDown.bind(this);
        this.handleMouseClick = this.handleMouseClick.bind(this);
        this.updatePencilMarks = this.updatePencilMarks.bind(this);

        this.state = {
            //pencilMarks: []
            pencilMarks: {
                central: [],
                corner: []
            }
        };
    }

    updatePencilMarks(number, type) {
        const pencilMarks = this.state.pencilMarks[type];
        const updatedPencilMarks = pencilMarks.includes(number)
            ? pencilMarks.filter(pencilMark => pencilMark !== number)
            : [...pencilMarks, number];

        this.setState({
            pencilMarks: {
                ...this.state.pencilMarks,
                [type]: updatedPencilMarks
            }
        });
    }



    handleKeyDown(event) {
        const {
            index,
            isFixed,
            isUsingPencilMarks,
            toggleEntryMethod,
            updateCellValue
        } = this.props;
        const { pencilMarks } = this.state;
        const validDigitInputs = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
        const userInput = event.key;

        if (userInput === "Delete" && !isFixed) {
            updateCellValue(index, "");
        } else if (validDigitInputs.includes(userInput)) {
            if (!isUsingPencilMarks) {
                updateCellValue(index, userInput);
            }

            // TODO: clean this mess up
            else {
                const index = pencilMarks.indexOf(userInput);
                if (index === -1) {
                    this.setState({
                        pencilMarks: [...pencilMarks, userInput]
                    });
                } else {
                    this.setState({
                        pencilMarks: [
                            ...pencilMarks.slice(0, index),
                            ...pencilMarks.slice(index + 1)
                        ]
                    });
                }
            }
        }
        // TODO: Probably should have a more elegant implementation of keyboard shortcuts
        else if (userInput === "q") {
            toggleEntryMethod();
        }

        // right arrow key
        else if (event.keyCode === 39) {
            // querySelectorAll will return matching element nodes in document order,
            // so we can just use the index of the resulting list. We need not verify
            // the sudokuIndex value.
            // https://bit.ly/2Js4qMV
            const cells = document.querySelectorAll("[sudokuIndex]");
            const cellToWhichToFocus = cells[index + 1];

            // Don't wrap around the grid from column 9 to column 1.
            if (index % 9 !== 8) {
                cellToWhichToFocus && cellToWhichToFocus.focus();
            }
        }
        // left arrow key
        else if (event.keyCode === 37) {
            // querySelectorAll will return matching element nodes in document order,
            // so we can just use the index of the resulting list. We need not verify
            // the sudokuIndex value.
            // https://bit.ly/2Js4qMV
            const cells = document.querySelectorAll("[sudokuIndex]");
            const cellToWhichToFocus = cells[index - 1];

            // Don't wrap around the grid from column 1 to column 9.
            if (index % 9 !== 0) {
                cellToWhichToFocus && cellToWhichToFocus.focus();
            }
        }
        // up arrow key
        else if (event.keyCode === 38) {
            // querySelectorAll will return matching element nodes in document order,
            // so we can just use the index of the resulting list. We need not verify
            // the sudokuIndex value.
            // https://bit.ly/2Js4qMV
            const cells = document.querySelectorAll("[sudokuIndex]");
            const cellToWhichToFocus = cells[index - 9];
            cellToWhichToFocus && cellToWhichToFocus.focus();
        }
        // down arrow key
        else if (event.keyCode === 40) {
            // querySelectorAll will return matching element nodes in document order,
            // so we can just use the index of the resulting list. We need not verify
            // the sudokuIndex value.
            // https://bit.ly/2Js4qMV
            const cells = document.querySelectorAll("[sudokuIndex]");
            const cellToWhichToFocus = cells[index + 9];
            cellToWhichToFocus && cellToWhichToFocus.focus();
        }
    }

    // TODO: Change isUsingPencilMarks to currentNotationMethod (oneOf("centralPencilMarks, cornerPencilMarks, bigNumbers"))
    handleMouseClick(number) {
        const { addCellValue, currentNotation, index, isInSolveMode, isUsingPencilMarks, updateCellValue } = this.props;

        if (currentNotation === "cornerPencilMarks") {
            this.updatePencilMarks(number, "corner");
        } 
        else if (currentNotation === "centralPencilMarks") {
            this.updatePencilMarks(number, "central");
        }
        // TODO: This might be an ok use-case for redux-thunk conditional dispatching
        // https://github.com/reduxjs/redux-thunk#motivation
        else if (isInSolveMode) {
            updateCellValue(index, number);
        } else {
            addCellValue(index, number);
        }
    }

    render() {
        const {
            currentNotation,
            index,
            isFixed,
            isInSolveMode,
            //isUsingPencilMarks,
            shouldHighlightError,
            shouldShowPencilMarks,
            value
        } = this.props;
        const { pencilMarks } = this.state;
        const isUsingPencilMarks = currentNotation === "centralPencilMarks" || currentNotation === "cornerPencilMarks";
        const shouldShowBigNumberOnHover = !isUsingPencilMarks;
        const cellHasValue = value !== "";

        const cellStyles = clsx(styles.cell, {
            [styles.error]: shouldHighlightError,
            [styles.new]: !isFixed && isInSolveMode
        });

        // TODO: types of entry methods should be constants, not hardcoded strings everywhere
        // TODO: Where am I going to handle displaying centralPencilMarks?

        return (
            // Users should be able to tab to each cell and input its value from the keyboard
            <div
                className={cellStyles}
                onKeyDown={this.handleKeyDown}
                tabIndex="0"
                sudokuIndex={index}
            >
                {cellHasValue ? (
                    <div className={styles.valueWrapper}>{value}</div>
                ) : (
                    <HoverGrid
                        handleClick={clickedCellValue => this.handleMouseClick(clickedCellValue)}
                        pencilMarks={shouldShowPencilMarks ? pencilMarks.corner : []}
                        shouldShowBigNumberOnHover={shouldShowBigNumberOnHover}
                        shouldShowPencilMarks={shouldShowPencilMarks}
                    />
                )}
            </div>
        );
    }
}

Cell.defaultProps = {
    isFixed: false, // false if cell value can be deleted
    isInSolveMode: false,
    isUsingPencilMarks: true,
    shouldHighlightError: false,
    shouldShowPencilMarks: true,
    value: null
};

Cell.propTypes = {
    addCellValue: PropTypes.func.isRequired,
    index: PropTypes.number.isRequired,
    isFixed: PropTypes.bool,
    isInSolveMode: PropTypes.bool,
    isUsingPencilMarks: PropTypes.bool,
    shouldHighlightError: PropTypes.bool,
    shouldShowPencilMarks: PropTypes.bool,
    updateCellValue: PropTypes.func.isRequired,
    value: PropTypes.string
};
