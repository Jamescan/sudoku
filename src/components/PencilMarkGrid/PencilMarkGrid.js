import React from 'react'
import clsx from 'clsx'

import './PencilMarkGrid.css'

class PencilMarkGrid extends React.PureComponent {
    constructor(props) {
        super(props)

        this.handleMouseClick = this.handleMouseClick.bind(this)
        this.handleMouseHover = this.handleMouseHover.bind(this)
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

    /*
     * Handle the user's mouse click depending on the currently selected entry method.
     */
    handleMouseClick(number) {
        const { entryMethod } = this.props
        //if (entryMethod === 'pencilMarks') {
        this.updatePencilMarks(number)
        //} else {
        //    this.updateCellValue(number)
        //}
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
        const availablePencilMarks = [
            '1',
            '2',
            '3',
            '4',
            '5',
            '6',
            '7',
            '8',
            '9',
        ]

        return (
            <div className="pencilMarkGrid">
                {availablePencilMarks.map(pencilMark => {
                    const hoverAreaClasses = clsx('hoverArea', {
                        lightPencilMark:
                            this.state.hover.isHovering &&
                            this.state.hover.value === pencilMark,
                        darkPencilMark: this.state.pencilMarks.includes(
                            pencilMark
                        ),
                    })
                    return (
                        <div
                            className={hoverAreaClasses}
                            key={pencilMark}
                            onClick={() => this.handleMouseClick(pencilMark)}
                            onMouseEnter={() =>
                                this.handleMouseHover(pencilMark, true)
                            }
                            onMouseLeave={() =>
                                this.handleMouseHover(pencilMark, false)
                            }
                        >
                            {pencilMark}
                        </div>
                    )
                })}
            </div>
        )
    }
}

export default PencilMarkGrid
