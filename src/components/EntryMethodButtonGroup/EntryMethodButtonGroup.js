import React from "react";
import PropTypes from "prop-types";
import clsx from "clsx";
import styles from "./EntryMethodButtonGroup.module.css";

/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable jsx-a11y/label-has-for */
// Above pending open issue for accessibility improvements.

// TODO: Component should be abstracted into a reusable "ButtonGroup"
export function EntryMethodButtonGroup({ isUsingPencilMarks, toggleEntryMethod }) {
    const bigButtonClasses = clsx(styles.entryMethodButton, { selected: !isUsingPencilMarks });
    const littleButtonClasses = clsx(styles.entryMethodButton, { selected: isUsingPencilMarks });
    return (
        <div className={styles.buttonGroupWrapper}>
            <label>Entry Method</label>
            <div className={styles.buttonGroup}>
                <button
                    className={bigButtonClasses}
                    type="button"
                    onClick={() => toggleEntryMethod()}
                >
                    Big
                </button>
                <button
                    className={littleButtonClasses}
                    type="button"
                    onClick={() => toggleEntryMethod()}
                >
                    Little
                </button>
            </div>
        </div>
    );
}

EntryMethodButtonGroup.defaultProps = {
    isUsingPencilMarks: true
};

EntryMethodButtonGroup.propTypes = {
    isUsingPencilMarks: PropTypes.bool,
    toggleEntryMethod: PropTypes.func.isRequired
};
