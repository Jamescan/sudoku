import React from "react";
import PropTypes from "prop-types";
import styles from "./ButtonGroup.module.css";

export function ButtonGroup({ label, buttons }) {
    return (
        <div className={styles.buttonGroupWrapper}>
            {/* eslint-disable-next-line */}
            <label>{label}</label>
            <div className={styles.buttonGroup}>
                {buttons.map(button => (
                    <button type="button" onClick={() => button.handleClick()} key={button.title}>
                        {button.title}
                    </button>
                ))}
            </div>
        </div>
    );
}

ButtonGroup.defaultProps = {
    buttons: [
        {
            handleClick: () => console.log("Clicked"),
            title: "Button"
        }
    ],
    label: ""
};

ButtonGroup.propTypes = {
    buttons: PropTypes.arrayOf(
        PropTypes.shape({
            // TOOD: styles
            handleClick: PropTypes.func,
            title: PropTypes.string
        })
    ),
    label: PropTypes.string
};
