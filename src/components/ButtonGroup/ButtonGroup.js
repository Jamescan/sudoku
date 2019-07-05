import React from "react";
import PropTypes from "prop-types";
import clsx from "clsx";
import styles from "./ButtonGroup.module.css";

/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable jsx-a11y/label-has-for */
// Above pending open issue for accessibility improvements.

export function ButtonGroup({ buttons, label }) {
    return (
        <div className={styles.buttonGroupWrapper}>
            <label>{label}</label>
            <div className={styles.buttonGroup}>
                {buttons.map((button) => {
                    const {
                        additionalClassNames, handleClick, isSelected, title
                    } = button;
                    const buttonClasses = clsx(
                        styles.button,
                        { [styles.selected]: isSelected },
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
    label: ""
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
    label: PropTypes.string
};
