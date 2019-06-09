import React from 'react'
import clsx from 'clsx'

import './HoverGrid.css'

class HoverGrid extends React.PureComponent {
    constructor(props) {
        super(props)

        this.handleMouseHover = this.handleMouseHover.bind(this)

        this.state = {
            hover: {
                isHovering: false,
                value: null,
            },
        }
    }

    handleMouseHover(number, isHovering) {
        //debugger;
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
        const {
            handleClick,
            pencilMarks,
            shouldShowBigNumberOnHover,
        } = this.props
        const {
            hover: { isHovering, value },
        } = this.state

        // if (shouldShowBigNumberOnHover && isHovering) {
        //     return <div>{value}</div>
        // }

        return (
            <div className="wrapper">
                {shouldShowBigNumberOnHover && isHovering && (
                    <div className={'bigNumber'}>{value}</div>
                )}
                <div className="pencilMarkGrid">
                    {availablePencilMarks.map(pencilMark => {
                        const hoverAreaClasses = clsx('hoverArea', {
                            lightPencilMark:
                                !(shouldShowBigNumberOnHover && isHovering) &&
                                isHovering &&
                                value === pencilMark,
                            darkPencilMark:
                                !(shouldShowBigNumberOnHover && isHovering) &&
                                pencilMarks.includes(pencilMark),
                            //bigNumber: shouldShowBigNumberOnHover && isHovering
                        })
                        return (
                            <>
                                <div
                                    className={hoverAreaClasses}
                                    key={pencilMark}
                                    onClick={() => handleClick(pencilMark)}
                                    onMouseEnter={() =>
                                        this.handleMouseHover(pencilMark, true)
                                    }
                                    onMouseLeave={() =>
                                        this.handleMouseHover(pencilMark, false)
                                    }
                                >
                                    {pencilMark}
                                </div>
                            </>
                        )
                    })}
                </div>
            </div>
        )
    }
}

export default HoverGrid
