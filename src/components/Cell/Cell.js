import React from 'react'
import clsx from 'clsx'
import './Cell.css'

// todo: finish implementing non-pencil-mark entry method
class Cell extends React.PureComponent {
    constructor(props) {
        super(props)

        this.handleMouseClick = this.handleMouseClick.bind(this)
        this.handleMouseHover = this.handleMouseHover.bind(this)
        this.updateCellValue = this.updateCellValue.bind(this)
        this.updatePencilMarks = this.updatePencilMarks.bind(this)

        this.state = {
            hover: {
                isHovering: false,
                value: null,
            },
            pencilMarks: [],
            shouldShowPencilMarks: true, // probably should be a prop?
            value: null, // the "big-number" value (vs. pencil marks)
        }
    }

    /*
     * If the user has already pencil-marked in a number, remove it. Otherwise, add it.
     */
    updatePencilMarks(number) {
        const { pencilMarks } = this.state
        const updatedPencilMarks = pencilMarks.includes(number)
            ? pencilMarks.filter(pencilMark => pencilMark !== number)
            : [...pencilMarks, number]

        this.setState({
            pencilMarks: updatedPencilMarks,
        })
    }

    // Update the "big number" in the cell. TODO: finish implementing this.
    updateCellValue(number) {
        const { value: cellValue } = this.state
        const newCellValue = cellValue === number ? null : number
        this.setState({
            value: newCellValue,
        })
    }

    /*
     * Handle the user's mouse click depending on the currently selected entry method.
     */
    handleMouseClick(number) {
        const { entryMethod } = this.props
        if (entryMethod === 'pencilMarks') {
            this.updatePencilMarks(number)
        } else {
            this.updateCellValue(number)
        }
    }

    handleMouseHover(number, isHovering) {
        this.setState({
            hover: {
                isHovering,
                value: number,
            },
        })
    }

    render() {
        const pencilMarks = ['1', '2', '3', '4', '5', '6', '7', '8', '9']
        return (
            <div className="cell">
                {pencilMarks.map(number => {
                    const hoverAreaClasses = clsx('hoverArea', {
                        lightPencilMark:
                            this.state.hover.isHovering &&
                            this.state.hover.value === number,
                        darkPencilMark: this.state.pencilMarks.includes(number),
                    })
                    return (
                        <div
                            className={hoverAreaClasses}
                            key={number}
                            onClick={() => this.handleMouseClick(number)}
                            onMouseEnter={() =>
                                this.handleMouseHover(number, true)
                            }
                            onMouseLeave={() =>
                                this.handleMouseHover(number, false)
                            }
                        >
                            {number}
                        </div>
                    )
                })}
            </div>
        )
    }
}

export default Cell
