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
                        additionalClassNames,
                        handleClick,
                        isCurrentlySelected,
                        title
                    } = button;
                    const buttonClasses = clsx(
                        { [styles.selected]: isCurrentlySelected },
                        additionalClassNames
                    );

                    return (
                        <button
                            type="button"
                            onClick={() => handleClick()}
                            key={title}
                            className={buttonClasses}
                        >
                            {title}
                        </button>
                    );
                })}
            </div>
        </div>
    );
}

// todo: should take a isCurrentlySelected prop

ButtonGroup.defaultProps = {
    buttons: [
        {
            additionalClassNames: [],
            isCurrentlySelected: false,
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
            isCurrentlySelected: PropTypes.bool,
            title: PropTypes.string
        })
    ),
    label: PropTypes.string
};
