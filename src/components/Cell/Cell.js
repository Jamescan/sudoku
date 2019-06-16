import React from "react";
import PropTypes from "prop-types";
import "./Cell.css";
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
        const isFixedValue = !!value;

        this.state = {
            isFixedValue,
            pencilMarks: [],
            value: value || "" // the "big number" in the cell, if any
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
    updateCellValue(number) {
        const { value: cellValue } = this.state;
        const newCellValue = cellValue === number ? null : number;

        this.setState({
            value: newCellValue
        });
    }

    handleKeyDown(event) {
        const { isFixedValue } = this.state;

        if (event.key === "Delete" && !isFixedValue) {
            this.setState({
                value: ""
            });
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
        const { isUsingPencilMarks } = this.props;
        const { pencilMarks, value } = this.state;

        const shouldShowBigNumberOnHover = !isUsingPencilMarks;
        const cellHasValue = value !== "";

        return (
            <div className="cell" onKeyDown={this.handleKeyDown} role="button" tabIndex="0">
                {cellHasValue ? (
                    <div className="valueWrapper">{value}</div>
                ) : (
                    <HoverGrid
                        handleClick={clickedCellValue => this.handleMouseClick(clickedCellValue)}
                        pencilMarks={pencilMarks}
                        shouldShowBigNumberOnHover={shouldShowBigNumberOnHover}
                    />
                )}
            </div>
        );
    }
}

Cell.defaultProps = {
    isUsingPencilMarks: true,
    value: null
};

Cell.propTypes = {
    isUsingPencilMarks: PropTypes.bool,
    value: PropTypes.string
};
