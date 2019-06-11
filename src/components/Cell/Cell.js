import React from "react";
import "./Cell.css";
import HoverGrid from "../HoverGrid/HoverGrid";

// TODO: Can we refactor using the fact that the only time we're giving this class
// a prop of "value" is when the value should be fixed? i.e. whenever we see a value
// prop, assume the cell has a fixed value - don't need a separate prop to tell us that.

// TODO: Accessibility concerns with onClicks on divs, etc.
class Cell extends React.PureComponent {
    constructor(props) {
        super(props);

        this.handleKeyDown = this.handleKeyDown.bind(this);
        this.handleMouseClick = this.handleMouseClick.bind(this);
        this.updateCellValue = this.updateCellValue.bind(this);
        this.updatePencilMarks = this.updatePencilMarks.bind(this);

        const { value } = this.props;

        this.state = {
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
        const { isFixedValue } = this.props;

        if (event.key === "Delete" && !isFixedValue) {
            this.setState({
                value: ""
            });
        }
    }

    handleMouseClick(number) {
        if (this.props.entryMethod === "pencilMarks") {
            this.updatePencilMarks(number);
        } else {
            this.updateCellValue(number);
        }
    }

    render() {
        const { entryMethod } = this.props;
        const { pencilMarks, value } = this.state;

        const shouldShowBigNumberOnHover = entryMethod === "numbers";
        const cellHasValue = value !== "";

        return (
            <div className="cell" onKeyDown={this.handleKeyDown} tabIndex="0">
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

export default Cell;
