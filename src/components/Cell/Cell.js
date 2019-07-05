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
        this.updatePencilMarks = this.updatePencilMarks.bind(this);

        const { value } = this.props;

        this.state = {
            pencilMarks: []
        };
    }

    updatePencilMarks(number) {
        const { pencilMarks } = this.state;
        const updatedPencilMarks = pencilMarks.includes(number)
            ? pencilMarks.filter(pencilMark => pencilMark !== number)
            : [...pencilMarks, number];

        this.setState({
            pencilMarks: updatedPencilMarks
        });
    }

    // Update the "big number" in the cell
    updateCellValue(value) {
        const { index, updateCell } = this.props;
        updateCell(index, value);
    }

    handleKeyDown(event) {
        const { isFixed } = this.props;

        if (event.key === "Delete" && !isFixed) {
            const { index, updateCell } = this.props;
            updateCell(index, "");
        }
    }

    handleMouseClick(number) {
        const { isUsingPencilMarks } = this.props;
        if (isUsingPencilMarks) {
            this.updatePencilMarks(number);
        } else {
            this.updateCellValue(number);
        }
    }

    render() {
        const { isUsingPencilMarks, shouldHighlightError, shouldShowPencilMarks, value } = this.props;
        const { pencilMarks } = this.state;

        const shouldShowBigNumberOnHover = !isUsingPencilMarks;
        const cellHasValue = value !== "";

        const cellStyles = clsx(styles.cell, { [styles.error]: shouldHighlightError });

        return (
            <div className={cellStyles} onKeyDown={this.handleKeyDown} role="button" tabIndex="0">
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
    isUsingPencilMarks: true,
    shouldHighlightError: false,
    shouldShowPencilMarks: true,
    value: null
};

Cell.propTypes = {
    index: PropTypes.number.isRequired,
    isFixed: PropTypes.bool,
    isUsingPencilMarks: PropTypes.bool,
    shouldHighlightError: PropTypes.bool,
    shouldShowPencilMarks: PropTypes.bool,
    updateCell: PropTypes.func.isRequired,
    value: PropTypes.string
};
