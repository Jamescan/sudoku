import React from "react";
import clsx from "clsx";

import "./HoverGrid.css";

class HoverGrid extends React.PureComponent {
    constructor(props) {
        super(props);

        this.handleMouseHover = this.handleMouseHover.bind(this);

        this.state = {
            hover: {
                isHovering: false,
                value: null
            }
        };
    }

    handleMouseHover(number, isHovering) {
        this.setState({
            hover: {
                isHovering,
                value: number
            }
        });
    }

    render() {
        const availablePencilMarks = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
        const { handleClick, pencilMarks, shouldShowBigNumberOnHover } = this.props;
        const {
            hover: { isHovering, value }
        } = this.state;

        const shouldShowBigNumber = shouldShowBigNumberOnHover && isHovering;
        const shouldShowPencilMarks = !shouldShowBigNumber;

        return (
            <div className="wrapper">
                {shouldShowBigNumber && (
                    <div
                        className={"bigNumber"}
                        onMouseLeave={() => this.handleMouseHover(null, false)}
                    >
                        {value}
                    </div>
                )}
                <div className="pencilMarkGrid">
                    {availablePencilMarks.map(pencilMark => {
                        const hoverAreaClasses = clsx("hoverArea", {
                            lightPencilMark:
                                shouldShowPencilMarks && isHovering && value === pencilMark,
                            darkPencilMark:
                                shouldShowPencilMarks && pencilMarks.includes(pencilMark)
                        });
                        return (
                            // TODO: Not sure why this +
                            // "onMouseLeave={() => this.handleMouseHover(null, false)}"
                            // on bigNumber breaks things.
                            /* shouldShowPencilMarks && */

                            <div
                                className={hoverAreaClasses}
                                key={pencilMark}
                                onClick={() => handleClick(pencilMark)}
                                onMouseEnter={() => this.handleMouseHover(pencilMark, true)}
                                onMouseLeave={() => this.handleMouseHover(pencilMark, false)}
                            >
                                {pencilMark}
                            </div>
                        );
                    })}
                </div>
            </div>
        );
    }
}

export default HoverGrid;
