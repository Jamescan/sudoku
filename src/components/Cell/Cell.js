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
        this.updateCellValue = this.updateCellValue.bind(this);
    }

    // Update the "big number" in the cell
    updateCellValue(value) {
        // TODO: This might be an ok use-case for redux-thunk conditional dispatching
        // https://github.com/reduxjs/redux-thunk#motivation
        const { addCellValue, index, isInSolveMode, updateCellValue } = this.props;

        if (isInSolveMode) {
            updateCellValue(index, value);
        } else {
            addCellValue(index, value);
        }
    }

    handleKeyDown(event) {
        const {
            index,
            isFixed,
            isUsingPencilMarks,
            toggleEntryMethod,
            updateCellValue,
            updateCellPencilMark
        } = this.props;
        const validDigitInputs = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
        const userInput = event.key;

        if (userInput === "Delete" && !isFixed) {
            updateCellValue(index, "");
        } else if (validDigitInputs.includes(userInput)) {
            if (!isUsingPencilMarks) {
                updateCellValue(index, userInput);
            }
            else {
                updateCellPencilMark(index, userInput)
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
            // the sudokuindex value.
            // https://bit.ly/2Js4qMV
            const cells = document.querySelectorAll("[sudokuindex]");
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
            // the sudokuindex value.
            // https://bit.ly/2Js4qMV
            const cells = document.querySelectorAll("[sudokuindex]");
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
            // the sudokuindex value.
            // https://bit.ly/2Js4qMV
            const cells = document.querySelectorAll("[sudokuindex]");
            const cellToWhichToFocus = cells[index - 9];
            cellToWhichToFocus && cellToWhichToFocus.focus();
        }
        // down arrow key
        else if (event.keyCode === 40) {
            // querySelectorAll will return matching element nodes in document order,
            // so we can just use the index of the resulting list. We need not verify
            // the sudokuindex value.
            // https://bit.ly/2Js4qMV
            const cells = document.querySelectorAll("[sudokuindex]");
            const cellToWhichToFocus = cells[index + 9];
            cellToWhichToFocus && cellToWhichToFocus.focus();
        }
    }

    handleMouseClick(number) {
        const { index, isUsingPencilMarks, updateCellPencilMark } = this.props;
        if (isUsingPencilMarks) {
            //this.updatePencilMarks(number);
            updateCellPencilMark(index, number);
        } else {
            this.updateCellValue(number);
        }
    }

    render() {
        const {
            index,
            isFixed,
            isInSolveMode,
            isUsingPencilMarks,
            pencilMarks,
            shouldHighlightError,
            shouldShowPencilMarks,
            value
        } = this.props;

        const shouldShowBigNumberOnHover = !isUsingPencilMarks;
        const cellHasValue = value !== "";

        const cellStyles = clsx(styles.cell, {
            [styles.error]: shouldHighlightError,
            [styles.new]: !isFixed && isInSolveMode
        });

        return (
            // Users should be able to tab to each cell and input its value from the keyboard
            <div
                className={cellStyles}
                onKeyDown={this.handleKeyDown}
                tabIndex="0"
                sudokuindex={index}
            >
                {cellHasValue ? (
                    <div className={styles.valueWrapper}>{value}</div>
                ) : (
                    <HoverGrid
                        handleClick={clickedCellValue => this.handleMouseClick(clickedCellValue)}
                        pencilMarks={shouldShowPencilMarks ? pencilMarks : []}
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
    pencilMarks: [],
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
    pencilMarks: PropTypes.arrayOf(PropTypes.string),
    shouldHighlightError: PropTypes.bool,
    shouldShowPencilMarks: PropTypes.bool,
    updateCellValue: PropTypes.func.isRequired,
    value: PropTypes.string
};
