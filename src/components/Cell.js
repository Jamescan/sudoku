import React from 'react'
import clsx from 'clsx'
import './Cell.css'

class Cell extends React.PureComponent {
    constructor(props) {
        super(props)

        this.handleMouseClick = this.handleMouseClick.bind(this)
        this.handleMouseHover = this.handleMouseHover.bind(this)

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
    handleMouseClick(number) {
        if (this.state.pencilMarks.includes(number)) {
            this.setState({
                pencilMarks: this.state.pencilMarks.filter(
                    pencilMark => pencilMark !== number
                ),

                // Fixes issue where user pencil marks a number and removes it and the number still appears
                hover: {
                    isHovering: false,
                },
            })
        } else {
            this.setState({
                pencilMarks: [...this.state.pencilMarks, number],
            })
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
