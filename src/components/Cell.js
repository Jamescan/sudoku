import React from 'react'
import clsx from 'clsx'
import './Cell.css'

class Cell extends React.PureComponent {
    constructor(props) {
        super(props)
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

    handleMouseHover(number, isHovering) {
        this.setState({
            hover: {
                isHovering,
                value: number,
            },
        })
    }

    render() {
        const hoverNumbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9']
        return (
            <div className="cell">
                {hoverNumbers.map(number => {
                    const hoverAreaClasses = clsx('hoverArea', {
                        lightPencilMark:
                            this.state.hover.isHovering &&
                            this.state.hover.value === number,
                        darkPencilMark: this.state.pencilMarks.includes(number),
                    })
                    return (
                        <div
                            className={hoverAreaClasses}
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
