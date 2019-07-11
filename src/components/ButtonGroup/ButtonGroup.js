import React from "react";
import PropTypes from "prop-types";
import clsx from "clsx";
import styles from "./ButtonGroup.module.css";

export function ButtonGroup({ buttons, title: label }) {
    return (
        <div className={styles.buttonGroupWrapper}>
            <span>{label}</span>
            <div className={styles.buttonGroup}>
                {buttons.map(button => {
                    const { additionalClassNames, handleClick, isSelected, title } = button;
                    const buttonClasses = clsx(
                        styles.button,
                        { [styles.selected]: isSelected, [styles.notSelected]: !isSelected },
                        additionalClassNames
                    );

                    return (
                        <button
                            type="button"
                            onClick={() => handleClick()}
                            key={title}
                            className={buttonClasses}
                            disabled={isSelected}
                        >
                            {title}
                        </button>
                    );
                })}
            </div>
        </div>
    );
}

ButtonGroup.defaultProps = {
    buttons: [
        {
            additionalClassNames: [],
            isSelected: false,
            title: "Button"
        }
    ],
    title: ""
};

ButtonGroup.propTypes = {
    buttons: PropTypes.arrayOf(
        PropTypes.shape({
            additionalClassNames: PropTypes.oneOfType([
                PropTypes.string,
                PropTypes.array,
                PropTypes.object
            ]),
            handleClick: PropTypes.func.isRequired,
            isSelected: PropTypes.bool,
            title: PropTypes.string
        })
    ),
    title: PropTypes.string
};
