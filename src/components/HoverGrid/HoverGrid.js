import React from "react";
import PropTypes from "prop-types";
import clsx from "clsx";
import styles from "./HoverGrid.module.css";

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
            <div className={styles.wrapper}>
                {shouldShowBigNumber && (
                    <div
                        className={styles.bigNumber}
                        onMouseLeave={() => this.handleMouseHover(null, false)}
                    >
                        {value}
                    </div>
                )}
                <div className={styles.pencilMarkGrid}>
                    {availablePencilMarks.map(pencilMark => {
                        const hoverAreaClasses = clsx(styles.hoverArea, {
                            [styles.lightPencilMark]:
                                shouldShowPencilMarks && isHovering && value === pencilMark,
                            [styles.darkPencilMark]:
                                shouldShowPencilMarks && pencilMarks.includes(pencilMark)
                        });
                        return (
                            // TODO: Not sure why this +
                            // "onMouseLeave={() => this.handleMouseHover(null, false)}"
                            // on bigNumber breaks things.
                            /* shouldShowPencilMarks && */
                            /* TODO: accessibility concerns */
                            /* eslint-disable jsx-a11y/click-events-have-key-events */
                            /* eslint-disable jsx-a11y/no-static-element-interactions */
                            <div
                                className={hoverAreaClasses}
                                key={pencilMark}
                                onClick={() => handleClick(pencilMark)}
                                onMouseEnter={() => this.handleMouseHover(pencilMark, true)}
                                onMouseLeave={() => this.handleMouseHover(pencilMark, false)}
                            >
                                {pencilMark}
                            </div>
                            /* eslint-enable */
                        );
                    })}
                </div>
            </div>
        );
    }
}

HoverGrid.defaultProps = {
    pencilMarks: [],
    shouldShowBigNumberOnHover: false
};

HoverGrid.propTypes = {
    handleClick: PropTypes.func.isRequired,
    pencilMarks: PropTypes.arrayOf(PropTypes.string),
    shouldShowBigNumberOnHover: PropTypes.bool
};

export default HoverGrid;
